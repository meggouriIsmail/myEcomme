const CheckOut = () => {
    return (
        <div className="Checkout">
            <h1>
                Cart Totals
            </h1>
            <div className="br-b p-b-30">
                <div>
                    <i>
                        Subtotal: $79.65
                    </i>
                </div>
            </div>
            <div className="br-b d-flex p-b-30">
                <div className="w-35">
                    <i>
                        Shipping:
                    </i>
                </div>
                <div className="w-65">
                    <p className="f-size-14">
                        There are no shipping methods available. Please double check your address, or contact us if you need any help.
                    </p>
                    <div>
                        <i>
                            Calculate Shipping
                        </i>
                        <div>
                            <select name="time" tabIndex="-1" aria-hidden="true" className="w-100 shipping-info">
                                <option>Select a country...</option>
                                <option>Morocco</option>
                                <option>USA</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" name="state" placeholder="State /  country" className="w-100 shipping-info" />
                        </div>
                        <div>
                            <input type="text" name="postcode" placeholder="Postcode / Zip" className="w-100 shipping-info" />
                        </div>
                        <div>
                            <div>
                                Update Totals
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="br-b p-b-30">
                <i className=" f-size-24">
                    Total: $79.65
                </i>
            </div>
            <div className="m-btn">
                <button type="submit" className="btn-checkout">
                    Proceed to Checkout
                </button>
            </div>
        </div >
    );
}

export default CheckOut;