import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Likes = (props) => {
    const [clear, setClear] = useState(false)
    const [value, setValue] = useState(
        localStorage.getItem("likedProduct") ? JSON.parse(localStorage.getItem("likedProduct")) : []
    );

    useEffect(() => {
        const json = localStorage.getItem("likedProduct");
        const likedProducts = JSON.parse(json);
        if (likedProducts) {
            setValue(likedProducts);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage.getItem("likedProduct")]);

    const clearStorage = () => {
        setClear(!clear)
        localStorage.clear("likedProduct")
    }

    const deleteLikedProd = (idToDelete) => {
        const filteredProducts = value.filter((prod) => prod.id !== idToDelete);
        setValue(filteredProducts);
    };

    useEffect(() => {
        const json = JSON.stringify(value);
        localStorage.setItem("likedProduct", json);
    }, []);

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
                                    <img src="/assets/icons/trash.png" onClick={() => deleteLikedProd(data.id)} style={{ marginLeft: "20px", cursor: "pointer" }} alt="trash" />
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
                <input type="button" value="CLEAR" className="prod-btn-more" onClick={clearStorage} />
            </div>
        </div>
    );
}

export default Likes;