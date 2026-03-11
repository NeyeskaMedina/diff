import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CartIncrement from "../../../components/generals/buttons/cartButtons/CartIncrement.jsx";
import ProductModalFooter from "../../../components/generals/modals/products/productModal/ProductModalFooter.jsx";
import ActionAddToCartButton from "../../../components/generals/buttons/addToCartButton/ActionAddToCartButton.jsx";

const ProductDetailDesktop = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <Typography>Cargando producto...</Typography>;

  const gallery = [
    product.image,
    product.image2 || "/img/no-image.png",
    product.image3 || "/img/no-image.png",
    product.image4 || "/img/no-image.png",
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {/* ------------------------------ */}
        {/*             COLUMNA IZQUIERDA */}
        {/* ------------------------------ */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: "flex",
              width: "60vw",
              maxWidth: "600px",     // 👈 Asegura que la galería NO ocupe todo el ancho
              height: "550px",
              gap: 2,
              mx: "auto",
            }}
          >
            {/* Miniaturas */}
            <Swiper
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              direction="vertical"
              slidesPerView={4}
              spaceBetween={10}
              watchSlidesProgress
              style={{
                width: "200px",
                height: "550px",
              }}
            >
              {gallery.map((img, index) => (
                <SwiperSlide key={index}>
                  <Box
                    component="img"
                    src={img}
                    alt={`Miniatura ${index}`}
                    sx={{
                      width: "100%",
                      height: "120px",
                      borderRadius: "8px",
                      objectFit: "cover",
                      cursor: "pointer",
                      border: "2px solid transparent",
                      "&:hover": { border: "2px solid var(--product-title)" },
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Imagen principal */}
            <Swiper
              modules={[Navigation, Thumbs]}
              navigation
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={10}
              style={{
                width: "550px",
                height: "550px",
                borderRadius: "12px",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              {gallery.map((img, index) => (
                <SwiperSlide key={index}>
                  <Box
                    component="img"
                    src={img}
                    alt={product.name}
                    sx={{
                      width: "100%",
                      height: "550px",
                      objectFit: "contain",
                      borderRadius: "12px",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Grid>

        {/* ------------------------------ */}
        {/*            COLUMNA DERECHA      */}
        {/* ------------------------------ */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column", maxWidth: 400 }}>
          <Typography
            sx={{ flexWrap: "wrap" }}
            variant="h4"
            fontWeight={700}
            color="var(--product-title)"
            gutterBottom
          >
            {product.name}
          </Typography>

          <Typography
            variant="h5"
            sx={{ color: "custom.priceColor", fontWeight: "bold", mb: 1 }}
          >
            ${product.price}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mb: 3 }}
          >
            <CheckCircleIcon sx={{ color: "custom.checkColor", mr: 1 }} />
            <b>{product.stock}</b> disponibles
          </Typography>

          {/* Cantidad + Botón */}
          <Box sx={{ display: "flex", gap: 2, mb: 4, alignItems: "center" }}>
            <CartIncrement stock={product.stock} onChange={setQuantity} />

            <ActionAddToCartButton product={product} cantidad={quantity} />
          </Box>

          <ProductModalFooter category={product.category} />
          </Box>
        </Grid>
      </Grid>

      {/* ------------------------------ */}
      {/*          DESCRIPCIÓN ABAJO     */}
      {/* ------------------------------ */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Descripción
        </Typography>
        <Typography
          variant="body1"
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "var(--bg-soft)",
            color: "text.primary",
          }}
        >
          {product.description || "Sin descripción disponible."}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetailDesktop;
