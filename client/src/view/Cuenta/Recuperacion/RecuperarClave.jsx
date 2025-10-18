import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

export default function RecuperarClave() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <Paper elevation={3} sx={{ p: 2, borderRadius: 3, width: "100%" }}>
        <Typography variant="body1" gutterBottom>
          ¿Perdiste tu contraseña? Por favor, introduce tu nombre de usuario o
          correo electrónico. Recibirás un enlace para crear una contraseña
          nueva por correo electrónico.
        </Typography>

        <Box component="form" noValidate sx={{ mt: 2 }}>
          <TextField
            fullWidth
            required
            label="Nombre de usuario o correo electrónico"
            variant="outlined"
            margin="normal"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: "30px",
              backgroundColor: "#FFD133",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#e6bc2e" },
            }}
          >
            RESTABLECER CONTRASEÑA
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
