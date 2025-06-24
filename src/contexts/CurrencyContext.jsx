import React, { createContext, useState, useContext } from "react";

const CurrencyContext = createContext();

function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("USD");

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

function useCurrency() {
  return useContext(CurrencyContext);
}

export { CurrencyProvider, useCurrency };
