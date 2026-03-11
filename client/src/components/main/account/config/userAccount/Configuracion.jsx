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
import PassChange from "../components/PassChange";
import OthersConfig from "../components/OthersConfig";

const Configuracion = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
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
        <Tab label="Otras configuraciones" />
      </Tabs>

      {/* ================= CAMBIO DE CONTRASEÑA ================= */}
      {/* ======================================================== */}
      {/* ======================================================== */}
      {/* ======================================================== */}

      {tabValue === 0 && (<PassChange />)}


      {/* ================= OTRAS CONFIGURACIONES ================= */}
      {/* ======================================================== */}
      {/* ======================================================== */}
      {/* ======================================================== */}

      
      {tabValue === 1 && (<OthersConfig/>)}
    </Paper>
  );
};

export default Configuracion;
