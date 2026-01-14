import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Divider,
  Button,
} from "@mui/material";

const ProductsUpload = () => {
  const [csvFile, setCsvFile] = useState(null);

  const handleCsvUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.name.endsWith(".csv")) {
      setCsvFile(file);
      alert(`Archivo CSV cargado: ${file.name}`);
    } else {
      alert("Selecciona un archivo CSV válido.");
    }
  };

  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom>
        🛒 Cargar productos
      </Typography>

      <Typography variant="body1" sx={{ mt: 1, mb: 1, fontWeight: 500 }}>
        Carga individual
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Nombre del producto" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Precio" type="number" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="URL de la imagen"
            placeholder="https://ejemplo.com/imagen.jpg"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Descripción" multiline rows={3} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary">
            Publicar producto
          </Button>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body1" fontWeight={500}>
        Carga masiva (CSV)
      </Typography>

      <Grid container spacing={2} alignItems="center" sx={{ mt: 1 }}>
        <Grid item xs={12} sm={8}>
          <Button variant="outlined" component="label" fullWidth>
            Seleccionar archivo CSV
            <input hidden accept=".csv" type="file" onChange={handleCsvUpload} />
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" fullWidth disabled={!csvFile}>
            Subir productos
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsUpload;
