import React from "react";
import styles from "./OverLayForCart.module.css";
import { useCart } from "../../contexts/CartContext";
import { useCurrency } from "../../contexts/CurrencyContext";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import OutsideClickHandler from 'react-outside-click-handler';

function OverLayForCart({ onClose }) {
  const { cartItems } = useCart();
  const { getPrice } = useCurrency();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleViewBag = () => {
    navigate("/cart");
    onClose();
  };

  const handleCheckout = (e) => {
     if (total === 0) {
      e.preventDefault();
      alert("The cart is empty. Please add items to the cart before proceeding to checkout.");
      return;
    }
    navigate("/shippinginfopage");
    onClose();
  };

  return (
    
    <OutsideClickHandler onOutsideClick={onClose}>
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.header}>My Bag, {cartItems.length} items</h2>
        <div className={styles.items}>
          {cartItems.map((item) => (
            <CartItem key={item.id + item.size} item={item} variant="mini" />
          ))}
        </div>
        <div className={styles.footer}>
       <div className={styles.total}>
  <span>Total</span>
  <span>{getPrice(total)}</span>
</div>
        <div className={styles.actions}>
          <button onClick={handleViewBag}>VIEW BAG</button>
          <button onClick={handleCheckout}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
    </OutsideClickHandler>
  );
}

export default OverLayForCart;
