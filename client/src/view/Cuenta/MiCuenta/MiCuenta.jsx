import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Drawer,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Importamos las secciones
import Escritorio from "../../../components/main/account/Escritorio";
import Pedidos from "../../../components/main/account/Pedidos";
import Descargas from "../../../components/main/account/Descargas";
import Direcciones from "../../../components/main/account/Direcciones";
import Configuracion from "../../../components/main/account/Configuracion";
// import Salir from "./Salir";

const menuItems = [
  { key: "escritorio", label: "Escritorio" },
  { key: "pedidos", label: "Pedidos" },
  { key: "descargas", label: "Descargas" },
  { key: "direcciones", label: "Direcciones" },
  { key: "configuracion", label: "Configuración" },
  { key: "salir", label: "Salir" },
];

const MiCuenta = () => {
  const [selected, setSelected] = useState("escritorio");
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  // Contenido dinámico en base al menú
  const renderContent = () => {
    switch (selected) {
      case "escritorio":
        return <Escritorio onSelect={setSelected} />;
      case "pedidos":
        return <Pedidos />;
      case "descargas":
        return <Descargas />;
      case "direcciones":
        return <Direcciones />;
      case "configuracion":
        return <Configuracion />;
      case "salir":
        return <Salir />;
      default:
        return <Escritorio />;
    }
  };

  const Sidebar = (
    <Box sx={{ width: 250, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        MI CUENTA
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.key}
            selected={selected === item.key}
            onClick={() => {
              setSelected(item.key);
              if (isMobile) setOpenDrawer(false); // cerrar en móvil
            }}
            sx={{
              borderRadius: 1,
              mb: 1,
              bgcolor: selected === item.key ? "grey.200" : "transparent",
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box display="flex" minHeight="100vh">
      {/* Sidebar escritorio */}
      {!isMobile && <Paper elevation={2}>{Sidebar}</Paper>}

      {/* Sidebar móvil como Drawer */}
      {isMobile && (
        <>
          <IconButton
            onClick={() => setOpenDrawer(true)}
            sx={{ position: "absolute", top: 10, left: 10 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            {Sidebar}
          </Drawer>
        </>
      )}

      {/* Contenido */}
      <Box flex={1} p={isMobile ? 2 : 4}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            {menuItems.find((item) => item.key === selected)?.label}
          </Typography>
          {renderContent()}
        </Paper>
      </Box>
    </Box>
  );
};

export default MiCuenta;
