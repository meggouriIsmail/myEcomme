import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Likes = (props) => {
    const [value, setValue] = useState([]);

    useEffect(() => {
        const json = localStorage.getItem("likedProduct");
        const likedProducts = JSON.parse(json);
        if (likedProducts) {
            setValue(likedProducts);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage.getItem("likedProduct")]);

    return (
        <div className={props.className}>
            <div className="l-head">
                <h2>YOU CART</h2>
                <img src="/assets/icons/delete.png" alt="X" onClick={props.toggle} style={{ cursor: "pointer" }} />
            </div>
            <div className="l-body">
                <ul className="l-products">
                    {
                        value.map((data, index) => {
                            return (
                                <li className="l-product" key={index}>
                                    <img src={data.image} alt="product-img" className="l-prod-img" />
                                    <div className="l-prod-details">
                                        <p>{data.name}</p>
                                        <p>1x${data.price}</p>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className="l-footer">
                <h2>Total: $41.24</h2>
                <Link to="/cart">
                    <input type="button" value="VIEW CART" className="prod-btn-more" />
                </Link>
            </div>
        </div>
    );
}

export default Likes;