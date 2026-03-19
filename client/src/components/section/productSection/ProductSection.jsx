// src/components/products/ProductSection.jsx
import React, { useContext, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "../../generals/products/productCard/ProductCard";
import ProductModal from "../../generals/modals/products/productModal/ProductModal";
import { products } from "../../../assets/utils/Products.js";


const ProductSection = () => {
  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModalProduct(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setOpenModalProduct(false);
  };

  return (
    <Box sx={{ px: 2, py: 6, backgroundColor: "#fff", textAlign: "center" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "var(--product-title)", mb: 4 }}>
        NUESTROS PRODUCTOS
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} onOpenModal={handleOpenModal} />
          </Grid>
        ))}
      </Grid>

      {selectedProduct && (
        <ProductModal
          open={openModalProduct}
          onClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </Box>
  );
};

export default ProductSection;
