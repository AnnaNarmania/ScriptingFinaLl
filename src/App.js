import { useState } from "react";
import { CartProvider } from "./contexts/CartContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import Navigation from "./Navigation";
import Products from "./Lists";

function App() {
  const [activeCategory, setActiveCategory] = useState("WOMEN");

  return (
    <CurrencyProvider>
      <CartProvider>
        <Navigation
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Products activeCategory={activeCategory} />
      </CartProvider>
    </CurrencyProvider>
  );
}

export default App;
