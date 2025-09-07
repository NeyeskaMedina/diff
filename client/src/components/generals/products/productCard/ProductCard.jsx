import React, { useContext } from "react";
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddToCartButton from "../../buttons/addToCartButton/AddToCartButton.jsx";

const ProductCard = ({ product, onOpenModal  }) => {
  const {
    id,
    image,
    name,
    price,
    oldPrice,
    discount,
  } = product;

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
        position: "relative", // Solo para badge/iconos
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

      {/* Contenido principal con flex */}
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
        <Box sx={{ textAlign: "center", mb: 2, display: "flex", justifyContent: 'center' }}>
          {oldPrice && (
            <Typography
              variant="h6"
              sx={{ color: "gray", textDecoration: "line-through" }}
            >
              ${oldPrice} {' '}
            </Typography>
          )}
          <Typography variant="h6" color="text.primary">
            ${price}
          </Typography>
        </Box>
      </Box>

      {/* Botón Añadir al carrito */}
      <AddToCartButton onClick={() => console.log("Añadido:", id)} />
    </Box>
  );
};

export default ProductCard;
