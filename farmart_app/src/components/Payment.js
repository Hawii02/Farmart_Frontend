import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import mpesa from '../Images/mpesa.png';
import airtel from '../Images/airtel.png';
import logistics from '../Images/logistics.png';
import gateways from '../Images/gateways.png';
import './Payment.css';
import { CartContext } from './MyCartContext'; 
import Footer from './Footer';
import Navbar from './NavBar';
import { Link } from 'react-router-dom';

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

    const [selectedMobileOption, setSelectedMobileOption] = useState(null);
    const [mobileNumber, setMobileNumber] = useState('');

    const handlePayment = () => {
        setTimeout(() => {
            setPaymentSuccess(true);
            if (onCompletePayment) {
                onCompletePayment();
            }
            clearCart();
        }, 1500);
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

    // Function to check if all required fields are filled for mobile money payment
    const isMobilePaymentValid = () => {
        return selectedMobileOption && mobileNumber.trim() !== '';
    };

    // Function to check if all required fields are filled for card payment
    const isCardPaymentValid = () => {
        const { cardHolderName, cardNumber, cvv, expiryDate } = cardDetails;
        return cardHolderName.trim() !== '' && cardNumber.trim() !== '' && cvv.trim() !== '' && expiryDate.trim() !== '';
    };

    // Function to check if all required fields are filled for any payment mode
    const isPaymentValid = () => {
        if (paymentMode === 'mobileMoney') {
            return isMobilePaymentValid();
        } else if (paymentMode === 'cardPayment') {
            return isCardPaymentValid();
        }
        return true; // No payment mode selected
    };

    // Function to handle complete payment button click
    const handleCompletePayment = () => {
        if (isPaymentValid()) {
            // Proceed with payment
            handlePayment();
        } else {
            // Show error message or handle as needed
            alert('Please fill all required fields.');
        }
    };

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div>
            <Navbar />
            <div className='shipping-payment-cartsummary'>
                <div className='shipping-payment'>
                    <div className='checkout-details'>
                        {shippingSubmitted && !editMode ? (
                            <div>
                                <img className='shipping-image' src={logistics} alt="logistics" />
                                <h2 className='payment-titles'>Shipping Details</h2>
                                <p>Full Name: {shippingDetails.fullName}</p>
                                <p>Town: {shippingDetails.town}</p>
                                <p>Nearest Landmark: {shippingDetails.landmark}</p>
                                <p>Phone Number: {shippingDetails.phoneNumber}</p>
                                <button onClick={handleEditShipping}>Edit</button>
                            </div>
                        ) : (
                            <div className='shipping-details'>
                                <img className='shipping-image' src={logistics} alt="logistics" />
                                <h2 className='payment-titles'>{editMode ? 'Edit' : 'Add'} Shipping Details</h2>
                                <form onSubmit={handleSubmitShipping}>
                                    <div className='labels'>
                                        <label >Full Name:</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={shippingDetails.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className='labels'>
                                        <label >Town:</label>
                                        <input
                                            type="text"
                                            id="town"
                                            name="town"
                                            value={shippingDetails.town}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className='labels'> 
                                        <label >Nearest Landmark:</label>
                                        <input
                                            type="text"
                                            id="landmark"
                                            name="landmark"
                                            value={shippingDetails.landmark}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className='labels'>
                                        <label >Phone Number:</label>
                                        <input
                                            type="text"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={shippingDetails.phoneNumber}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button className='payment-button' type="submit">{editMode ? 'Update' : 'Submit'}</button>
                                </form>
                            </div>
                        )}
                    </div>
                    <div className='payments'>
                        <div>
                            <img className='gateways-image' src={gateways} alt="cards" />
                            <h2 className='payment-titles'>Select Payment Method</h2>
                        </div>
                        <div>
                            <button className='payment-button' onClick={() => handleModeChange('mobileMoney')}>Mobile Money</button>
                            <button className='payment-button' onClick={() => handleModeChange('cardPayment')}>Card Payment</button>
                        </div>
                        {paymentMode === 'mobileMoney' && !paymentSuccess && (
                            <div>
                                <div>
                                    <img 
                                        className='payment-image' 
                                        src={mpesa} 
                                        alt="mpesa" 
                                        onClick={() => setSelectedMobileOption('mpesa')} 
                                    />
                                    <img 
                                        className='payment-image' 
                                        src={airtel} 
                                        alt="airtel" 
                                        onClick={() => setSelectedMobileOption('airtel')} 
                                    />
                                </div>
                                {selectedMobileOption && (
                                    <div>
                                        <div className='labels'>
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
                                        {paymentMode !== null && (
                                            <button className='payment-button' onClick={handleCompletePayment} disabled={!isPaymentValid()}>
                                                Complete Payment
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                        {paymentMode === 'cardPayment' && !paymentSuccess && (
                            <div>
                                <div className='labels'>
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
                                <div className='labels'>
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
                                <div className='labels'>
                                    <label className='labels'>CVV:</label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        value={cardDetails.cvv}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='labels'>
                                    <label >Expiry Date:</label>
                                    <input
                                        type="text"
                                        id="expiryDate"
                                        name="expiryDate"
                                        value={cardDetails.expiryDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='labels'>Total Amount: Kes. {totalAmount}</div>
                                {paymentMode !== null && (
                                    <button className='payment-button' onClick={handleCompletePayment} disabled={!isPaymentValid()}>
                                        Complete Payment
                                    </button>
                                )}
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
                <div className="cart-summary">
                    <h2 className='cart-summary-title'>Cart Summary</h2>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className='cart-summary-display'>
                                <div className='cart-summary-image'>
                                    <img src={item.image_url} alt={item.breed} className='payment-image'/>
                                </div>
                                <div className='cart-summary-details'>
                                    {capitalizeFirstLetter(item.type)} - {item.breed} x {item.quantity}: Ksh. {item.price * item.quantity}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='continue-shopping-cart'>
                    <Link to="/">
                      <button className="cart-navigate-button">
                        Continue Shopping
                      </button>
                    </Link>
                  </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Payment;