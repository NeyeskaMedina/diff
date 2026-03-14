import React from "react";
import { ProductProvider } from "./allContext/ProductContext";
import { FavoritesProvider } from "./allContext/FavoriteContext";
import { CartProvider } from "./allContext/CartContext";
import { ContextProvider } from "./allContext/UserContext";
import { GoogleAuthProvider } from "./allContext/GoogleContext";


export const AppProvider = ({ children }) => {

  return (
    <GoogleAuthProvider>
        <ProductProvider>
          <FavoritesProvider>
            <CartProvider>
              <ContextProvider>
                {children}
              </ContextProvider>
            </CartProvider>
          </FavoritesProvider>
        </ProductProvider>
    </GoogleAuthProvider>
  );

};