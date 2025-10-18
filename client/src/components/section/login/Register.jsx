import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Register = () => {
  return (
    <Box component="form" display="flex" flexDirection="column" gap={3} width="100%">
      <TextField
        label="Nombre de usuario"
        required
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Dirección de correo electrónico"
        type="email"
        required
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Contraseña"
        type="password"
        required
        fullWidth
        variant="outlined"
      />
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#FFCC00",
          color: "white",
          borderRadius: "30px",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#e6b800" },
        }}
      >
        REGISTRARSE
      </Button>
    </Box>
  );
};

export default Register;
