import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import mpesa from '../Images/mpesa.png';
import airtel from '../Images/airtel.png';
import './Payment.css';
import { CartContext } from './MyCartContext'; 
import Footer from './Footer';

function Payment() {
    const { cart, getTotalPrice, clearCart } = useContext(CartContext);
    const location = useLocation();
    const totalAmount = getTotalPrice(); 
    const onCompletePayment = location.state?.onCompletePayment;

    const [paymentMode, setPaymentMode] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [shippingDetails, setShippingDetails] = useState({
        fullName: '',
        town: '',
        landmark: '',
        phoneNumber: ''
    });
    const [shippingSubmitted, setShippingSubmitted] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const [cardDetails, setCardDetails] = useState({
        cardHolderName: '',
        cardNumber: '',
        cvv: '',
        expiryDate: ''
    });

    const [mobileNumber, setMobileNumber] = useState('');

    const handlePayment = () => {
        setTimeout(() => {
            setPaymentSuccess(true);
            if (onCompletePayment) {
                onCompletePayment();
            }
            clearCart();
        }, 2000);
    };

    const handleModeChange = (mode) => {
        setPaymentMode(mode);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (['fullName', 'town', 'landmark', 'phoneNumber'].includes(name)) {
            setShippingDetails(prevState => ({
                ...prevState,
                [name]: value
            }));
        } else if (['cardHolderName', 'cardNumber', 'cvv', 'expiryDate'].includes(name)) {
            setCardDetails(prevState => ({
                ...prevState,
                [name]: value
            }));
        } else if (name === 'mobileNumber') {
            setMobileNumber(value);
        }
    };

    const handleSubmitShipping = (e) => {
        e.preventDefault();
        console.log("Shipping details submitted:", shippingDetails);
        setShippingSubmitted(true);
        setEditMode(false);
    };

    const handleEditShipping = () => {
        setEditMode(true);
    };

    return (
        <div>
            <div className='shipping-payment'>
            <div className='checkout-details'>
                {shippingSubmitted && !editMode ? (
                    <div>
                        <h2>Shipping Details</h2>
                        <p>Full Name: {shippingDetails.fullName}</p>
                        <p>Town: {shippingDetails.town}</p>
                        <p>Nearest Landmark: {shippingDetails.landmark}</p>
                        <p>Phone Number: {shippingDetails.phoneNumber}</p>
                        <button onClick={handleEditShipping}>Edit</button>
                    </div>
                ) : (
                    <div className='shipping-details'>
                        <h2>{editMode ? 'Edit' : 'Add'} Shipping Details</h2>
                        <form onSubmit={handleSubmitShipping}>
                            <div>
                                <label>Full Name:</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={shippingDetails.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Town:</label>
                                <input
                                    type="text"
                                    id="town"
                                    name="town"
                                    value={shippingDetails.town}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Nearest Landmark:</label>
                                <input
                                    type="text"
                                    id="landmark"
                                    name="landmark"
                                    value={shippingDetails.landmark}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Phone Number:</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={shippingDetails.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit">{editMode ? 'Update' : 'Submit'}</button>
                        </form>
                    </div>
                )}
            </div>
            <div className='payments'>
            {!paymentMode && (
                <div >
                    <h2>Select Payment Mode</h2>
                    <button onClick={() => handleModeChange('mobileMoney')}>Mobile Money</button>
                    <button onClick={() => handleModeChange('cardPayment')}>Card Payment</button>
                </div>
            )}
            {paymentMode === 'mobileMoney' && !paymentSuccess && (
                <div>
                    <div>
                        <img className='payment-image' src={mpesa} alt="mpesa" />
                        <img className='payment-image' src={airtel} alt="airtel" />
                    </div>
                    <div>
                        <label>Mobile Number:</label>
                        <input
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={mobileNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>Total Amount: Kes. {totalAmount}</div>
                    <button onClick={handlePayment}>Confirm Payment</button>
                </div>
            )}
            {paymentMode === 'cardPayment' && !paymentSuccess && (
                <div>
                    <div>
                        <label>Card Holder Name:</label>
                        <input
                            type="text"
                            id="cardHolderName"
                            name="cardHolderName"
                            value={cardDetails.cardHolderName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Card Number:</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={cardDetails.cardNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>CVV:</label>
                        <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={cardDetails.cvv}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Expiry Date:</label>
                        <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={cardDetails.expiryDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>Total Amount: Kes. {totalAmount}</div>
                    <button onClick={handlePayment}>Confirm Payment</button>
                </div>
            )}
            {paymentSuccess && (
                <div>
                    <h2>Payment Successful!</h2>
                    <p>Your order is being processed.</p>
                </div>
            )}
        </div>
        </div>
        < Footer />
    </div>
    );
}

export default Payment;