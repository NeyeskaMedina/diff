import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";

const OthersConfig = () => {
  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom>
        🔧 Otras configuraciones
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography fontWeight={500}>Editar información del perfil</Typography>

          <TextField fullWidth label="Nombre" sx={{ mt: 1, mb: 1 }} />
          <TextField fullWidth label="Correo" sx={{ mb: 2 }} />

          <Button variant="contained" color="secondary">Guardar cambios</Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography fontWeight={500}>Preferencias de cuenta</Typography>

          <Button variant="outlined" color="warning" sx={{ mt: 1 }}>
            Cambiar correo
          </Button>

          <Button variant="outlined" color="error" sx={{ mt: 2 }}>
            Eliminar cuenta
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OthersConfig;
