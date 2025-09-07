// src/components/navbar/DesktopMenu.jsx
import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

const menuItems = [
  "INICIO",
  "TIENDA",
  "ROPA",
  "ARTÍCULOS DE HIGIENE",
  "ALIMENTACIÓN",
  "SEGURIDAD",
  "DESCANSO",
  "JUEGO",
  "QUIENES SOMOS",
  "CONTACTO",
];

const DesktopMenu = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  if (isMobile) return null; // ❌ Oculto en móvil

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
          sx={{
            color: "var(--menu-color)",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "0.8rem",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "none",
              color: "var(--menu-hover)",
            },
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default DesktopMenu;
