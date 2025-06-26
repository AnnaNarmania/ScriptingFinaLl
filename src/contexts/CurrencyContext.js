import React, { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

const currencyRates = {
  USD: 1,
  EUR: 0.85,
  JPY: 110,
};

const currencySymbols = {
  USD: "$",
  EUR: "€",
  JPY: "¥",
};

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("USD");

  function getPrice(price) {
    const rate = currencyRates[currency];
    const symbol = currencySymbols[currency];
    return `${symbol}${(price * rate).toFixed(2)}`;
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, getPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
