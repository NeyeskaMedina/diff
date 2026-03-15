import React from "react";
import { Box, Typography, Button } from "@mui/material";
import GoogleLoginButton from "../../buttons/googleButtons/GoogleLoginButton.jsx";
import CrearCuentaBtx from "./CrearCuentaBtx.jsx"

const AuthButtons = () => {
  return (
    <>
      {/* Google */}
      <Box mt={2} display="flex" justifyContent="center">
        <GoogleLoginButton />
      </Box>

      {/* Registro */}
      <Box mt={3} textAlign="center">
        <Typography variant="body2">¿No tienes una cuenta?</Typography>

        {/* Boton Crear cuenta */}

        <CrearCuentaBtx
            variant="outlined"
            fullWidth={true}
            sx={{ 
              mt: 1, 
              py: 1.2, 
              borderRadius: "8px" ,
              color: "custom.ingresarBtx",
              borderColor: "custom.ingresarBtx"
            }}
        />
      </Box>
    </>
  );
};

export default AuthButtons;