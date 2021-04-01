
function NavBar() {
    return (
        <div className="navBar">
            <h2>Ecommerce</h2>
            <ul className="page-links">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <ul className="card-links">
                <li><img src={`${process.env.PUBLIC_URL}/assets/icons/search.png`} alt="like"/></li>
                <li><img src={`${process.env.PUBLIC_URL}/assets/icons/shopping_cart.png`} alt="shopping"/></li>
                <li><img src={`${process.env.PUBLIC_URL}/assets/icons/love.png`} alt="like"/></li>
            </ul>
        </div>
    );
}

export default NavBar;