import React from "react";
import { ProductProvider } from "./allContext/ProductContext";
import { FavoritesProvider } from "./allContext/FavoriteContext";
import { CartProvider } from "./allContext/CartContext";
import { ContextProvider } from "./allContext/UserContext";
import { GoogleAuthProvider } from "./allContext/GoogleContext";


export const AppProvider = ({ children }) => {

  return (
    <GoogleAuthProvider>
      <ContextProvider>
        <ProductProvider>
          <FavoritesProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </FavoritesProvider>
        </ProductProvider>
      </ContextProvider>
    </GoogleAuthProvider>
  );

};