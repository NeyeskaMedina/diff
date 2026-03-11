import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useFavorites } from "../../../../context/FavoriteContext.jsx";
import ActionAddToCartButton from "../../buttons/addToCartButton/ActionAddToCartButton.jsx";

const ProductCard = ({ product, onOpenModal }) => {
  const { id, image, name, price, oldPrice, discount } = product;
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites(); 

  const handleFavoriteClick = () => {
    if (isFavorite(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <Box
      key={id}
      sx={{
        width: 250,
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 2,
        borderRadius: "10px",
        boxShadow: 2,
        backgroundColor: "white",
        transition: "transform 0.2s",
        "&:hover": { transform: "translateY(-4px)" },
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
        <Tooltip title={isFavorite(id) ? "Eliminar de favoritos" : "Añadir a favoritos"}>
          <IconButton size="small" onClick={handleFavoriteClick}>
            {isFavorite(id) ? (
              <FavoriteIcon color="error" fontSize="medium" />
            ) : (
              <FavoriteBorderIcon fontSize="medium" />
            )}
          </IconButton>
        </Tooltip>

        <Tooltip title="Vista rápida">
          <IconButton size="small" onClick={() => onOpenModal(product)}>
            <VisibilityIcon fontSize="medium" />
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

        <Box
          sx={{
            textAlign: "center",
            mb: 2,
            display: "flex",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {oldPrice && (
            <Typography
              variant="h6"
              sx={{ color: "gray", textDecoration: "line-through" }}
            >
              ${oldPrice}
            </Typography>
          )}
          <Typography
            variant="h6"
            sx={{ color: "custom.priceColor", fontWeight: "bold" }}
          >
            ${price}
          </Typography>
        </Box>
      </Box>

      {/* Botones con transición hover */}
      <ActionAddToCartButton product={product} />
    </Box>
  );
};

export default ProductCard;
