import React from "react";
import styles from "./SizeSelector.module.css";

const sizes = ["XS", "S", "M", "L", "XL"];

function SizeSelector({ selectedSize, onSelectSize = () => {}, disabled }) {
  return (
    <div className={styles.sizeSelector}>
      {sizes.map((size) => (
        <button
          key={size}
          className={`${styles.sizeButton} ${
            selectedSize === size ? styles.active : ""
          }`}
          onClick={() => !disabled && onSelectSize(size)}
          disabled={disabled}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export default SizeSelector;
