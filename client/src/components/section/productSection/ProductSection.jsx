// src/components/products/ProductSection.jsx
<<<<<<< HEAD
import React, { useContext } from "react";
import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "../../generals/products/productCard/ProductCard.jsx";
import ProductModal from "../../generals/products/productModal/ProductModal.jsx";
import { UserContext } from "../../../context/UserContext.jsx";

// 🔧 Simulación de productos
=======
import React, { useContext, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "../../generals/products/productCard/ProductCard";
import ProductModal from "../../generals/modals/products/productModal/ProductModal";
import { UserContext } from "../../../context/UserContext";


>>>>>>> main
const products = [
  {
    id: 1,
    name: "AFNAN 9 PM For Men Eau de Parfum 100 ml",
    price: "52.990",
<<<<<<< HEAD
    stock: 100,
=======
>>>>>>> main
    oldPrice: null,
    discount: null,
    image: "/img/categorias/ropa/enterito.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
  },
<<<<<<< HEAD
  
=======
>>>>>>> main
  {
    id: 2,
    name: "Armaf Odyssey Candee Edp 100ml Mujer",
    price: "74.990",
<<<<<<< HEAD
    stock: 0,
=======
>>>>>>> main
    oldPrice: null,
    discount: null,
    image: "/img/categorias/productsHigiene/chupon.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
  },
  {
    id: 3,
    name: "Bade’e AL Oud Honor & Glory de Lattafa",
    price: "49.990",
<<<<<<< HEAD
    stock: 3,
=======
>>>>>>> main
    oldPrice: null,
    discount: null,
    image: "/img/categorias/productsHigiene/chupon.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
  },
  {
    id: 4,
    name: "BHARARA – “King” EDP Hombre 100 ml",
    price: "93.990",
<<<<<<< HEAD
    stock: 20,
=======
>>>>>>> main
    oldPrice: "103.000",
    discount: 9,
    image: "/img/categorias/productsHigiene/chupon.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
  },
  {
    id: 5,
    name: "Producto 5",
    price: "59.990",
<<<<<<< HEAD
    stock: 8,
=======
>>>>>>> main
    oldPrice: "99.000",
    discount: 40,
    image: "/img/categorias/productsHigiene/chupon.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
  },
  {
    id: 6,
    name: "Producto 6",
    price: "69.990",
<<<<<<< HEAD
    stock: 105,
=======
>>>>>>> main
    oldPrice: null,
    discount: null,
    image: "/img/categorias/productsHigiene/chupon.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
  },
  {
    id: 7,
    name: "Producto 7",
    price: "69.990",
<<<<<<< HEAD
    stock: 7,
=======
>>>>>>> main
    oldPrice: null,
    discount: null,
    image: "/img/categorias/productsHigiene/chupon.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
  },
  {
    id: 8,
    name: "Producto 8",
    price: "69.990",
<<<<<<< HEAD
    stock: 37,
=======
>>>>>>> main
    oldPrice: null,
    discount: null,
    image: "/img/categorias/productsHigiene/chupon.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?<div className="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
    doloremque aut? Voluptates, sint. Pariatur placeat deserunt maxime at corporis voluptate
    unde temporibus labore velit fugiat architecto libero ab, necessitatibus reprehenderit?"></div>`,
  },
];

const ProductSection = () => {
  const { openModalProduct, setOpenModalProduct } = useContext(UserContext);
<<<<<<< HEAD
  const [selectedProduct, setSelectedProduct] = useState(null); // ✅ producto que se clicó

  const handleOpenModal = (product) => {
    setSelectedProduct(product);       // ✅ guardamos producto
    setOpenModalProduct(true);         // ✅ abrimos modal
=======
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModalProduct(true);
>>>>>>> main
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setOpenModalProduct(false);
  };

  return (
    <Box sx={{ px: 2, py: 6, backgroundColor: "#fff", textAlign: "center" }}>
<<<<<<< HEAD
      <h4 className="bree-serif-regular" variant="h5" style={{ fontWeight: "bold", color: "var(--product-title)", mb: 4, fontFamily: 'Bree Serif Regular', fontSize: '2rem'}}>
        NUESTROS PRODUCTOS
      </h4>

      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id}>
            {/* Le pasamos la función que abre el modal */}
=======
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "var(--product-title)", mb: 4 }}>
        NUESTROS PRODUCTOS
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
>>>>>>> main
            <ProductCard product={product} onOpenModal={handleOpenModal} />
          </Grid>
        ))}
      </Grid>
<<<<<<< HEAD
=======

>>>>>>> main
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
