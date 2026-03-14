// src/context/ProductContext.jsx
import React, { createContext, useState } from "react";
import { products } from "../../../assets/utils/Products.js";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // 🚀 Productos iniciales definidos directamente en el estado
  const [productItems, setProductItems] = useState(products);

  return (
    <ProductContext.Provider value={{ productItems, setProductItems }}>
      {children}
    </ProductContext.Provider>
  );
};
