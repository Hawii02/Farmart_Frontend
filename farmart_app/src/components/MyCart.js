
import React, { useContext, useEffect,useState } from 'react';
import { CartContext } from './MyCartContext';
import { Link, useNavigate } from 'react-router-dom';
import './MyCart.css';
import Navbar from './NavBar';
import cart from '../Images/cart.gif'

function MyCart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);
  const [cartItem, setCartItem] = useState([]);


  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }, [cartItem]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItem'));
    if (items) {
      setCartItem(items);
    }
  }, []);


  function postCartItemsToBackend(cartItems) {
    fetch('your-backend-api-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartItems }), 
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to post cart items to the backend');
      }
      return response.json();
    })
    .then(data => {
      console.log('Response from backend:', data);
      // Optionally, you can handle the response data here
    })
    .catch(error => {
      console.error('Error posting cart items to the backend:', error.message);
      // Optionally, you can handle errors here, such as displaying an error message to the user
    });
  }
  
  

  // // Load cart data from local storage when component mounts
  // useEffect(() => {
  //   const storedCart = localStorage.getItem('cart');
  //   if (storedCart) {
  //     const parsedCart = JSON.parse(storedCart);
  //     // Update cart context with data from local storage
  //     // This assumes you have functions like setCart in your context to update the cart state
  //     setCart(parsedCart);
  //   }
  // }, []);

  // Update local storage when cart changes
  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // }, [cart]);

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
                <img src={"https://i.pinimg.com/originals/c8/01/cd/c801cd6d10481403f3d88b2ef24b731a.gif"} alt="Cows grazing" width="700" height="500" />
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
                      <div>{animal.type} - {animal.breed}</div>
                      <div className='cart-item-price'>Kes. {cartPrice}</div>
                      <div className='cart-item-quantity'>
                        <button className='cart-button-quantity' onClick={() => updateQuantity(animal.id, animal.quantity - 1)}>-</button>
                        <input type="number"  value={animal.quantity} onChange={(e) => updateQuantity(animal.id, parseInt(e.target.value))} />
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
          <button className="cart-navigate-button">Go to Payment</button>
          <div className='continue-shopping-cart'>
            <Link to="/">
                <button className="cart-navigate-button">
                    Continue Shopping
                </button>
            </Link>
          </div> 
        </>
      )}
    </div>
  );
}

export default MyCart;
