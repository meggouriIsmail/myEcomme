import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ match }) => {
    
    useEffect(() => {
        setPrice(product.price)
        getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [product, setProduct] = useState({});
    const [price, setPrice] = useState();

    async function getProduct() {
        const res = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const data = await res.json();
        setProduct(data);
    }

    const num = document.getElementById("numProduct")

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

    return (
        <div className="product-details">
            <div className="prdt-head">
                <Link to="/shop">Shop</Link> 
                <img src="/assets/icons/more.png" alt="&gt;"/>
                <p>{product.title}</p>
            </div>
            <div className="prdt">
                <div>
                    <img src={product.image} style={{width:"100%"}} alt="product"/>
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
                    <input type="button" value="ADD TO CART" className="prod-btn-more" />
                </div>
            </div>
        </div>
    );
}
 
export default Product;