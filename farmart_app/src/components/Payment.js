import React, { useState } from 'react';

function Payment({ cart, onCompletePayment }) {
    const [paymentMode, setPaymentMode] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [shippingDetails, setShippingDetails] = useState({
        fullName: '',
        town: '',
        landmark: '',
        phoneNumber: ''
    });
    const [shippingSubmitted, setShippingSubmitted] = useState(false);

    const handlePayment = () => {
    // Perform payment process based on selected mode
    // In a real application, you would implement payment processing logic here
    // Simulating payment success
        setTimeout(() => {
        setPaymentSuccess(true);
        onCompletePayment(); // Call onCompletePayment upon successful payment
        }, 2000); // Simulating payment processing time
    };

    const handleModeChange = (mode) => {
        setPaymentMode(mode);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmitShipping = (e) => {
        e.preventDefault();
        console.log("Shipping details submitted:", shippingDetails);
        setShippingSubmitted(true);
    };

    const EditShippingDetails = () => (
        <div>
            <h2>Edit Shipping Details</h2>
            <form onSubmit={handleSubmitShipping}>
                <div>
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" value={shippingDetails.fullName} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="town">Address:</label>
                    <input type="text" id="town" name="town" value={shippingDetails.town} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="landmark">Nearest Landmark:</label>
                    <input type="text" id="landmark" name="landmark" value={shippingDetails.landmark} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" value={shippingDetails.phoneNumber} onChange={handleChange} required />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );

    const ShippingDetailsSummary = () => (
        <div>
            <h2>Shipping Details</h2>
            <p>Full Name: {shippingDetails.fullName}</p>
            <p>Address: {shippingDetails.address}</p>
            <p>City: {shippingDetails.city}</p>
            <p>Postal Code: {shippingDetails.postalCode}</p>
            <button onClick={() => setShippingSubmitted(false)}>Edit</button>
        </div>
    );

    const paymentModes = () => {
        return (
            <div>
                <h2>Select Payment Mode</h2>
                <button onClick={() => handleModeChange('mobile-money')}>Mobile Money</button>
                <button onClick={() => handleModeChange('bank')}>Bank Transfer</button>
                <button onClick={() => handleModeChange('card')}>Card</button>
            </div>
        );
    };

    const successfulPayment = () => {
        return (
            <div>
                <h2>Payment Successful!</h2>
                <p>Your order is being processed.</p>
            </div>
        );
    };

    return (
        <div>
            <div className='checkout-details'>
                <form onSubmit={handleSubmitShipping}>
                    <h2>Shipping Details</h2>
                    <div>
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName" name="fullName" value={shippingDetails.fullName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="town">Town:</label>
                        <input type="text" id="town" name="town" value={shippingDetails.town} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="landmark">Nearest Landmark:</label>
                        <input type="text" id="landmark" name="landmark" value={shippingDetails.landmark} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" value={shippingDetails.phoneNumber} onChange={handleChange} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
            {!paymentMode && paymentModes()}
            {paymentMode && !paymentSuccess && (
            <div>
                {!shippingSubmitted ? <EditShippingDetails /> : <ShippingDetailsSummary />}
                <h2>Confirm Payment</h2>
                <p>Total Amount: Kes. {cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                <p>Payment Mode: {paymentMode}</p>
                <button onClick={handlePayment}>Confirm Payment</button>
            </div>
            )}
            {paymentSuccess && successfulPayment()}
        </div>
    );
}

export default Payment;