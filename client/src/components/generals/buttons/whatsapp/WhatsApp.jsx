import React from "react";
import { IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsApp = () => {
  return (
    <>
    {/* WhatsApp */}
      <IconButton 
        // size={40}
        component="a" 
        href="https://wa.me/5666855307" 
        target="_blank" 
        sx={{ 
          position: 'fixed', 
<<<<<<< HEAD
          bottom: 40, 
          right: 40, 
=======
          bottom: 20, 
          right: 20, 
>>>>>>> main
          backgroundColor: '#25D366', 
          color: '#fff',
          '&:hover': { backgroundColor: '#1ebe5b' },
          zIndex: 999,
          boxShadow: 4,
        }}
      >
        <WhatsAppIcon />
      </IconButton>
      </>
  )
};

  export default WhatsApp;