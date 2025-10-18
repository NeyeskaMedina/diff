import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
import AddToCartButton from "../../../buttons/addToCartButton/AddToCartButton";
import AddToCartButtonIcon from "../../../buttons/addToCartButton/AddToCartButtonIcon";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ProductModalEscritorio = ({product}) => {
      const [hovered, setHovered] = useState(false);
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


              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100%",
                    maxWidth: 400,
                    maxHeight: 400,
                    borderRadius: 12,
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* 🎯 Aquí ocurre la magia del hover */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 350, // 🔥 mismo límite para ambos
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
                      width: "100%", // 🔥 mismo ancho
                      boxSizing: "border-box",
                      color: "#000",
                      backgroundColor: "transparent",
                      border: "2px solid",
                      borderColor: "var(--product-btn-addToCart)",
                      fontWeight: "bold",
                      textTransform: "none",
                      borderRadius: "20px",
                      px: 3,
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
                      width: "100%", // 🔥 igual ancho
                      boxSizing: "border-box",
                      color: "#000",
                      backgroundColor: "transparent",
                      border: "2px solid",
                      borderColor: "var(--product-btn-addToCart)",
                      fontWeight: "bold",
                      textTransform: "none",
                      borderRadius: "20px",
                      px: 3,
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "var(--product-btn-addToCart)",
                        color: "#fff",
                      },
                    }}
                  />
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
                    {product.oldPrice}
                  </Typography>
                )}
                <Typography variant="h5" sx={{ color: 'custom.priceColor', fontWeight: 'bold' }}>
                  {product.price}
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>

                <Typography variant="body2">
                  <CheckCircleIcon sx={{ color: 'custom.checkColor', mr: 1, verticalAlign: 'middle' }} />
                  <Box component="span" fontWeight="bold" display="inline">
                    {product.stock || 0}
                  </Box>{" "}
                  disponibles
                </Typography>

              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Button variant="contained" color="primary" fullWidth>
                  Comprar ahora
                </Button>
              </Box>
            </Grid>
    </Grid> 
  );
};

export default ProductModalEscritorio;
