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

const accountMenu = [
  { label: "Escritorio", path: "/mi-cuenta" },
  { label: "Pedidos", path: "/mi-cuenta/pedidos" },
  { label: "Descargas", path: "/mi-cuenta/descargas" },
  { label: "Direcciones", path: "/mi-cuenta/direcciones" },
  { label: "Detalles de la cuenta", path: "/mi-cuenta/detalles" },
  { label: "Salir", path: "/mi-cuenta/logout" },
];

const MobileMenu = ({ open, onClose, isAuthenticated }) => {
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
              <ListItemButton component="a" href={item.path}>
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
                  {accountMenu.map((sub) => (
                    <ListItem key={sub.label} disablePadding>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        component="a"
                        href={sub.path}
                      >
                        <ListItemText primary={sub.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
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
                  <CrearCuentaBtx />
                </Box>
            </>
          )}

        </List>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;