import React, { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Collapse,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FormsLogin from "../../forms/FormsLogin.jsx"
import GoogleLoginButton from "../../buttons/googleButtons/GoogleLoginButton.jsx"
import CrearCuentaBtx from "../../buttons/authButtons/CrearCuentaBtx.jsx"

// ✅ IMPORTAMOS TU BUSCADOR REAL
import SearchBar from "../../search/SearchBar";

const categories = [
  { label: "Inicio", path: "/" },
  { label: "Tienda", path: "/tienda" },
  { label: "Ropa", path: "/ropa" },
  { label: "Artículos de Higiene", path: "/articulos-higiene" },
  { label: "Alimentación", path: "/alimentacion" },
  { label: "Seguridad", path: "/seguridad" },
  { label: "Descanso", path: "/descanso" },
  { label: "Juego", path: "/juego" },
  { label: "Quienes Somos", path: "/quienes-somos" },
  { label: "Contacto", path: "/contacto" },
];

const MobileMenu = ({ 
  open,
  onClose,
  isAuthenticated,
  onLogout,
  isAdmin,
  onNavigate,
  onProfile,
  onDashboard
 }) => {
  const [openAccount, setOpenAccount] = useState(false);
  const [openLogin, setOpenLogin] = useState(true);

  const toggleLogin = () => {
    setOpenLogin(!openLogin);
  };


  const toggleAccount = () => {
    setOpenAccount(!openAccount);
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 280, p: 2 }}>

        {/* Buscador */}
        <Box sx={{ mb: 2 }}>
          <SearchBar onProductSelect={onClose} />
        </Box>

        <Divider />

        {/* ✅ Categorías SIEMPRE visibles */}
        <List>
          {categories.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton 
                  onClick={() => {
                    onNavigate(item.path);
                    onClose(); //cierra el menú
                  }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        {/* ✅ Sección cuenta */}
        <List>

          {isAuthenticated ? (
            <>
              {/* Mi cuenta desplegable */}
              <ListItem disablePadding>
                <ListItemButton onClick={toggleAccount}>
                  <ListItemText primary="Mi Cuenta" />
                  {openAccount ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>

              <Collapse in={openAccount} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => {
                      onProfile();
                      onClose();
                    }}
                  >
                    <ListItemText primary="Mi perfil" />
                  </ListItemButton>
                </ListItem>
                  
                {isAdmin && (
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={() => {
                        onDashboard();
                        onClose();
                      }}
                    >
                      <ListItemText primary="Admin Dashboard" />
                    </ListItemButton>
                  </ListItem>
                )}

                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => {
                      onLogout();
                      onClose();
                    }}
                  >
                    <ListItemText primary="Cerrar sesión" />
                  </ListItemButton>
                </ListItem>
                  
              </List>
              </Collapse>
            </>
          ) : (
            <>
              {/* Login si no está logueado */}
              <ListItem disablePadding>
                <ListItemButton onClick={toggleLogin}>
                  <ListItemText primary="Iniciar sesión" />
                  {openLogin ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>

              <Collapse in={openLogin} timeout="auto" unmountOnExit>
                <Box sx={{ px: 2 }}>
                  <FormsLogin />
                  <GoogleLoginButton />
                </Box>
              </Collapse>

              <Box sx={{ px: 2 }}>
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
          )}

        </List>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;