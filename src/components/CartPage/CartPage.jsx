import React from "react";
import { useCart } from "../../contexts/CartContext";
import { useCurrency } from "../../contexts/CurrencyContext";
import CartItem from "../CartItem/CartItem";
import styles from "./CartPage.module.css";
import { useNavigate } from "react-router-dom";


function CartPage() {
  const { cartItems } = useCart();
  const { getPrice } = useCurrency();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

 const handleContinue = (e) => {
    if (totalQuantity === 0) {
      e.preventDefault();
      alert("Your cart is empty. Please add items before proceeding to checkout.");
    }
    else {
      navigate("/shippinginfopage");
    }
  };

  return (
    <div className={styles.cartPage}>
      <h2 className={styles.title}>CART</h2>
      {cartItems.map((item) => (
        <div className={styles.cartItem} key={item.id + item.size}>
          <CartItem item={item}  variant="cartPage" />
        </div>
      ))}
      <div className={styles.summary}>
        <p className={styles.summaryQuantity}>
          Quantity: <strong>{totalQuantity}</strong>
        </p>
        <p className={styles.summaryTotal}>
          Total: <strong>{getPrice(totalPrice)}</strong>
        </p>
  <button onClick={handleContinue} className={styles.continueButton}>CONTINUE</button>

      </div>
    </div>
  );
}

export default CartPage;
