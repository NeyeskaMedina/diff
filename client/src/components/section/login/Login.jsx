import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Login = () => {
  return (
    <Box component="form" display="flex" flexDirection="column" gap={3} width="100%">
      <TextField
        label="Usuario o correo electrónico"
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
        ACCEDER
      </Button>
    </Box>
  );
};

export default Login;
