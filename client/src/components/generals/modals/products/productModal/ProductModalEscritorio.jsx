import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
import AddToCartButton from "../../../buttons/addToCartButton/AddToCartButton";
import AddToCartButtonIcon from "../../../buttons/addToCartButton/AddToCartButtonIcon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ProductModalFooter from "./ProductModalFooter";
import CartIncrement from "../../../buttons/cartButtons/CartIncrement";

const ProductModalEscritorio = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(false); // 👈 control del hover en imagen

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
              onClick={() => console.log("Ver Carrito")}
            >
              Ver Carrito
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
            onChange={(value) => console.log("Cantidad:", value)}
          />

          {/* 🎯 Botón de añadir al carrito con hover animado */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 350,
              height: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Botón clásico */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                opacity: hovered ? 0 : 1,
                transform: hovered ? "translateY(-10px)" : "translateY(0)",
                transition: "all 0.3s ease",
              }}
            >
              <AddToCartButton
                fullWidth
                onClick={() => console.log("Añadir:", product.id)}
                sx={{
                  width: "100%",
                  boxSizing: "border-box",
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
                    color: "#fff",
                  },
                }}
              />
            </Box>

            {/* Botón con ícono */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.3s ease",
              }}
            >
              <AddToCartButtonIcon
                fullWidth
                onClick={() => console.log("Carrito:", product.id)}
                sx={{
                  width: "100%",
                  boxSizing: "border-box",
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
                    color: "#fff",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>

        <ProductModalFooter category={product.category} />
      </Grid>
      
    </Grid>
  );
};

export default ProductModalEscritorio;
