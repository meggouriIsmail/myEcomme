import React from 'react';
import { Transition } from 'react-transition-group';
import Cart from './Cart';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    state = {
        showModel: false,
        showLinks: false,
    }
    
    toggleModel = () => {
        this.setState({
            showModel: !this.state.showModel,
        });
    };
    
    toggleLinks = () => {
        this.setState({
            showLinks: !this.state.showLinks
        });
    };
    
    
    render() {
        
        return (
            <div className="navBar">
                <Link to="/">
                    <h2>Ecommerce</h2>
                </Link>
                <div className={`nav-links ${ this.state.showLinks ? "active" : null}`}>
                    <ul className="page-links">
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/shop">
                            <li>Shop</li>
                        </Link>
                        <Link to="/about">
                            <li>About</li>
                        </Link>
                        <Link to="/contact">
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
                <ul className="card-links">
                    <li onClick={this.props.Click}><img src="/assets/icons/search.png" alt="like"/></li>
                    <li onClick={this.toggleModel}><img src="/assets/icons/shopping_cart.png" alt="shopping"/></li>
                    <li onClick={this.toggleModel}><img src="/assets/icons/love.png" alt="like"/></li>
                </ul>
                <img src="/assets/icons/menu.png" alt="like" className="menu-sm" onClick={this.toggleLinks} />
                <Transition in={this.state.showModel} timeout={200}>
                    {(state) => (
                        <Cart className={`cart cart-${state}`} toggle={this.toggleModel} />
                    )}
                </Transition>
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