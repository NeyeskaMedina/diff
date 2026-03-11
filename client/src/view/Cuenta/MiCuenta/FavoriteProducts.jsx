import React, { useState, useContext } from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "../../../components/generals/products/productCard/ProductCard.jsx";
import ProductModal from "../../../components/generals/modals/products/productModal/ProductModal.jsx";
import { UserContext } from "../../../context/UserContext.jsx";
import { useFavorites } from "../../../context/FavoriteContext.jsx";

const FavoriteProducts = () => {
  const { favorites } = useFavorites();
  const { openModalProduct, setOpenModalProduct } = useContext(UserContext);
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
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: 6,
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "var(--product-title)",
          mb: 4,
        }}
      >
        MIS FAVORITOS ❤️
      </Typography>

      {favorites.length === 0 ? (
        <Typography variant="body1" sx={{ color: "gray", mt: 3 }}>
          No tienes productos en favoritos todavía.
        </Typography>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {favorites.map((product) => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              display="flex"
              justifyContent="center"
            >
              <ProductCard product={product} onOpenModal={handleOpenModal} />
            </Grid>
          ))}
        </Grid>
      )}

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

export default FavoriteProducts;
