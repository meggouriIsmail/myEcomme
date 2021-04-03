import React from 'react';
import Cart from './Cart';

class NavBar extends React.Component {
    state = {showModel: false}
    
    
    showLinks = () => {
        const navlinks = document.querySelector('.nav-links');
        navlinks.classList.toggle('nav-links-active');
        navlinks.classList.add('nav-links-display');
        
    }
    
    toggleModel = () => {
        this.setState({
            showModel: !this.state.showModel 
        });
    };

    render() { 
        return (
            <div className="navBar">
                <h2>Ecommerce</h2>
                <div className="nav-links">
                    <ul className="page-links">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <ul className="card-links">
                    <li onClick={this.toggleModel}><img src="/assets/icons/search.png" alt="like"/></li>
                    <li onClick={this.toggleModel}><img src="/assets/icons/shopping_cart.png" alt="shopping"/></li>
                    <li onClick={this.toggleModel}><img src="/assets/icons/love.png" alt="like"/></li>
                </ul>
                <img src="/assets/icons/menu.png" alt="like" className="menu-sm" onClick={this.showLinks} />
                {this.state.showModel ? <Cart toggle={this.state.showModel}/>:null}
            </div>
        );
    }
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        document.querySelector('.navBar').classList.add('navBar-sticky');
    } else {
        document.querySelector('.navBar').classList.remove('navBar-sticky');
    }
});

export default NavBar;