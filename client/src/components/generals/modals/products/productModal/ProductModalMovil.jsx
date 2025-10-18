// ProductModalMovil.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AddToCartButton from "../../../buttons/addToCartButton/AddToCartButton";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ProductModalMovil = ({ product }) => {
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
      <Typography variant="h5" sx={{ color: 'custom.priceColor', fontWeight: 'bold' }}>
        ${product.price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Typography variant="body2">
          <CheckCircleIcon sx={{ color: 'custom.checkColor', mr: 1, verticalAlign: 'middle' }} />
          <Box component="span" fontWeight="bold" display="inline">
            {product.stock || 0}
          </Box>{" "}
          disponibles
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mt: "auto", width: "100%" }}>
        <AddToCartButton
          fullWidth
          onClick={() => console.log("Añadir", product.id)}
          sx={{
            width: "70%",
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
              color: "#fff"
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductModalMovil;
