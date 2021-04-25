import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';


const Product = ({ match }) => {
    const [product, setProduct] = useState({});
    const [price, setPrice] = useState();
    const [cartProds, setCart] = useState(
        localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    );
    const [checkModel, setModel] = useState({ inProp: false, text: "", icon: "" });

    function showCheckModel(text, icon) {
        const mdl = {
            inProp: !checkModel.inProp,
            text: text,
            icon: icon
        }
        setModel(mdl);
        console.log(checkModel);
    }

    useEffect(() => {
        async function getProduct() {
            const res = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
            const data = await res.json();
            setProduct(data);
        }
        getProduct();
    }, [match.params.id]);

    useEffect(() => {
        const json = JSON.stringify(cartProds);
        localStorage.setItem("cart", json);
    }, [cartProds]);

    const checkProduct = (prod) => {
        const exists = cartProds.find(p => p.id === prod.id) === undefined ? false : true;
        const msg = prod.title;

        if (exists) {
            showCheckModel(msg + " is already in cart", "close");
        } else if (price !== undefined) {
            addProduct(prod);
            showCheckModel(msg + " is added to cart", "check");
        } else if (price === undefined) {
            showCheckModel("you need to add at least one item of this product to add it to cart", "close");
        }
    }

    const addProduct = (prod) => {
        const likedProd = {
            id: prod.id,
            name: prod.title,
            total: price,
            price: prod.price,
            quantity: num.value,
            image: prod.image
        };
        setCart([...cartProds, likedProd]);
    };

    const num = document.getElementById("numProduct");

    const incrementValue = () => {
        num.stepUp(1);
        updatePrice(num.value);
    }

    const decrementValue = () => {
        num.stepDown(1);
        updatePrice(num.value);
    }

    const updatePrice = () => {
        const pr = (parseFloat(product.price) * parseInt(num.value)).toFixed(2);
        setPrice(pr);
    }

    const duration = 300;

    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
        transform: "translateY(-100%)"
    }

    const transitionStyles = {
        entering: { opacity: 1, transform: "translateY(0%)" },
        entered: { opacity: 1, transform: "translateY(0%)" },
    };

    return (
        <div className="product-details">
            <div className="prdt-head">
                <Link to="/shop">Shop</Link>
                <img src="/assets/icons/more.png" alt="&gt;" />
                <p>{product.title}</p>
            </div>
            <div className="prdt">
                <div>
                    <img src={product.image} style={{ height: "500px", maxWidth: "100%" }} alt="product" />
                </div>
                <div className="prdt-info">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <span>${product.price}</span>
                    <div className="plusmin">
                        <input type="button" value="+" className="plusmin-btns" onClick={incrementValue} />
                        <input type="number" name="num-product" id="numProduct" readOnly className="plusmin-input" min="1" max="10" />
                        <input type="button" value="-" className="plusmin-btns" onClick={decrementValue} />
                    </div>
                    <h2>Total: ${price}</h2>
                    <input type="button" value="ADD TO CART" className="prod-btn-more" onClick={checkProduct.bind(this, product)} />
                    <Transition in={checkModel.inProp} timeout={duration}>
                        {(state) => (
                            <div id="model" style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                                <div className="model-block">
                                    <img src={`/assets/icons/${checkModel.icon}.png`} alt="like" onClick={() => { showCheckModel(!checkModel.inProp) }} />
                                    <h5>{checkModel.text}</h5>
                                </div>
                            </div>
                        )}
                    </Transition>
                </div>
            </div>
        </div>
    );
}

export default Product;