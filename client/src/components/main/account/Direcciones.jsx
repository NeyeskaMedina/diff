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
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "var(--product-title)", mb: 4 }}>
              DIRECCIÓN DE FACTURACIÓN
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nombre completo"
                  name="nombre"
                  value={billingAddress.nombre}
                  onChange={handleBillingChange}
                  sx={{
                    "& label.Mui-focused": {
                      color: "#009688", // color del label cuando está enfocado
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#009688", // color del borde cuando está enfocado
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Calle / Dirección"
                  name="calle"
                  value={billingAddress.calle}
                  onChange={handleBillingChange}
                  sx={{
                    "& label.Mui-focused": {
                      color: "#009688", // color del label cuando está enfocado
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#009688", // color del borde cuando está enfocado
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Ciudad"
                  name="ciudad"
                  value={billingAddress.ciudad}
                  onChange={handleBillingChange}
                  sx={{
                    "& label.Mui-focused": {
                      color: "#009688", // color del label cuando está enfocado
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#009688", // color del borde cuando está enfocado
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Región / Estado"
                  name="region"
                  value={billingAddress.region}
                  onChange={handleBillingChange}
                  sx={{
                    "& label.Mui-focused": {
                      color: "#009688", // color del label cuando está enfocado
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#009688", // color del borde cuando está enfocado
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Código Postal"
                  name="codigoPostal"
                  value={billingAddress.codigoPostal}
                  onChange={handleBillingChange}
                  sx={{
                    "& label.Mui-focused": {
                      color: "#009688", // color del label cuando está enfocado
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#009688", // color del borde cuando está enfocado
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="País"
                  name="pais"
                  value={billingAddress.pais}
                  onChange={handleBillingChange}
                  sx={{
                    "& label.Mui-focused": {
                      color: "#009688", // color del label cuando está enfocado
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#009688", // color del borde cuando está enfocado
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              sx={{ mt: 3, backgroundColor: "custom.btnColorGreen" }}
              fullWidth
              onClick={handleSaveBilling}
            >
              Guardar datos de facturación
            </Button>
          </Paper>
        </Grid>

        {/* Dirección de Entrega */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "var(--product-title)", mb: 4 }}>
              DIRECCIÓN DE ENTREGA
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nombre completo"
                  name="nombre"
                  value={shippingAddress.nombre}
                  onChange={handleShippingChange}
                  sx={{
                    "& label.Mui-focused": {
                      color: "#009688", // color del label cuando está enfocado
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#009688", // color del borde cuando está enfocado
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Calle / Dirección"
                  name="calle"
                  value={shippingAddress.calle}
                  onChange={handleShippingChange}
                  sx={{
                    "& label.Mui-focused": {
                      color: "#009688", // color del label cuando está enfocado
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#009688", // color del borde cuando está enfocado
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Ciudad"
                  name="ciudad"
                  value={shippingAddress.ciudad}
                  onChange={handleShippingChange}
                  sx={{
                    "& label.Mui-focused": {
                      color: "#009688", // color del label cuando está enfocado
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#009688", // color del borde cuando está enfocado
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Región / Estado"
                  name="region"
                  value={shippingAddress.region}
                  onChange={handleShippingChange}
                  sx={{
                    "& label.Mui-focused": {
                      color: "#009688", // color del label cuando está enfocado
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#009688", // color del borde cuando está enfocado
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Código Postal"
                  name="codigoPostal"
                  value={shippingAddress.codigoPostal}
                  onChange={handleShippingChange}
                  sx={{
                    "& label.Mui-focused": {
                      color: "#009688", // color del label cuando está enfocado
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#009688", // color del borde cuando está enfocado
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="País"
                  name="pais"
                  value={shippingAddress.pais}
                  onChange={handleShippingChange}
                  sx={{
                    "& label.Mui-focused": {
                      color: "#009688", // color del label cuando está enfocado
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#009688", // color del borde cuando está enfocado
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              sx={{ mt: 3, backgroundColor: "custom.btnColorGreen" }}
              fullWidth
              onClick={handleSaveShipping}
            >
              Guardar datos de entrega
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Direcciones;
