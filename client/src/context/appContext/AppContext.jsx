import React from "react";
import { ProductProvider } from "./allContext/ProductContext";
import { FavoritesProvider } from "./allContext/FavoriteContext";
import { CartProvider } from "./allContext/CartContext";
import { AuthProvider } from "./allContext/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const AppProvider = ({ children }) => {

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <ProductProvider>
          <FavoritesProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </FavoritesProvider>
        </ProductProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );

};