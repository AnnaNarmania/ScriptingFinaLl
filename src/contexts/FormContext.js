import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [savedFormData, setSavedFormData] = useState({
    contact: "",
    firstName: "",
    lastName: "",
    address: "",
    shippingNote: "",
    city: "",
    postalCode: "",
    province: "",
    country: "Italy",
  });
  const [formData, setFormData] = useState(savedFormData);

  const [selectedMethod, setSelectedMethod] = useState('standard');

  const value = {
    formData,
    setFormData,
    selectedMethod, 
    setSelectedMethod,
    savedFormData,
    setSavedFormData,
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}
