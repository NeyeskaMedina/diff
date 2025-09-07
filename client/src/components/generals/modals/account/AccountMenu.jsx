import React from "react";
import { Menu, MenuItem, Divider } from "@mui/material";

const AccountMenu = ({ anchorEl, open, onClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { mt: 1.5, minWidth: 200 } }}
    >
      <MenuItem component="a" href="/mi-cuenta" onClick={onClose}>
        Mi cuenta
      </MenuItem>
      <MenuItem component="a" href="/mi-cuenta/pedidos" onClick={onClose}>
        Pedidos
      </MenuItem>
      <MenuItem component="a" href="/mi-cuenta/direcciones" onClick={onClose}>
        Direcciones
      </MenuItem>
      <MenuItem component="a" href="/mi-cuenta/configuracion" onClick={onClose}>
        Configuración
      </MenuItem>
      <Divider />
      <MenuItem component="a" href="/mi-cuenta/logout" onClick={onClose}>
        Salir
      </MenuItem>
    </Menu>
  );
};

export default AccountMenu;
