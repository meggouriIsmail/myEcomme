const CheckOut = () => {
    return (
        <div className="Checkout">
            <h1 className="poppins-bold">
                Cart Totals
            </h1>
            <div className="br-b p-b-30">
                <div>
                    <span className="poppins-italic">
                        Subtotal: $79.65
                    </span>
                </div>
            </div>
            <div className="br-b d-flex p-b-30">
                <div className="w-35">
                    <span className="poppins-italic">
                        Shipping:
                    </span>
                </div>
                <div className="w-65">
                    <p className="poppins-light f-size-14">
                        There are no shipping methods available. Please double check your address, or contact us if you need any help.
                    </p>
                    <div>
                        <span className="poppins-italic">
                            Calculate Shipping
                        </span>
                        <div>
                            <select name="time" tabIndex="-1" aria-hidden="true" className="w-100 shipping-info poppins-regular">
                                <option>Select a country...</option>
                                <option>Morocco</option>
                                <option>USA</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" name="state" placeholder="State /  country" className="w-100 shipping-info poppins-regular" />
                        </div>
                        <div>
                            <input type="text" name="postcode" placeholder="Postcode / Zip" className="w-100 shipping-info poppins-regular" />
                        </div>
                        <div>
                            <div className="poppins-medium">
                                Update Totals
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="br-b p-b-30">
                <span className="poppins-italic f-size-24">
                    Total: $79.65
                </span>
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