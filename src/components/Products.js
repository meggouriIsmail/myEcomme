import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([]);
    
    async function getProducts() {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
    }
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div style={{margin:"6em auto"}}>
            <div className="prod-cat">
                <input type="button" value="All"/>
                <input type="button" value="Men"/>
                <input type="button" value="Women"/>
                <input type="button" value="Jewelery"/>
                <input type="button" value="Electronics"/>
            </div>
            <div className="product-grid">
                {
                    products.map((product) => {
                        return (
                            <div className="product" key={product.id}>
                                <img src={product.image} alt="product-pic" className="prod-img"/>
                                <Link to={`/shop/${product.id}`}>
                                    <input type="button" value="SHOP NOW" className="prod-btn-shop btn-shop" />
                                </Link>
                                <div className="prod-description">
                                    <div className="prod-desc">
                                        <p>{product.category}</p>
                                        <a href="w" className="prod-like">
                                            <img src="/assets/icons/love.png" alt="like" className="prod-icon" />
                                            <img src="/assets/icons/love_color.png" alt="like" className="prod-icon-color"/>
                                        </a>
                                    </div>
                                    <p className="prod-price">${product.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <input type="button" value="SHOW MORE" className="prod-btn-more" />
        </div>
    );
}
 
export default Products;