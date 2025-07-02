import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ShippingMethodPage from './components/ShippingMethodPage/ShippingMethodPage';
import ShippingInfoPage from './components/ShippingInfoPage/ShippingInfoPage';
import { CartProvider } from "./contexts/CartContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import Navigation from "./Navigation";
import Products from "./Lists";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import OverLayForCart from "./components/OverLayForCart/OverLayForCart";
import CartPage from "./components/CartPage/CartPage";  
import { FormProvider } from "./contexts/FormContext";
import PaymentPage from "./components/PaymentPage/PaymentPage";
import ConfirmationPage from "./components/ConfirmationPage/ConfirmationPage";


function Pages() {
  const [activeCategory, setActiveCategory] = useState("WOMEN");
  const [showOverlay, setShowOverlay] = useState(false);
  const location = useLocation();


  
  const hideNavPaths = [
    '/shippinginfopage',
    '/shipping-method',
    '/payment',
    '/confirmation'
  ];
  const shouldHideNav = hideNavPaths.includes(location.pathname);  

  return (
    <>
      {!shouldHideNav && ( 
        <Navigation
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onCartClick={() => setShowOverlay((prev) => !prev)}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={<Products activeCategory={activeCategory} />}
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shippinginfopage" element={<ShippingInfoPage />} />
        <Route path="/shipping-method" element={<ShippingMethodPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage/>}/>
      </Routes>

      {showOverlay && <OverLayForCart onClose={() => setShowOverlay(false)} />}
    </>
  );
}

function App() {
  return (
    <CurrencyProvider>
      <CartProvider>
        <FormProvider>
          <Router>
            <Pages />
          </Router>
        </FormProvider>
      </CartProvider>
    </CurrencyProvider>
  );
}

export default App;