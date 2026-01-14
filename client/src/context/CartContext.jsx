import React, { createContext, useContext, useState } from "react";
import { toast, Bounce } from 'react-toastify';

// Creamos el contexto
const CartContext = createContext();

// Hook para usar el contexto más fácilmente
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const notify = () =>
    toast.success('Añadido al carrito con éxito!', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  // ✅ Agregar producto al carrito
  //..................................................
  //..................................................
  //..................................................
  //..................................................
  const addToCart = (product, cantidad) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // Si ya existe, aumentamos la cantidad
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + cantidad }
            : item
        );
      } else {
        // Si no existe, lo agregamos
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    notify();
  };

  // ❌ Eliminar producto
  //..................................................
  //..................................................
  //..................................................
  //..................................................
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };


  // 🧹 Vaciar carrito
  //..................................................
  //..................................................
  //..................................................
  //..................................................
  const clearCart = () => setCartItems([]);


  // 🧮 Calcular total
  //..................................................
  //..................................................
  //..................................................
  //..................................................
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
