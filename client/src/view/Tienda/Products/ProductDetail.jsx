import React from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery, Box, Typography } from "@mui/material";
import ProductDetailDesktop from "./ProductDetailDesktop";
import ProductDetailMobile from "./ProductDetailMobile";
import { products } from "../../../assets/utils/Products.js"; 

const ProductDetail = () => {
  // 🆔 Capturamos el parámetro de la URL
  const { id } = useParams();

  // 📱 Detecta si el dispositivo es móvil o escritorio
  const isMobile = useMediaQuery("(max-width:900px)");

  // 🔍 Busca el producto en el JSON según el ID
  const product = products.find((item) => item.id === parseInt(id));

  // 🚨 Si no encuentra el producto
  if (!product) {
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h5" color="error">
          Producto no encontrado 😢
        </Typography>
      </Box>
    );
  }

  // 🖥️📱 Renderiza la vista según el dispositivo
  return isMobile ? (
    <ProductDetailMobile product={product} />
  ) : (
    <ProductDetailDesktop product={product} />
  );
};

export default ProductDetail;
