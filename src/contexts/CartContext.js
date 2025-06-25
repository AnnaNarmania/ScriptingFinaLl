import React, { createContext, useState, useContext } from "react";

const Cart = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((items) => {
      const exists = items.find(
        (item) => item.id === product.id && item.size === product.size
      );

      if (exists) {
        return items.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }

      return [...items, { ...product, quantity: 1 }];
    });
  }

  return (
    <Cart.Provider value={{ cartItems, addToCart }}>{children}</Cart.Provider>
  );
}

function useCart() {
  return useContext(Cart);
}

export { CartProvider, useCart };
