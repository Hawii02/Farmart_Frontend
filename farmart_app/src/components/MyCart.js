import React, { useContext, useState } from 'react';
import { CartContext } from './MyCartContext';
import { Link, useNavigate } from 'react-router-dom';
import './MyCart.css';
import Navbar from './NavBar';
import cart from '../Images/cart.gif'

function MyCart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useContext(CartContext);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const navigate = useNavigate();

  const onCompletePayment = () => {
    setIsPaymentComplete(true);
    clearCart();
  };

  const handleGoToPayment = () => {
    navigate('/payment', { onCompletePayment });
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      < Navbar />
      <div className="cart-container">
        {isPaymentComplete ? (
          <p>Your order is being processed. Thank you!</p>
        ) : (
          <>
            {cart.length === 0 ? (
              <>
                <p>Your cart is empty</p>
                <img src={"https://i.pinimg.com/originals/c8/01/cd/c801cd6d10481403f3d88b2ef24b731a.gif"} alt="Cows grazing" width="800" height="500" />
              </>
            ) : (
              <>
                <ul>
                  {cart.map((animal) => {
                    const cartPrice = animal.price * animal.quantity;

                    return (
                      <li key={animal.id} className='cart-item'>
                        <div className='cart-item-details'>
                          <img src={animal.image_url} alt={animal.breed} className='cart-item-image' />
                          <div className='cart-item-info'>
                            <div>{capitalizeFirstLetter(animal.type)} - {animal.breed}</div>
                            <div className='cart-item-price'>Kes. {cartPrice}</div>
                            <div className='cart-item-quantity'>
                              <button className='cart-button-quantity' onClick={() => updateQuantity(animal.id, animal.quantity - 1)}>-</button>
                              <input type="number" value={animal.quantity} onChange={(e) => updateQuantity(animal.id, parseInt(e.target.value))} />
                              <button className='cart-button-quantity' onClick={() => updateQuantity(animal.id, animal.quantity + 1)}>+</button>
                            </div>
                            <button className='cart-button-delete' onClick={() => removeFromCart(animal.id)}>Remove</button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="cart-total">
                  Total: Kes. {getTotalPrice()}
                </div>
                <div className='cart-button'>
                  <Link to="/login">
                    <button onClick={handleGoToPayment} className="cart-navigate-button">Go to Payment</button>
                  </Link>
                  <div className='continue-shopping-cart'>
                    <Link to="/">
                      <button className="cart-navigate-button">
                        Continue Shopping
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MyCart;



