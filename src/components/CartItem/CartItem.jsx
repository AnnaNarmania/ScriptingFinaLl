import React from "react";
import styles from "./CartItem.module.css";
import { useCart } from "../../contexts/CartContext";
import { useCurrency } from "../../contexts/CurrencyContext";
import SizeSelector from "../SizeSelector/SizeSelector";

function CartItem({ item, variant }) {
  const { incrementQuantity, decrementQuantity, updateCartItemSize } = useCart();
  const { getPrice } = useCurrency();

 
  const imageClass =
    variant === "mini"
      ? `${styles.image} ${styles.imageMini}`
      : variant === "cartPage"
      ? `${styles.image} ${styles.imageLarge}`
      : styles.image;

  const rowClass =
    variant === "mini"
      ? styles.rowMini
      : variant === "cartPage"
      ? styles.rowLarge
      : styles.row;

  const photoBlockClass =
    variant === "mini"
      ? styles.photoBlockMini
      : variant === "cartPage"
      ? `${styles.photoBlock} ${styles.photoBlockWide}`
      : styles.photoBlock;

  const cartItemClass =
    variant === "mini"
      ? `${styles.cartItem} ${styles.cartItemMini}`
      : styles.cartItem;

  const nameClass =
    variant === "mini" ? `${styles.name} ${styles.nameMini}` : styles.name;

  const priceClass =
    variant === "mini" ? `${styles.price} ${styles.priceMini}` : styles.price;

  const labelClass =
    variant === "mini" ? `${styles.label} ${styles.labelMini}` : styles.label;

  const quantityControlClass =
    variant === "mini"
      ? styles.quantityControlMini
      : styles.quantityControl;

  const qtyButtonClass =
    variant === "mini"
      ? styles.qtyButtonMini
      : styles.qtyButton;

  const qtyValueClass =
    variant === "mini"
      ? styles.qtyValueMini
      : styles.qtyValue;

  return (
    <div className={cartItemClass}>
      <div className={styles.info}>
        <h3 className={nameClass}>{item.name}</h3>
        <p className={priceClass}>{getPrice(item.price)}</p>
        <div className={rowClass}>
          <div>
            <p className={labelClass}>SIZE:</p>
            <SizeSelector
              selectedSize={item.size}
              onSelectSize={(size) => updateCartItemSize(item.id, size)}
              small={variant === "mini"}
            />
          </div>
          <div className={photoBlockClass}>
            <div className={quantityControlClass}>
              <button className={qtyButtonClass} onClick={() => incrementQuantity(item)}>+</button>
              <span className={qtyValueClass}>{item.quantity}</span>
              <button className={qtyButtonClass} onClick={() => decrementQuantity(item)}>-</button>
            </div>
            <img src={item.images[0]} alt={item.name} className={imageClass} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
