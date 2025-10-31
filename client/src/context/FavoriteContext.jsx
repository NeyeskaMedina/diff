import React, { createContext, useContext, useState } from "react";
// import axios from "axios"; // 

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // 🔹 Verificar si un producto está en favoritos
  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  // 🔹 Agregar a favoritos (estado local)
  const addToFavorites = (product) => {
    if (!isFavorite(product.id)) {
      setFavorites((prev) => [...prev, product]);
    }

    // 💾 Guardar en base de datos (pendiente)
    /*
    try {
      const response = await axios.post(`https://api.farmaciasyg.cl/v1/favorites`, {
        userId: user.id,
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      console.log("Favorito guardado:", response.data);
    } catch (error) {
      console.error("Error al guardar favorito:", error);
    }
    */
  };

  // 🔹 Eliminar de favoritos (estado local)
  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));

    // 💾 Eliminar de base de datos (pendiente)
    /*
    try {
      await axios.delete(`https://api.farmaciasyg.cl/v1/favorites/${user.id}/${id}`);
      console.log("Favorito eliminado de BD");
    } catch (error) {
      console.error("Error al eliminar favorito:", error);
    }
    */
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
