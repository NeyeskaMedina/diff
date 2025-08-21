// src/components/products/ProductSection.jsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "../../generals/products/productCard/ProductCard.jsx";

// 🔧 Simulación de productos
const products = [
  {
    id: 1,
    name: "AFNAN 9 PM For Men Eau de Parfum 100 ml",
    price: "52.990",
    oldPrice: null,
    discount: null,
    image: "/img/categorias/ropa/enterito.jpg",
  },
  {
    id: 2,
    name: "Armaf Odyssey Candee Edp 100ml Mujer",
    price: "74.990",
    oldPrice: null,
    discount: null,
    image: "/img/categorias/productsHigiene/chupon.jpg",
  },
  {
    id: 3,
    name: "Bade’e AL Oud Honor & Glory de Lattafa",
    price: "49.990",
    oldPrice: null,
    discount: null,
    image: "/img/categorias/productsHigiene/chupon.jpg",
  },
  {
    id: 4,
    name: "BHARARA – “King” EDP Hombre 100 ml",
    price: "93.990",
    oldPrice: "103.000",
    discount: 9,
    image: "/img/categorias/productsHigiene/chupon.jpg",
  },
  {
    id: 5,
    name: "Producto 5",
    price: "59.990",
    oldPrice: "99.000",
    discount: 40,
    image: "/img/categorias/productsHigiene/chupon.jpg",
  },
  {
    id: 6,
    name: "Producto 6",
    price: "69.990",
    oldPrice: null,
    discount: null,
    image: "/img/categorias/productsHigiene/chupon.jpg",
  },
  {
    id: 7,
    name: "Producto 7",
    price: "69.990",
    oldPrice: null,
    discount: null,
    image: "/img/categorias/productsHigiene/chupon.jpg",
  },
  {
    id: 8,
    name: "Producto 8",
    price: "69.990",
    oldPrice: null,
    discount: null,
    image: "/img/categorias/productsHigiene/chupon.jpg",
  },
];

const ProductSection = () => {
  return (
    <Box sx={{ px: 2, py: 6, backgroundColor: "#fff", textAlign: "center" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#c28700", mb: 4 }}>
        NUESTROS PRODUCTOS
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSection;
