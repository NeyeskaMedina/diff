import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="bold">
          Iniciar Sesión / Crear Cuenta
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Formulario */}
      <Box mt={3} component="form">
        <TextField
          label="Correo electrónico"
          type="email"
          fullWidth
          margin="normal"
          size="small"
        />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          margin="normal"
          size="small"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, py: 1.2, borderRadius: "8px" }}
        >
          Ingresar
        </Button>

        <Typography
          variant="body2"
          textAlign="center"
          mt={2}
          sx={{ cursor: "pointer", color: "primary.main" }}
        >
          ¿Olvidaste tu contraseña?
        </Typography>
      </Box>

      {/* Registro */}
      <Box mt={3} textAlign="center">
        <Typography variant="body2">¿No tienes una cuenta?</Typography>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ mt: 1, py: 1.2, borderRadius: "8px" }}
        >
          Crear cuenta
        </Button>
      </Box>
    </Drawer>
  );
};

export default AuthModal;
