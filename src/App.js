// import "./styles.css"; // ✅ This connects your CSS file

import { useState } from "react";
import { CartProvider } from "./contexts/CartContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import NavigationBar from "./NavigationBar";
import ProductListing from "./ProductListing";

function App() {
  const [activeCategory, setActiveCategory] = useState("WOMEN");

  return (
    <CurrencyProvider>
      <CartProvider>
        <NavigationBar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ProductListing activeCategory={activeCategory} />
      </CartProvider>
    </CurrencyProvider>
  );
}

export default App;
