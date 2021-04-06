import React from 'react';

class Cart extends React.Component {
    state = {showModel: true}

    toggleModel = () => {
        this.setState({
            showModel: !this.state.showModel
        });
    };
    
    render() {
        return (
            <div className={this.props.className}>
                <div className="c-head">
                    <h2>YOU CART</h2>
                    <img src="/assets/icons/delete.png" alt="X" onClick={this.props.toggle} style={{cursor:"pointer"}} />
                </div>
                <div className="c-body">
                    <ul className="c-products">
                        <li className="c-product">
                            <img src="/assets/products/woman2.png" alt="product-img" className="c-prod-img"/>
                            <div className="c-prod-details">
                                <p>consectetur adipisicing elit</p>
                                <p>1x$17.05</p>
                            </div>
                        </li>
                        <li className="c-product">
                            <img src="/assets/products/man1.png" alt="product-img" className="c-prod-img"/>
                            <div className="c-prod-details">
                                <p>Lorem ipsum dolor</p>
                                <p>1x$24.19</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="c-footer">
                    <h2>Total: $41.24</h2>
                    <input type="button" value="VIEW CART" className="prod-btn-more" />
                </div>
            </div>
        );
    }
}

export default Cart;