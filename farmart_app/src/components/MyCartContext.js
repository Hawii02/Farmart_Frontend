import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (animal) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === animal.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === animal.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...animal, quantity: 1 }];
    });
  };

  const removeFromCart = (animalId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== animalId));
  };

  const updateQuantity = (animalId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === animalId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};