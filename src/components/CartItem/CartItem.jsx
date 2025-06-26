import React from "react";
import styles from "./CartItem.module.css";
import { useCart } from "../../contexts/CartContext";
import { useCurrency } from "../../contexts/CurrencyContext";
import SizeSelector from "../SizeSelector/SizeSelector";

function CartItem({ item, variant }) {
  const { incrementQuantity, decrementQuantity, updateCartItemSize } = useCart();
  const { getPrice } = useCurrency();

  const imageClass =
    variant === "cartPage"
      ? `${styles.image} ${styles.imageLarge}`
      : styles.image;
  const rowClass = variant === "cartPage" ? styles.rowLarge : styles.row;
  const photoBlockClass =
    variant === "cartPage"
      ? `${styles.photoBlock} ${styles.photoBlockWide}`
      : styles.photoBlock;

  return (
    <div className={styles.cartItem}>
      <div className={styles.info}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.price}>{getPrice(item.price)}</p>
        <div className={rowClass}>
          <div>
            <p className={styles.label}>Size:</p>
            <SizeSelector
              selectedSize={item.size}
              onSelectSize={(size) => updateCartItemSize(item.id, size)}
            />
          </div>
          <div className={photoBlockClass}>
            <div className={styles.quantityControl}>
              <button className={styles.qtyButton} onClick={() => incrementQuantity(item)}>+</button>
              <span className={styles.qtyValue}>{item.quantity}</span>
              <button className={styles.qtyButton} onClick={() => decrementQuantity(item)}>-</button>
            </div>
            <img src={item.images[0]} alt={item.name} className={imageClass} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
