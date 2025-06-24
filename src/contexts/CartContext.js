import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const index = updatedItems.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );

      if (index !== -1) {
        const existing = updatedItems[index];
        updatedItems[index] = {
          ...existing,
          quantity: existing.quantity + 1,
        };
      } else {
        updatedItems.push({ ...product, quantity: 1 });
      }

      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export { CartProvider, useCart };
