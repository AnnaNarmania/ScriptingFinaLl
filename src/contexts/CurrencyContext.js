import React, { createContext, useContext, useState } from "react";

const Currency = createContext();

function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("USD");

  return (
    <Currency.Provider value={{ currency, setCurrency }}>
      {children}
    </Currency.Provider>
  );
}

function useCurrency() {
  return useContext(Currency);
}

export { CurrencyProvider, useCurrency };
