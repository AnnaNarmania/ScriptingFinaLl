import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../Lists";
import { useCart } from "../../contexts/CartContext";
import { useCurrency } from "../../contexts/CurrencyContext";
import styles from "./ProductDetails.module.css";
import SizeSelector from "../SizeSelector/SizeSelector";

const currencyRates = { USD: 1, EUR: 0.85, JPY: 110 };
const currencySymbols = { USD: "$", EUR: "€", JPY: "¥" };

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState("");
  const [mainImage, setMainImage] = useState(product?.images?.[0]);

  const { addToCart } = useCart();
  const { currency } = useCurrency();

  if (!product) return <p>Product not found.</p>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    addToCart({ ...product, selectedSize, quantity: 1 });
  };

  const getPrice = (price) => {
    const rate = currencyRates[currency];
    const symbol = currencySymbols[currency];
    return `${symbol}${(price * rate).toFixed(2)}`;
  };

  return (
    <div className={styles.productDetail}>
      <div className={styles.leftColumn}>
        <div className={styles.thumbnails}>
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              onClick={() => setMainImage(img)}
              className={`${styles.thumbnail} ${mainImage === img ? styles.thumbnailSelected : ""}`}
            />
          ))}
        </div>
        <div className={styles.imagePreview}>
          <img src={mainImage} alt="main" className={styles.mainImage} />
        </div>
      </div>

      <div className={styles.info}>
        <h1>
          <span style={{ fontWeight: 600 }}>{product.name.split(" ")[0]}</span>
          <br />
          {product.name.split(" ").slice(1).join(" ")}
        </h1>
        <h4 className={styles.sizeLabel}>SIZE:</h4>
        <SizeSelector
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
        />

        <h4 className={styles.sizeLabel}>PRICE:</h4>
        <p className={styles.price}>{getPrice(product.price)}</p>

        <button className={styles.addButton} onClick={handleAddToCart}>
          ADD TO CART
        </button>

        <p className={styles.description}>
          Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
