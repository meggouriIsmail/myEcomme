import React, { useState, useEffect } from 'react';

const Cart = () => {

    useEffect(() => {
        setPrice(36.00)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [price, setPrice] = useState();


    const incrementValue = () => {
        const num = document.querySelector(".plusmin-input");
        num.stepUp(1);
        updatePrice(num.value);
    }

    const decrementValue = () => {
        const num = document.querySelector(".plusmin-input");
        num.stepDown(1);
        updatePrice(num.value);
    }

    const updatePrice = (num) => {
        const pr = (36 * parseInt(num)).toFixed(2);
        setPrice(pr);
    }

    return (
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
                        <tr className="table_row">
                            <td className="column-1">
                                <div >
                                    <img src="/assets/products/man1.png" alt="IMG" className="img-itemcart" />
                                </div>
                            </td>
                            <td className="column-2">Fresh Strawberries</td>
                            <td className="column-3">$ 36.00</td>
                            <td className="column-4">
                                <div className="plusmin">
                                    <input type="button" value="+" className="plusmin-btns" onClick={incrementValue} />
                                    <input type="number" name="num-product" id="numProduct" defaultValue="1" readOnly className="plusmin-input" min="1" max="10" />
                                    <input type="button" value="-" className="plusmin-btns" onClick={decrementValue} />
                                </div>
                            </td>
                            <td className="column-5">$ {price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Cart;