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
import { useCart } from "../../../context/appContext/allContext/CartContext.jsx";
import { useFavorites } from "../../../context/appContext/allContext/FavoriteContext.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/appContext/allContext/AuthContext.jsx";

const HeaderSection = () => {

  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  // 🔥 AUTH
  const { user, logout } = useAuth();
  const isAuthenticated = !!user?.email; // ✅ true si hay usuario, false si no
  console.log("🔐", user);

  const isAdmin = user?.rol === "admin";

  // 🔹 menú usuario
  const [anchorEl, setAnchorEl] = useState(null);
  const openAccountMenu = Boolean(anchorEl);

  // 🔹 modal login
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const handleAccountClick = (event) => {
    if (isAuthenticated) {
      setAnchorEl(event.currentTarget);
    } else {
      setOpenAuthModal(true);
    }
  };

  const handleAccountClose = () => setAnchorEl(null);

  // 🔹 carrito
  const [openCart, setOpenCart] = useState(false);
  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);

  const favoriteCount = favorites?.length || 0;

  const handleOpenFavorites = () => {
    if (isAuthenticated) {
      navigate("/favoritos");
    } else {
      setOpenAuthModal(true);
    }
  };

  // 🔥 navegación por rol
  const handleDashboard = () => {
    navigate("/admin"); // ruta admin
    handleAccountClose();
  };

  const handleProfile = () => {
    navigate("/mi-cuenta");
    handleAccountClose();
  };

  const handleLogout = () => {
    logout();
    handleAccountClose();
  };

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

              {/* Cuenta */}
              <IconButton color="inherit" onClick={handleAccountClick}>
                {user?.foto ? (
                  <img
                    src={user.foto}
                    alt="user"
                    style={{ width: 32, height: 32, borderRadius: "50%" }}
                  />
                ) : (
                  <AccountCircleIcon />
                )}
              </IconButton>

              {/* MENÚ USUARIO */}
              {isAuthenticated && (
                <AccountMenu
                  anchorEl={anchorEl}
                  open={openAccountMenu}
                  onClose={handleAccountClose}

                  // 🔥 acciones
                  onProfile={handleProfile}
                  onDashboard={isAdmin ? handleDashboard : null}
                  onLogout={handleLogout}
                  isAdmin={isAdmin}
                />
              )}

              {/* MODAL LOGIN */}
              {!isAuthenticated && (
                <AuthModal
                  open={openAuthModal}
                  onClose={() => setOpenAuthModal(false)}
                />
              )}

              {/* FAVORITOS */}
              <IconButton color="inherit" onClick={handleOpenFavorites}>
                <Badge badgeContent={favoriteCount} color="custom">
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>

              {/* CARRITO */}
              <IconButton color="inherit" onClick={handleOpenCart}>
                <Badge badgeContent={cartItems.length} color="custom">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

            </Box>
          </>
        )}
      </Box>

      {/* MODAL CARRITO */}
      <CartModals
        open={openCart}
        onClose={handleCloseCart}
        cartItems={cartItems}
      />
    </>
  );
};

export default HeaderSection;