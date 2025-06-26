import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prevItems) => {
      const match = prevItems.find(
        (item) => item.id === product.id && item.size === product.size
      );
      if (match) {
        return prevItems.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }

  function incrementQuantity(product) {
    addToCart(product);
  }

  function decrementQuantity(product) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(product) {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.id === product.id && item.size === product.size)
      )
    );
  }

  function updateCartItemSize(itemId, newSize) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, size: newSize }
          : item
      )
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        updateCartItemSize,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}