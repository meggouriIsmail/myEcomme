import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <img src={`${process.env.PUBLIC_URL}/assets/products/shirts.jpg`} className="h-img" alt="hero" />
            <div className="h-Info">
                <p className="h-desc">Men Collection 2021</p>
                <h1 className="h-title" >NEW ARRIVALS</h1>
                <Link to="/shop">
                    <input type="button" value="SHOP NOW" className="h-btn-shop btn-shop " />
                </Link>
            </div>
        </div>
    );
}

export default Hero;