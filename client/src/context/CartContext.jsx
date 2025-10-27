import React, { createContext, useContext, useState } from "react";

// Creamos el contexto
const CartContext = createContext();

// Hook para usar el contexto más fácilmente
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Agregar producto al carrito
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // Si ya existe, aumentamos la cantidad
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si no existe, lo agregamos
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // ❌ Eliminar producto
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 🧹 Vaciar carrito
  const clearCart = () => setCartItems([]);

  // 🧮 Calcular total
  const total = cartItems.reduce(
    (sum, item) => sum + item.discountPrice * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        clearCart, 
        total 
    }}
    >
      {children}
    </CartContext.Provider>
  );
};
