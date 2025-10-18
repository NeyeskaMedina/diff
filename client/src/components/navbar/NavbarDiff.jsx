import React from 'react';
import { AppBar, Toolbar, Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import './nav.css';

const NavbarDiff = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'var(--nav-bg)',
        color: 'var(--nav-color)',
        boxShadow: 'none',
        height: '50px',
        maxWidth: '100%',
        justifyContent: 'center',
        px: 2,
      }}

    >
      <Toolbar sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'space-between' }}>
        {/* Logo y menú (solo escritorio) */}
        {!isMobile && (
          <>
            {/* Logo izquierda */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Link to="/" className="nav-link">Correo</Link>
              <Link to="/contacto" className="nav-link">Contacto</Link>
            </Box>

            {/* Menú centrado */}
            {/* <Box sx={{ display: 'flex', gap: 3, color: 'black' }}>
              <img src="/logo.png" alt="Logo" height={40} />
            </Box> */}

            {/* Iconos derecha */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
              {/* Aquí puedes poner carrito o usuario */}
            </Box>
          </>
        )}

        {/* Solo móvil: logo de Instagram centrado */}
        {isMobile && (
          <IconButton color="inherit" size="large">
            <InstagramIcon sx={{ fontSize: 20 }} />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavbarDiff;
