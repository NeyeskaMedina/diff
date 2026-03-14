import React, { useState } from "react";
import { Box } from "@mui/material";
import { handleAddToCart } from "../../../../assets/utils/CartUtils.js";
import AddToCartButton from "../../../generals/buttons/addToCartButton/AddToCartButton.jsx";
import AddToCartButtonIcon from "../../../generals/buttons/addToCartButton/AddToCartButtonIcon.jsx";
import { useCart } from "../../../../context/appContext/allContext/CartContext.jsx";

const ActionAddToCartButton = ({ product, cantidad = 1 }) => {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  const disabled = product.stock === 0;

  const handleClick = () => {
    const cantidadFinal = cantidad || 1;
    console.log("Producto:", product.name);
    console.log("Cantidad a añadir:", cantidadFinal);
    
    
    if (!disabled) {
      handleAddToCart({ ...product }, cantidadFinal, addToCart);
    }
    
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 350,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? "none" : "auto",
      }}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => !disabled && setHovered(false)}
    >
      {/* ---- Botón texto ---- */}
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
          disabled={disabled}
          onClick={handleClick}
          sx={{
            width: "100%",
            boxSizing: "border-box",
            color: disabled ? "#fff" : "#000",
            backgroundColor: disabled ? "var(--product-btn-addToCart)" : "transparent",
            border: "2px solid",
            borderColor: "var(--product-btn-addToCart)",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "20px",
            cursor: disabled ? "not-allowed" : "pointer",

            "&:hover": {
              backgroundColor: disabled
                ? "var(--product-btn-addToCart)"
                : "var(--product-btn-addToCart)",
              color: "#fff",
            },
          }}
        />
      </Box>

      {/* ---- Botón ícono ---- */}
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
          disabled={disabled}
          onClick={handleClick}
          sx={{
            width: "100%",
            boxSizing: "border-box",
            color: disabled ? "#fff" : "#000",
            backgroundColor: disabled ? "var(--product-btn-addToCart)" : "transparent",
            border: "2px solid",
            borderColor: "var(--product-btn-addToCart)",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "20px",
            cursor: disabled ? "not-allowed" : "pointer",

            "&:hover": {
              backgroundColor: disabled
                ? "var(--product-btn-addToCart)"
                : "var(--product-btn-addToCart)",
              color: "#fff",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ActionAddToCartButton;
