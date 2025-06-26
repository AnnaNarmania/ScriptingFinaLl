import React from "react";
import styles from "./OverLayForCart.module.css";
import { useCart } from "../../contexts/CartContext";
import { useCurrency } from "../../contexts/CurrencyContext";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

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

  const handleCheckout = () => {
    navigate("/cart");
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.header}>My Bag, {cartItems.length} items</h2>
        <div className={styles.items}>
          {cartItems.map((item) => (
            <CartItem key={item.id + item.size} item={item} />
          ))}
        </div>
        <p className={styles.total}>Total: {getPrice(total)}</p>
        <div className={styles.actions}>
          <button onClick={handleViewBag}>VIEW BAG</button>
          <Link to ="/shippinginfopage">
          <button>CHECKOUT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OverLayForCart;
