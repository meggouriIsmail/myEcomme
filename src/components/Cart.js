import React, { useState, useEffect } from 'react';
import CheckOut from './CheckOut';

const Cart = () => {
    const incrementValue = (e, price) => {
        const num = e.target.parentElement.children.numProduct;
        num.stepUp(1);
        const el = e.target.parentElement.parentElement.nextElementSibling;
        updatePrice(num.value, price, el);
    }
    const decrementValue = (e, price) => {
        const num = e.target.parentElement.children.numProduct;
        num.stepDown(1);
        const el = e.target.parentElement.parentElement.nextElementSibling;
        updatePrice(num.value, price, el);
    }
    const updatePrice = (num, price, el) => {
        const pr = (parseFloat(price) * parseInt(num)).toFixed(2);
        el.innerText = `$ ${pr}`;
    }

    const [cartProds, setCart] = useState(
        localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    );

    useEffect(() => {
        const json = localStorage.getItem("cart");
        const cartProducts = JSON.parse(json);
        if (cartProducts) {
            setCart(cartProducts);
        }
    }, []);

    useEffect(() => {
        const json = JSON.stringify(cartProds);
        localStorage.setItem("cart", json);
    }, [cartProds]);

    const checkProduct = () => {
        const num = document.querySelectorAll(".plusmin-input")
        num.forEach(n => {
            if (n.value === "0") {
                deleteLikedProd(parseInt(n.name))
            }
            else {
                updateProducts(parseInt(n.name), parseInt(n.value));
            }
        })
    }
    const deleteLikedProd = (idToDelete) => {
        const filteredProducts = cartProds.filter((prod) => prod.id !== idToDelete);
        setCart(filteredProducts);
    };
    var newProds = [];
    const updateProducts = (id, q) => {
        const prod = cartProds.find((prod) => prod.id === id);
        const Prod = {
            id: prod.id,
            name: prod.name,
            total: parseFloat(prod.price) * q,
            price: prod.price,
            quantity: q,
            image: prod.image
        };
        newProds.push(Prod);
        setCart([...newProds]);
    };

    return (
        <div className="row">
            <div className="Cart">
                <div className="wrap-table-shopping-cart">
                    <table className="table-shopping-cart">
                        <tbody>
                            <tr className="table_head">
                                <th className="column-1">Product</th>
                                <th className="column-2"></th>
                                <th className="column-3">Price</th>
                                <th className="column-4">Quantity</th>
                                <th className="column-5">Total</th>
                            </tr>
                            {
                                cartProds.map(prod => {
                                    return (
                                        <tr className="table_row" key={prod.id}>
                                            <td className="column-1">
                                                <div >
                                                    <img src={prod.image} alt="IMG" className="img-itemcart" />
                                                </div>
                                            </td>
                                            <td className="column-2">{prod.name}</td>
                                            <td className="column-3">$ {prod.price}</td>
                                            <td className="column-4">
                                                <div className="plusmin">
                                                    <input type="button" value="+" className="plusmin-btns" onClick={(e) => incrementValue(e, prod.price)} />
                                                    <input type="number" id="numProduct" name={prod.id} defaultValue={prod.quantity} readOnly className="plusmin-input" min="0" max="10" />
                                                    <input type="button" value="-" className="plusmin-btns" onClick={(e) => decrementValue(e, prod.price)} />
                                                </div>
                                            </td>
                                            <td className="column-5">$ {prod.total}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="br-w p-30">
                    <input className="btn-update" type="button" name="update" value="Update Cart" onClick={checkProduct} />
                </div>
            </div>
            <CheckOut />
        </div>
    );
}

export default Cart;