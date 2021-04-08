import React from 'react';
import { Link } from 'react-router-dom';

class Likes extends React.Component {
    state = {showModel: true}

    toggleModel = () => {
        this.setState({
            showModel: !this.state.showModel
        });
    };
    
    render() {
        return (
            <div className={this.props.className}>
                <div className="l-head">
                    <h2>YOU CART</h2>
                    <img src="/assets/icons/delete.png" alt="X" onClick={this.props.toggle} style={{cursor:"pointer"}} />
                </div>
                <div className="l-body">
                    <ul className="l-products">
                        <li className="l-product">
                            <img src="/assets/products/woman2.png" alt="product-img" className="l-prod-img"/>
                            <div className="l-prod-details">
                                <p>consectetur adipisicing elit</p>
                                <p>1x$17.05</p>
                            </div>
                        </li>
                        <li className="l-product">
                            <img src="/assets/products/man1.png" alt="product-img" className="l-prod-img"/>
                            <div className="l-prod-details">
                                <p>Lorem ipsum dolor</p>
                                <p>1x$24.19</p>
                            </div>
                        </li>
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
}

export default Likes;