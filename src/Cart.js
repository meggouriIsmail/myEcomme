import React from 'react';

class Cart extends React.Component {
    state = {showModel: this.props.toggle}

    toggleModel = () => {
        this.setState({
            showModel: !this.state.showModel 
        });
    };

    render() { 
        return (
            <div className="cart">
                <div className="c-head">
                    <h2>YOU CART</h2>
                    <img src="" alt="X" onClick={this.toggleModel} />
                </div>
            </div>
        );
    }
}
 
export default Cart;