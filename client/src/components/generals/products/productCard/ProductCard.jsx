import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddToCartButton from "../../buttons/addToCartButton/AddToCartButton.jsx";
import AddToCartButtonIcon from "../../buttons/addToCartButton/AddToCartButtonIcon.jsx";

const ProductCard = ({ product, onOpenModal }) => {
  const {
    id,
    image,
    name,
    price,
    oldPrice,
    discount,
  } = product;

  const [hovered, setHovered] = useState(false);

  return (
    <Box
      key={id}
      sx={{
        width: 250,
        height: 'auto',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 2,
        borderRadius: "10px",
        boxShadow: 2,
        backgroundColor: "white",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
        },
        position: "relative",
      }}
    >
      {/* Badge de descuento */}
      {discount && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            background: "var(--badge-bg)",
            color: "white",
            fontWeight: "bold",
            fontSize: "0.75rem",
            px: 1,
            borderRadius: "3px",
          }}
        >
          -{discount}%
        </Box>
      )}

      {/* Iconos */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Tooltip title="Favorito">
          <IconButton size="small">
            <FavoriteBorderIcon fontSize="xl_pzl" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Vista rápida">
          <IconButton size="small" onClick={() => onOpenModal(product)}>
            <VisibilityIcon fontSize="xl_pzl" />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Contenido principal */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
          width: "100%",
        }}
      >
        {/* Imagen */}
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: "100%",
            height: 250,
            objectFit: "contain",
            mb: 2,
          }}
        />

        {/* Nombre */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            textAlign: "center",
            minHeight: 48,
            mb: 1,
          }}
        >
          {name}
        </Typography>

        {/* Precio */}
        <Box sx={{ textAlign: "center", mb: 2, display: "flex", justifyContent: 'center', gap: 1 }}>
          {oldPrice && (
            <Typography
              variant="h6"
              sx={{ color: "gray", textDecoration: "line-through" }}
            >
              ${oldPrice}
            </Typography>
          )}
          <Typography variant="h6" sx={{ color: 'custom.priceColor', fontWeight: 'bold' }}>
            ${price}
          </Typography>
        </Box>
      </Box>

      {/* Botones con transición hover */}
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 200,
          height: 40,
        }}
      >
        {/* Botón normal */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transition: "all 0.3s ease",
            opacity: hovered ? 0 : 1,
            transform: hovered ? "translateY(-10px)" : "translateY(0)",
          }}
        >
          <AddToCartButton
            fullWidth
            onClick={() => console.log("Añadido:", id)}
            sx={{
              width: "100%",
              height: "100%",
              color: "#000",
              backgroundColor: "transparent",
              border: "2px solid",
              borderColor: "var(--product-btn-addToCart)",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "20px",
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
            height: "100%",
            transition: "all 0.3s ease",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <AddToCartButtonIcon
            fullWidth
            onClick={() => console.log("Añadido (ícono):", id)}
            sx={{
              width: "100%",
              height: "100%",
              color: "#000",
              backgroundColor: "transparent",
              border: "2px solid",
              borderColor: "var(--product-btn-addToCart)",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "20px",
              px: 3,
              "&:hover": {
                backgroundColor: "var(--product-btn-addToCart)",
                color: "#fff",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
