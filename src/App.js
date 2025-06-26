import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from "./contexts/CartContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";

import Navigation from "./Navigation";
import Products from "./Lists";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import OverLayForCart from "./components/OverLayForCart/OverLayForCart";
import CartPage from "./components/CartPage/CartPage";  
function App() {
  const [activeCategory, setActiveCategory] = useState("WOMEN");
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <CurrencyProvider>
      <CartProvider>
        <Router>
          <Navigation
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            onCartClick={() => setShowOverlay((prev) => !prev)}
          />

          <Routes>
            <Route
              path="/"
              element={<Products activeCategory={activeCategory} />}
            />
            <Route path="/product/:id" element={<ProductDetails />} />
             <Route path="/cart" element={<CartPage />} />
          </Routes>
          {showOverlay && <OverLayForCart onClose={() => setShowOverlay(false)} />}
        </Router>
      </CartProvider>
    </CurrencyProvider>
  );
}

export default App;
