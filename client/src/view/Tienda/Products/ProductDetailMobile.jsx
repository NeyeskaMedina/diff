import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CartIncrement from "../../../components/generals/buttons/cartButtons/CartIncrement.jsx";
import ProductModalFooter from "../../../components/generals/modals/products/productModal/ProductModalFooter.jsx";
import ActionAddToCartButton from "../../../components/generals/buttons/addToCartButton/ActionAddToCartButton.jsx";

const ProductDetailMobile = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return <Typography>Cargando producto...</Typography>;

  const gallery = [
    product.image,
    product.image2 || "/img/no-image.png",
    product.image3 || "/img/no-image.png",
    product.image4 || "/img/no-image.png",
  ];

  return (
    <Box sx={{ p: 2 }}>
      {/* Carrusel Swiper */}
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        style={{
          "--swiper-pagination-color": "var(--product-title)",
        }}
      >
        {gallery.map((img, i) => (
          <SwiperSlide key={i}>
            <Box
              component="img"
              src={img}
              alt={product.name}
              sx={{
                width: "100%",
                height: "340px",
                objectFit: "contain",
                borderRadius: "12px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Información */}
      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography
          variant="h5"
          fontWeight={700}
          color="var(--product-title)"
          mb={1}
        >
          {product.name}
        </Typography>

        <Typography
          variant="h5"
          sx={{ color: "custom.priceColor", fontWeight: "bold" }}
        >
          ${product.price}
        </Typography>

        <Typography
          variant="body2"
          mb={2}
          sx={{ mt: 1, color: "text.secondary" }}
        >
          <CheckCircleIcon sx={{ color: "custom.checkColor", mr: 1 }} />
          <b>{product.stock}</b> disponibles
        </Typography>

        {/* Botones */}
        <Box sx={{ display: "flex", gap: 2, mb: 4, justifyContent: "center" }}>
          <CartIncrement stock={product.stock} onChange={setQuantity} />

          <ActionAddToCartButton product={product} cantidad={quantity} />
        </Box>

        <ProductModalFooter category={product.category} />
      </Box>

      {/* Descripción */}
      <Box sx={{ mt: 3 }}>
        <Typography
          variant="body1"
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "var(--bg-soft)",
            color: "text.primary",
          }}
        >
          {product.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetailMobile;
