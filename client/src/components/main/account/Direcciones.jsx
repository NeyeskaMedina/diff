import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";

const Direcciones = () => {
  const [billingAddress, setBillingAddress] = useState({
    nombre: "",
    calle: "",
    ciudad: "",
    region: "",
    codigoPostal: "",
    pais: "",
  });

  const [shippingAddress, setShippingAddress] = useState({
    nombre: "",
    calle: "",
    ciudad: "",
    region: "",
    codigoPostal: "",
    pais: "",
  });

  const handleBillingChange = (e) => {
    setBillingAddress({ ...billingAddress, [e.target.name]: e.target.value });
  };

  const handleShippingChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handleSaveBilling = () => {
    console.log("Dirección de Facturación:", billingAddress);
    alert("Dirección de Facturación guardada!");
  };

  const handleSaveShipping = () => {
    console.log("Dirección de Entrega:", shippingAddress);
    alert("Dirección de Entrega guardada!");
  };

  return (
    <Box sx={{ px: 3, py: 4 }}>
      <Typography variant="h5" sx={{ mb: 4, fontWeight: "bold" }}>
        📍 Aquí puedes gestionar tus direcciones
      </Typography>

      <Grid container spacing={4}>
        {/* Dirección de Facturación */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Dirección de Facturación
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nombre completo"
                  name="nombre"
                  value={billingAddress.nombre}
                  onChange={handleBillingChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Calle / Dirección"
                  name="calle"
                  value={billingAddress.calle}
                  onChange={handleBillingChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Ciudad"
                  name="ciudad"
                  value={billingAddress.ciudad}
                  onChange={handleBillingChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Región / Estado"
                  name="region"
                  value={billingAddress.region}
                  onChange={handleBillingChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Código Postal"
                  name="codigoPostal"
                  value={billingAddress.codigoPostal}
                  onChange={handleBillingChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="País"
                  name="pais"
                  value={billingAddress.pais}
                  onChange={handleBillingChange}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
              fullWidth
              onClick={handleSaveBilling}
            >
              Guardar Facturación
            </Button>
          </Paper>
        </Grid>

        {/* Dirección de Entrega */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Dirección de Entrega
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nombre completo"
                  name="nombre"
                  value={shippingAddress.nombre}
                  onChange={handleShippingChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Calle / Dirección"
                  name="calle"
                  value={shippingAddress.calle}
                  onChange={handleShippingChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Ciudad"
                  name="ciudad"
                  value={shippingAddress.ciudad}
                  onChange={handleShippingChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Región / Estado"
                  name="region"
                  value={shippingAddress.region}
                  onChange={handleShippingChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Código Postal"
                  name="codigoPostal"
                  value={shippingAddress.codigoPostal}
                  onChange={handleShippingChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="País"
                  name="pais"
                  value={shippingAddress.pais}
                  onChange={handleShippingChange}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
              fullWidth
              onClick={handleSaveShipping}
            >
              Guardar Entrega
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Direcciones;
