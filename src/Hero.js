const Hero = () => {
    return ( 
        <div className="hero">
            <img src={`${process.env.PUBLIC_URL}/assets/products/style.jpg`} alt="hero"/>
            <div className="h-Info">
                <p className="h-desc">Men Collection 2021</p>
                <h1 className="h-title" >NEW ARRIVALS</h1>
                <input type="button" value="SHOP NOW" className="h-btn-shop" />
            </div>
        </div>
    );
}
 
export default Hero;