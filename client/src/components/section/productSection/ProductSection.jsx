// src/components/products/ProductSection.jsx
import React, { useContext, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "../../generals/products/productCard/ProductCard";
import ProductModal from "../../generals/modals/products/productModal/ProductModal";
import { UserContext } from "../../../context/UserContext";
import { products } from "../../../assets/utils/Products.js";

// const products = [
//   {
//     id: 1,
//     name: "AFNAN 9 PM For Men Eau de Parfum 100 ml",
//     price: "52.990",
//     oldPrice: null,
//     discount: null,
//     stock: 0,
//     image: "/img/categorias/ropa/enterito.jpg",
//     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
//     category: "Ropa",
//     related: [3, 4, 5, 6],
//   },
//   {
//     id: 2,
//     name: "Armaf Odyssey Candee Edp 100ml Mujer",
//     price: "74.990",
//     oldPrice: null,
//     discount: null,
//     stock: 15,
//     image: "/img/categorias/productsHigiene/chupon.jpg",
//     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
//     category: "Higiene",
//     related: [1, 3, 5, 7],
//   },
//   {
//     id: 3,
//     name: "Bade’e AL Oud Honor & Glory de Lattafa",
//     price: "49.990",
//     oldPrice: null,
//     discount: null,
//     stock: 10,
//     image: "/img/categorias/productsHigiene/chupon.jpg",
//     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?`,
//    category: "Accesorio de autos",
//    related: [2, 4, 6, 8],
//   },
//   {
//     id: 4,
//     name: "BHARARA – “King” EDP Hombre 100 ml",
//     price: "93.990",
//     oldPrice: "103.000",
//     discount: 9,
//     stock: 5,
//     image: "/img/categorias/productsHigiene/chupon.jpg",
//     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
//     category: "Articulos de seguridad",
//     related: [1, 2, 7, 8],
//   },
//   {
//     id: 5,
//     name: "Producto 5",
//     price: "59.990",
//     oldPrice: "99.000",
//     discount: 40,
//     stock: 1,
//     image: "/img/categorias/productsHigiene/chupon.jpg",
//     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
//     category: "Higiene",
//     related: [],
//   },
//   {
//     id: 6,
//     name: "Producto 6",
//     price: "69.990",
//     oldPrice: null,
//     discount: null,
//     stock: 6,
//     image: "/img/categorias/productsHigiene/chupon.jpg",
//     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
//     category: "Comida",
//     related: [1, 2, 3, 4],
//   },
//   {
//     id: 7,
//     name: "Producto 7",
//     price: "69.990",
//     oldPrice: null,
//     discount: null,
//     stock: 0,
//     image: "/img/categorias/productsHigiene/chupon.jpg",
//     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
//     category: "Comida",
//     related: [3, 4, 6, 8],
//   },
//   {
//     id: 8,
//     name: "Producto 8",
//     price: "69.990",
//     oldPrice: null,
//     discount: null,
//     stock: 9,
//     image: "/img/categorias/productsHigiene/chupon.jpg",
//     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
//     doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
//     unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
//     category: "Higiene",
//     related: [1, 2, 4, 5],
//   },
// ];

const ProductSection = () => {
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
