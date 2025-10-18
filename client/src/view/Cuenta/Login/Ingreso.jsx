import React, { useState } from "react";
import { Box, Typography, Button, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Register from "../../../components/section/login/Register";
import Login from "../../../components/section/login/Login";

const Ingreso = () => {
  const [view, setView] = useState("registro"); // "registro" o "ingreso"
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md")); // md ~ 900px

  return (
    <Box
      display="flex"
      flexDirection={isSmall ? "column-reverse" : "row"}
      gap={4}
      p={4}
      sx={{ border: "1px solid #eee", borderRadius: 2, boxShadow: 2 }}
    >
      {/* Columna izquierda (formularios) */}
      <Box flex={1}>
        <Typography variant="h6" gutterBottom>
          {view === "registro" ? "REGISTRARSE" : "INGRESAR"}
        </Typography>
        {view === "registro" ? <Register /> : <Login />}
      </Box>

      {/* Divider solo en pantallas grandes */}
      {!isSmall && <Divider orientation="vertical" flexItem />}

      {/* Columna derecha (texto dinámico) */}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        p={2}
        mt={isSmall ? 4 : 0}
      >
        <Typography variant="h6" gutterBottom>
          REGISTRO
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          {view === "registro"
            ? "Registrarse en este sitio le permite acceder al estado y al historial de su pedido. Simplemente complete los campos a continuación y obtendremos una nueva cuenta configurada para usted en poco tiempo."
            : "Acceda con su cuenta registrada para ver el estado y el historial de sus pedidos."}
        </Typography>

        {view === "registro" ? (
          <Button
            variant="contained"
            onClick={() => setView("ingreso")}
            sx={{
              background: "linear-gradient(to right, #FFD54F, #FBC02D)",
              borderRadius: "30px",
              px: 4,
              "&:hover": {
                background: "linear-gradient(to right, #FFCA28, #F9A825)",
              },
            }}
          >
            ACCEDER
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => setView("registro")}
            sx={{
              background: "linear-gradient(to right, #FFD54F, #FBC02D)",
              borderRadius: "30px",
              px: 4,
              "&:hover": {
                background: "linear-gradient(to right, #FFCA28, #F9A825)",
              },
            }}
          >
            REGISTRARSE
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Ingreso;
