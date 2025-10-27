// ProductModalMovil.jsx
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import AddToCartButton from "../../../buttons/addToCartButton/AddToCartButton";
import AddToCartButtonIcon from "../../../buttons/addToCartButton/AddToCartButtonIcon";
import { useCart } from "../../../../../context/CartContext.jsx";
import { handleAddToCart } from '../../../../../assets/utils/CartUtils.js';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ProductModalFooter from "./ProductModalFooter";
import CartIncrement from "../../../buttons/cartButtons/CartIncrement";

const ProductModalMovil = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100%",
        overflowY: "auto",
        p: 2,
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "90%",
        //   maxWidth: 350,
          maxHeight: 400,
          margin: "0 auto",
          borderRadius: 12,
          objectFit: "contain"
        }}
      />
      <Typography variant="h6" fontWeight="700" textAlign="center">
        {product.name}
      </Typography>
      <Box display="flex" alignItems="center" gap={2}>
        {product.oldPrice && (
          <Typography
            variant="body1"
            sx={{ textDecoration: "line-through", opacity: 0.6 }}
          >
            {"$"}{product.oldPrice}
          </Typography>
        )}
        <Typography variant="h5" sx={{ color: 'custom.priceColor', fontWeight: 'bold' }}>
          {"$"}{product.price}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Typography variant="body2">
          <CheckCircleIcon sx={{ color: 'custom.checkColor', mr: 1, verticalAlign: 'middle' }} />
          <Box component="span" fontWeight="bold" display="inline">
            {product.stock > 0 ? product.stock : 0}
          </Box>{" "}
          disponibles
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mt: "auto", width: "100%" }}>
        <Box sx={{ width: "100%", mt: 2, display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
              <CartIncrement stock={product.stock} onChange={(value) => console.log("Cantidad:", value)} />
        {/* 🎯 Aquí ocurre la magia del hover */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 350, // 🔥 mismo límite para ambos
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {/* Botón clásico */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    opacity: hovered ? 0 : 1,
                    transform: hovered ? "translateY(-10px)" : "translateY(0)",
                    transition: "all 0.3s ease",
                  }}
                >
                  
                  <AddToCartButton
                    fullWidth
                    onClick={() => handleAddToCart(product, addToCart)}
                    sx={{
                      width: "100%", // 🔥 mismo ancho
                      boxSizing: "border-box",
                      color: "#000",
                      backgroundColor: "transparent",
                      border: "2px solid",
                      borderColor: "var(--product-btn-addToCart)",
                      fontWeight: "bold",
                      textTransform: "none",
                      borderRadius: "20px",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "var(--product-btn-addToCart)",
                        color: "#fff",
                      },
                    }}
                  />
                </Box>
              
                {/* Botón con ícono */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? "translateY(0)" : "translateY(10px)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <AddToCartButtonIcon
                    fullWidth
                    onClick={() => handleAddToCart(product, addToCart)}
                    sx={{
                      width: "100%", // 🔥 igual ancho
                      boxSizing: "border-box",
                      color: "#000",
                      backgroundColor: "transparent",
                      border: "2px solid",
                      borderColor: "var(--product-btn-addToCart)",
                      fontWeight: "bold",
                      textTransform: "none",
                      borderRadius: "20px",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "var(--product-btn-addToCart)",
                        color: "#fff",
                      },
                    }}
                  />
                </Box>
              </Box>
      
        </Box>
      </Box>
      <ProductModalFooter category={product.category} />
    </Box>
  );
};

export default ProductModalMovil;
