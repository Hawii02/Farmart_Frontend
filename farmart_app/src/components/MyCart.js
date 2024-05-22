  import React, { useContext } from 'react';
  import { CartContext } from './MyCartContext';
  import { Link } from 'react-router-dom';
  import './MyCart.css';

  function MyCart() {
    const { cart, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);

    return (
      <div className="cart-container">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
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
          <button className="cart-navigate-button">Go to Payment</button>
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
    </div>
  );
}

  export default MyCart;