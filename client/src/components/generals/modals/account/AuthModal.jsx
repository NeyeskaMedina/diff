import React from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import FormsLogin from "../../forms/FormsLogin.jsx";
import AuthButtons from "../../buttons/authButtons/AuthButtons.jsx";
 
const AuthModal = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 380 }, // ancho en móvil y desktop
          height: "auto",                 // altura automática
          maxHeight: "80vh",              // límite para que no ocupe todo el VH
          mt: "10vh",                     // margen superior para que baje un poco
          mb: "10vh",                     // margen inferior
          borderRadius: "12px 0 0 12px",  // bordes redondeados
          p: 3,
          backgroundColor: "#fff",
          boxShadow: "-4px 4px 20px rgba(0,0,0,0.2)",
        },
      }}
    >
      
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Iniciar Sesión</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <FormsLogin />
      <AuthButtons />

    </Drawer>
  );
};

export default AuthModal;