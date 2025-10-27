import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
  Paper,
  Grid,
  Divider,
} from "@mui/material";

const AdminConfiguracion = () => {
  const [tabValue, setTabValue] = useState(0);
  const [csvFile, setCsvFile] = useState(null);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCsvUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.name.endsWith(".csv")) {
      setCsvFile(file);
      alert(`Archivo CSV cargado: ${file.name}`);
    } else {
      alert("Por favor selecciona un archivo CSV válido.");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 3,
        height: { xs: "auto", md: "70vh" },
        overflowY: "auto",
      }}
    >
      <Typography variant="h5" gutterBottom>
        ⚙️ Configuración de tu cuenta
      </Typography>

      <Tabs
        value={tabValue}
        onChange={handleChange}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          mb: 2,
        }}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Cambio de contraseña" />
        <Tab label="Cargar productos" />
        <Tab label="Otras configuraciones" />
      </Tabs>

      {/* ================= CAMBIO DE CONTRASEÑA ================= */}
      {tabValue === 0 && (
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Cambiar contraseña
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contraseña actual"
                type="password"
              />
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
              <Button variant="contained" color="primary">
                Guardar cambios
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* ================= CARGA DE PRODUCTOS ================= */}
      {tabValue === 1 && (
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            🛒 Cargar productos
          </Typography>

          {/* ---------- CARGA INDIVIDUAL ---------- */}
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
                label="URL de la imagen del producto"
                placeholder="https://ejemplo.com/imagen.jpg"
              />
            </Grid> <br />
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descripción"
                multiline
                rows={3}
              />
            </Grid> <br />
            <Grid item xs={12}>
              <Button variant="contained" color="success">
                Publicar producto
              </Button>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* ---------- CARGA MASIVA POR CSV ---------- */}
          <Typography variant="body1" sx={{ mt: 2, mb: 1, fontWeight: 500 }}>
            Carga masiva (archivo CSV)
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Puedes subir un archivo CSV con múltiples productos.  
            Ejemplo de columnas: <strong>nombre, precio, descripción, categoría, imagen_url</strong>
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={8}>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ textTransform: "none" }}
              >
                Seleccionar archivo CSV
                <input
                  hidden
                  accept=".csv"
                  type="file"
                  onChange={handleCsvUpload}
                />
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                disabled={!csvFile}
              >
                Subir productos
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* ================= OTRAS CONFIGURACIONES ================= */}
      {tabValue === 2 && (
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            🔧 Otras configuraciones
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" fontWeight={500}>
                Editar información del perfil
              </Typography>
              <TextField
                fullWidth
                label="Nombre completo"
                sx={{ mt: 1, mb: 1 }}
              />
              <TextField
                fullWidth
                label="Correo electrónico"
                sx={{ mb: 2 }}
              />
              <Button variant="contained">Guardar cambios</Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="body1" fontWeight={500}>
                Preferencias de cuenta
              </Typography>
              <Button
                variant="outlined"
                color="warning"
                sx={{ mt: 1, mb: 1 }}
              >
                Cambiar correo
              </Button>
              <Button variant="outlined" color="error">
                Eliminar cuenta
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Paper>
  );
};

export default AdminConfiguracion;
