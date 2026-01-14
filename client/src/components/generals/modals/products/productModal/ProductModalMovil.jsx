// ProductModalMovil.jsx
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ProductModalFooter from "./ProductModalFooter";
import CartIncrement from "../../../buttons/cartButtons/CartIncrement";
import { useNavigate } from "react-router-dom";
import ActionAddToCartButton from "../../../buttons/addToCartButton/ActionAddToCartButton.jsx";



const ProductModalMovil = ({ product }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1);

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
      <Button
        variant="outlined"
        sx={{
          borderRadius: "20px",
          fontWeight: "bold",
          textTransform: "none",
          borderColor: "var(--product-btn-addToCart)",
          color: "var(--product-btn-addToCart)",
        }}
        onClick={() => navigate(`/detalle-producto/${product.id}`, { state: { product } })}
      >
        Ver Detalles
      </Button>

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
          <CartIncrement
            stock={product.stock}
            onChange={(value) => setAmount(value)}
          />
        {/* 🎯 Botón de añadir al carrito con hover animado */}
        <ActionAddToCartButton product={product} cantidad={amount} />

        </Box>
      </Box>
      <ProductModalFooter category={product.category} />
    </Box>
  );
};

export default ProductModalMovil;
