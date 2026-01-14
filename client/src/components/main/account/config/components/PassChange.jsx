import React from "react";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";

const PassChange = () => {
  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom>
        Cambiar contraseña
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Contraseña actual" type="password" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Nueva contraseña" type="password" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Confirmar nueva contraseña"
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary">
            Guardar cambios
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PassChange;
