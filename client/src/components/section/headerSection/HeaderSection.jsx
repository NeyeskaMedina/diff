import React, { useState } from "react";
import {
  Box,
  IconButton,
  Badge,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchBar from "../../generals/search/SearchBar";
import MobileMenu from "../../generals/menu/mobileMenu/MobileMenu";
import CartModals from "../../main/shoppingCart/cartModals/CartModals";
import AuthModal from "../../generals/modals/account/AuthModal";
import AccountMenu from "../../generals/modals/account/AccountMenu";

const HeaderSection = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // 👉 Estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // 👉 Estado para menú/logueado
  const [anchorEl, setAnchorEl] = useState(null);
  const openAccountMenu = Boolean(anchorEl);

  // 👉 Estado para modal login/no logueado
  const [openAuthModal, setOpenAuthModal] = useState(true);

  const handleAccountClick = (event) => {
    if (isAuthenticated) {
      setAnchorEl(event.currentTarget); // Abre menú
    } else {
      setOpenAuthModal(true); // Abre modal login
    }
  };

  const handleAccountClose = () => {
    setAnchorEl(null);
  };

  // 👉 Estado carrito
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
          <>
            <IconButton color="inherit" onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>

            <IconButton color="inherit" onClick={handleOpenCart}>
              <Badge badgeContent={cartItems.length} color="custom">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
          </>
        ) : (
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
              {/* 👉 Mi Cuenta */}
              <IconButton color="inherit" onClick={handleAccountClick}>
                <AccountCircleIcon />
              </IconButton>

              {/* Si está logueado → menú */}
              {isAuthenticated && (
                <AccountMenu
                  anchorEl={anchorEl}
                  open={openAccountMenu}
                  onClose={handleAccountClose}
                />
              )}

              {/* Si no está logueado → modal */}
              {!isAuthenticated && (
                <AuthModal
                  open={openAuthModal}
                  onClose={() => setOpenAuthModal(false)}
                />
              )}

              {/* Favoritos */}
              <IconButton color="inherit">
                <Badge badgeContent={2} color="custom">
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>

              {/* Carrito */}
              <IconButton color="inherit" onClick={handleOpenCart}>
                <Badge badgeContent={cartItems.length} color="custom">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          </>
        )}
      </Box>

      {/* Modal carrito */}
      <CartModals
        open={openCart}
        onClose={handleCloseCart}
        cartItems={cartItems}
      />
    </>
  );
};

export default HeaderSection;
