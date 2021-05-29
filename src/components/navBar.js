import React from 'react';
import { Transition } from 'react-transition-group';
import Likes from './Likes';
import { Link } from 'react-router-dom';

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
                <div className={`nav-links ${this.state.showLinks ? "active" : null}`}>
                    <ul className="page-links">
                        <Link to="/">
                            <li onClick={this.toggleLinks}>Home</li>
                        </Link>
                        <Link to="/shop">
                            <li onClick={this.toggleLinks}>Shop</li>
                        </Link>
                        <Link to="/about">
                            <li onClick={this.toggleLinks}>About</li>
                        </Link>
                        <Link to="/contact">
                            <li onClick={this.toggleLinks}>Contact</li>
                        </Link>
                    </ul>
                </div>
                <ul className="card-links">
                    <li onClick={this.props.Click}><img src={`${process.env.PUBLIC_URL}/assets/icons/search.png`} alt="like" /></li>
                    <Link to="/cart">
                        <li><img src={`${process.env.PUBLIC_URL}/assets/icons/shopping_cart.png`} alt="shopping" /></li>
                    </Link>
                    <li onClick={this.toggleModel}><img src={`${process.env.PUBLIC_URL}/assets/icons/love.png`} alt="like" /></li>
                </ul>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/menu.png`} alt="like" className="menu-sm" onClick={this.toggleLinks} />
                <Transition in={this.state.showModel} timeout={200}>
                    {(state) => (
                        <Likes className={`like like-${state}`} toggle={this.toggleModel} />
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