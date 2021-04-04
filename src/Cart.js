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
            </div>
        );
    }
}

export default Cart;