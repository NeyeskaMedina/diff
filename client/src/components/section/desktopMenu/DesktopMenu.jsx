// src/components/navbar/DesktopMenu.jsx
import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { label: "INICIO", path: "/" },
  { label: "TIENDA", path: "/tienda" },
  { label: "ROPA", path: "/tienda/ropa" },
  { label: "ARTÍCULOS DE HIGIENE", path: "/tienda/articulos-de-higiene" },
  { label: "ALIMENTACIÓN", path: "/tienda/alimentacion" },
  { label: "SEGURIDAD", path: "/tienda/seguridad" },
  { label: "DESCANSO", path: "/tienda/descanso" },
  { label: "JUEGO", path: "/tienda/juego" },
  { label: "QUIENES SOMOS", path: "/quienes-somos" },
  { label: "CONTACTO", path: "/contacto" },
];

const DesktopMenu = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate(); // 👈 Hook para redirigir

  if (isMobile) return null;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        background: "var(--menu-section)",
        py: 1,
        gap: 3,
      }}
    >
      {menuItems.map((item, index) => (
        <Typography
          key={index}
          variant="body1"
          onClick={() => navigate(item.path)} // 👈 Redirige a la ruta
          sx={{
            color: "var(--menu-color)",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "0.8rem",
            cursor: "pointer",
            "&:hover": {
              color: "var(--menu-hover)",
            },
          }}
        >
          {item.label}
        </Typography>
      ))}
    </Box>
  );
};

export default DesktopMenu;
