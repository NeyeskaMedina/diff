import React, { useState } from "react";
import {
  Box,
  IconButton,
  Badge,
  useMediaQuery,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchBar from "../../generals/search/SearchBar";
import MobileMenu from "../../generals/menu/mobileMenu/MobileMenu";
import CartModals from "../../main/shoppingCart/cartModals/CartModals";

const HeaderSection = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    // {
    //   name: "Desodorante 200 ml Khamrah de Lattafa",
    //   price: 8990,
    //   quantity: 1,
    //   image: "https://via.placeholder.com/50",
    // },
  ]);

  // 👉 Estado para el menú de "Mi Cuenta"
  const [anchorEl, setAnchorEl] = useState(null);
  const openAccountMenu = Boolean(anchorEl);
  const handleAccountClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAccountClose = () => {
    setAnchorEl(null);
  };

  // 👉 Estado para el carrito
  const [openCart, setOpenCart] = useState(false);
  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 1,
          background: "var(--header-bg)",
        }}
      >
        {isMobile ? (
          // 📱 Vista Mobile
          <>
            {/* Menú hamburguesa izquierda */}
            <IconButton color="inherit" onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>

            {/* Carrito derecha */}
            <IconButton color="inherit" onClick={handleOpenCart}>
              <Badge badgeContent={1} color="custom">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {/* Drawer del menú mobile */}
            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
          </>
        ) : (
          // 🖥️ Vista Desktop
          <>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src="/logoDifi.png" alt="Logo" height={70} />
            </Box>

            {/* Buscador */}
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center", mx: 2 }}>
              <SearchBar />
            </Box>

            {/* Iconos */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {/* 👉 Menú Mi Cuenta */}
              <IconButton color="inherit" onClick={handleAccountClick}>
                <AccountCircleIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={openAccountMenu}
                onClose={handleAccountClose}
                PaperProps={{ sx: { mt: 1.5, minWidth: 200 } }}
              >
                <MenuItem component="a" href="/mi-cuenta" onClick={handleAccountClose}>
                  Escritorio
                </MenuItem>
                <MenuItem component="a" href="/mi-cuenta/pedidos" onClick={handleAccountClose}>
                  Pedidos
                </MenuItem>
                <MenuItem component="a" href="/mi-cuenta/descargas" onClick={handleAccountClose}>
                  Descargas
                </MenuItem>
                <MenuItem component="a" href="/mi-cuenta/direcciones" onClick={handleAccountClose}>
                  Direcciones
                </MenuItem>
                <MenuItem component="a" href="/mi-cuenta/detalles" onClick={handleAccountClose}>
                  Detalles de la cuenta
                </MenuItem>
                <Divider />
                <MenuItem component="a" href="/mi-cuenta/logout" onClick={handleAccountClose}>
                  Salir
                </MenuItem>
              </Menu>

              {/* Favoritos */}
              <IconButton color="inherit">
                <Badge badgeContent={2} color="custom">
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>

              {/* Carrito */}
              <IconButton color="inherit" onClick={handleOpenCart}>
                <Badge badgeContent={1} color="custom">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          </>
        )}
      </Box>

      {/* Modal del carrito */}
      <CartModals open={openCart} onClose={handleCloseCart} cartItems={cartItems} />
    </>
  );
};

export default HeaderSection;
