import React, { useContext } from 'react';
import { CartContext } from './MyCartContext';
import './MyCart.css';

function MyCart () {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Continue Shopping</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((animal) => (
              <li key={animal.id} className='cart-item'>
                <div className='cart-item-details'>
                  <img src={animal.image_url} alt={animal.breed} className='cart-item-image' />
                  <div className='cart-item-info'>
                    <div>{animal.breed}</div>
                    <div className='cart-item-description'>{animal.description}</div>
                    <div className='cart-item-price'>${animal.price}</div>
                    <div className='cart-item-quantity'>
                      <button className='cart-button' onClick={() => updateQuantity(animal.id, animal.quantity - 1)}>-</button>
                      <input type="number" value={animal.quantity} onChange={(e) => updateQuantity(animal.id, parseInt(e.target.value))} />
                      <button className='cart-button' onClick={() => updateQuantity(animal.id, animal.quantity + 1)}>+</button>
                    </div>
                    <button className='cart-button' onClick={() => removeFromCart(animal.id)}>Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            Total: ${getTotalPrice()}
          </div>
          <button className="go-to-payment">Go to Payment</button>
        </>
      )}
    </div>
  );
}

export default MyCart;