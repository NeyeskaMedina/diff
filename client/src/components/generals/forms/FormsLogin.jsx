import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import IngresarBtx from "../buttons/authButtons/IngresarBtx.jsx"

const FormsLogin = () => {
  return (
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
    {/* Boton ingresar */}
        <IngresarBtx 
            fullWidth={true}
            variant="contained"
            sx = {{
                mt: 2, 
                py: 1.2, 
                borderRadius: "8px", 
                backgroundColor: "custom.ingresarBtx"
            }}
        />
      <Typography
        variant="body2"
        textAlign="center"
        mt={2}
        sx={{ cursor: "pointer", color: "primary.main" }}
      >
        ¿Olvidaste tu contraseña?
      </Typography>
    </Box>
  );
};

export default FormsLogin;