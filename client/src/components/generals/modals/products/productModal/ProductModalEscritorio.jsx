import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ProductModalFooter from "./ProductModalFooter";
import CartIncrement from "../../../buttons/cartButtons/CartIncrement";
import ActionAddToCartButton from "../../../buttons/addToCartButton/ActionAddToCartButton.jsx";


const ProductModalEscritorio = ({ product }) => {
  const [hoveredImage, setHoveredImage] = useState(false); 
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1);

  console.log("Cantidad seleccionada:", amount);
  return (
    <Grid
      container
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
      }}
    >
      {/* COLUMNA IZQUIERDA */}
      <Grid
        item
        md={6}
        sx={{
          maxWidth: "450px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          borderRight: "1px solid #eee",
          height: "100%",
          p: 2,
        }}
      >
        {/* 📸 Contenedor de imagen + botón con animación */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
          }}
          onMouseEnter={() => setHoveredImage(true)}
          onMouseLeave={() => setHoveredImage(false)}
        >
          {/* Imagen */}
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "400px",
              maxWidth: 400,
              maxHeight: 400,
              borderRadius: 12,
              objectFit: "contain",
              transition: "transform 0.3s ease",
              transform: hoveredImage ? "scale(1.03)" : "scale(1)",
            }}
          />

          {/* Botón Ver Carrito con animación */}
          <Box
            sx={{
              position: "absolute",
              bottom: hoveredImage ? "20px" : "0px",
              opacity: hoveredImage ? 1 : 0,
              transition: "all 0.4s ease",
              width: "80%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "var(--product-btn-addToCart)",
                color: "#fff",
                borderRadius: "20px",
                fontWeight: "bold",
                textTransform: "none",
              }}
               onClick={() => navigate(`/detalle-producto/${product.id}`, { state: { product } })}
            >
              Ver Detalles
            </Button>
          </Box>
        </Box>
      </Grid>

      {/* COLUMNA DERECHA */}
      <Grid
        item
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "450px",
          gap: 2,
          height: "100%",
          overflowY: "auto",
          p: 2,
        }}
      >
        <Typography variant="h5" fontWeight="700">
          {product.name}
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          {product.oldPrice && (
            <Typography
              variant="body1"
              sx={{ textDecoration: "line-through", opacity: 0.6 }}
            >
              {"$"}
              {product.oldPrice}
            </Typography>
          )}
          <Typography
            variant="h5"
            sx={{ color: "custom.priceColor", fontWeight: "bold" }}
          >
            {"$"}
            {product.price}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>

        <Typography variant="body2">
          <CheckCircleIcon
            sx={{ color: "custom.checkColor", mr: 1, verticalAlign: "middle" }}
          />
          <Box component="span" fontWeight="bold" display="inline">
            {product.stock > 0 ? product.stock : 0}
          </Box>{" "}
          disponibles
        </Typography>

        <Box
          sx={{
            width: "100%",
            mt: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <CartIncrement
            stock={product.stock}
            onChange={(value) => setAmount(value)}
          />


          {/* 🎯 Botón de añadir al carrito con hover animado */}
          <ActionAddToCartButton product={product} cantidad={amount} />
        </Box>

        <ProductModalFooter category={product.category} />
      </Grid>
      
    </Grid>
  );
};

export default ProductModalEscritorio;
