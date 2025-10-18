import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DownloadIcon from "@mui/icons-material/Download";
import RoomIcon from "@mui/icons-material/Room";
import HandymanIcon from "@mui/icons-material/Handyman";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Escritorio = ({ onSelect }) => {
  const cards = [
    { key: "pedidos", label: "Pedidos", icon: <AssignmentIcon fontSize="large" /> },
    { key: "descargas", label: "Descargas", icon: <DownloadIcon fontSize="large" /> },
    { key: "direcciones", label: "Direcciones", icon: <RoomIcon fontSize="large" /> },
    { key: "configuracion", label: "Configuración", icon: <HandymanIcon fontSize="large" /> },
    { key: "salir", label: "Salir", icon: <ExitToAppIcon fontSize="large" /> },
  ];

  return (
    <>
      <Typography variant="body1" gutterBottom>
        Desde el escritorio de tu cuenta puedes ver tus <b>pedidos recientes</b>,
        gestionar tus <b>direcciones</b>, editar tu <b>contraseña</b> y los
        <b> detalles de tu cuenta</b>.
      </Typography>
      <Grid container spacing={2} mt={1}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.key}>
            <Paper
              elevation={2}
              onClick={() => onSelect(card.key)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
                textAlign: "center",
                cursor: "pointer",
                width: 200,
                height: 200,
                "&:hover": {
                  background: ((theme) => theme.customGradients.store),
                },
              }}
            >
              {card.icon}
              <Typography variant="subtitle1">{card.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Escritorio;
