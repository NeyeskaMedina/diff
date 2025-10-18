import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box sx={{ 
      background: 'var(--footer-bg)', 
      color: 'var(--footer-color)', 
      position: 'relative', 
      pt: 6, 
      pb: 10,
    //   backgroundImage: 'url(/footer-bg.png)',
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          
          {/* Logo */}
          <Grid item xs={12} sm={6} md={3}>
            <Box component="img" src="/logoDifi.png" alt="Difi" sx={{ width: 120 }} />
          </Grid>

          {/* Informaciones */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: 'black', mb: 2 }}>INFORMACIONES</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemIcon sx={{ color: 'black', minWidth: 30 }}><ChevronRightIcon /></ListItemIcon>
                <ListItemText primary="Quiénes somos" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ color: 'black', minWidth: 30 }}><ChevronRightIcon /></ListItemIcon>
                <ListItemText primary="Términos y condiciones" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ color: 'black', minWidth: 30 }}><ChevronRightIcon /></ListItemIcon>
                <ListItemText primary="Mi cuenta" />
              </ListItem>
            </List>
          </Grid>

          {/* Contacto */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: 'black', mb: 2 }}>CONTACTO</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ color: 'black', mr: 1 }} />
              <Typography variant="body2">+569 11111111</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ color: 'black', mr: 1 }} />
              <Typography variant="body2">contacto@difi.cl</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <InstagramIcon sx={{ color: 'black', mr: 1 }} />
              <Typography variant="body2">@diff</Typography>
            </Box>
          </Grid>

          {/* Métodos de pago */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: 'black', mb: 2 }}>MÉTODOS DE PAGO</Typography>
            <Box component="img" 
              src="https://seeklogo.com/images/G/getnet-by-santander-logo-6BB3BB2D46-seeklogo.com.png" 
              alt="Getnet" 
              sx={{ width: 100, backgroundColor: 'white', borderRadius: 1, p: 0.5 }}
            />
          </Grid>

        </Grid>
      </Container>

      {/* Línea inferior */}
      <Box sx={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        background: 'var(--fooLinea-bg)', 
        color: 'var(--fooLinea-color)', 
        textAlign: 'center', 
        py: 1 
      }}>
        <Typography variant="body2">
          © 2025 <strong>Difi</strong> - DISEÑADO POR <Link href="https://wa.me/56976512953" underline="hover" color="inherit"><strong>NeyeTI</strong></Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
