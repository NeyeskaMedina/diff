import React from "react";
import {
  Drawer,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartModals = ({ open, onClose, cartItems }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 400 }, // full en mobile, 400px en desktop
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        },
      }}
    >
      {/* Encabezado */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid #ddd",
        }}
      >
        <Typography variant="h6">Carrito</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Contenido scrollable */}
      <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
        {cartItems.length > 0 ? (
          <List>
            {cartItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={item.image} alt={item.name} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={`Cantidad: ${item.quantity} | $${item.price.toLocaleString()}`}
                  />
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    ${(item.price * item.quantity).toLocaleString()}
                  </Typography>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        ) : (
          <Box
            sx={{
              textAlign: "center",
              py: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 60, color: "gray" }} />
            <Typography variant="h6">No hay productos en el carrito.</Typography>
            <Button variant="contained" color="primary" onClick={onClose}>
              Volver a la tienda
            </Button>
          </Box>
        )}
      </Box>

      {/* Footer fijo */}
      {cartItems.length > 0 && (
        <Box
          sx={{
            borderTop: "1px solid #ddd",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "right" }}>
            Subtotal: ${subtotal.toLocaleString()}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button fullWidth variant="outlined" onClick={onClose}>
              Ver carrito
            </Button>
            <Button fullWidth variant="contained" color="primary">
              Finalizar compra
            </Button>
          </Box>
        </Box>
      )}
    </Drawer>
  );
};

export default CartModals;
