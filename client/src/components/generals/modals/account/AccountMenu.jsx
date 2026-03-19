import React from "react";
import { Menu, MenuItem, Divider } from "@mui/material";

const AccountMenu = ({
  anchorEl,
  open,
  onClose,
  onProfile,
  onDashboard,
  onLogout,
  isAdmin
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { mt: 1.5, minWidth: 200 } }}
    >
      {/* Mi cuenta */}
      <MenuItem
        onClick={() => {
          onProfile();
        }}
      >
        Mi cuenta
      </MenuItem>

      {/* Pedidos */}
      <MenuItem
        onClick={() => {
          onProfile(); // o crea otra función si quieres otra ruta
        }}
      >
        Pedidos
      </MenuItem>

      {/* Direcciones */}
      <MenuItem
        onClick={() => {
          onProfile();
        }}
      >
        Direcciones
      </MenuItem>

      {/* Configuración */}
      <MenuItem
        onClick={() => {
          onProfile();
        }}
      >
        Configuración
      </MenuItem>

      {/* 🔥 SOLO ADMIN */}
      {isAdmin && onDashboard && (
        <MenuItem
          onClick={() => {
            onDashboard();
          }}
        >
          Panel Admin
        </MenuItem>
      )}

      <Divider />

      {/* Logout */}
      <MenuItem
        onClick={() => {
          onLogout();
        }}
      >
        Salir
      </MenuItem>
    </Menu>
  );
};

export default AccountMenu;