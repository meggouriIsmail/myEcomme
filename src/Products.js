const Products = (props) => {
    const products = props.info;

    return (
        <div>
            <div className="product-grid">
                {
                    (products ? products : []).map((obj, index) => {
                        return (
                            <div className="product" key={index}>
                                <img src={`/assets/products/${obj.product}`} alt="product-pic" className="prod-img"/>
                                <input type="button" value="SHOP NOW" className="prod-btn-shop btn-shop" />
                                <div className="prod-description">
                                    <div className="prod-desc">
                                        <p>{obj.title}</p>
                                        <a href="w" className="prod-like">
                                            <img src="/assets/icons/love.png" alt="like" className="prod-icon" />
                                            <img src="/assets/icons/love_color.png" alt="like" className="prod-icon-color"/>
                                        </a>
                                    </div>
                                    <p className="prod-price">${obj.price}</p>
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