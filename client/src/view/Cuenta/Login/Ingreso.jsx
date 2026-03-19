import React, { useState } from "react";
import { Box, Typography, Button, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FormsRegister from "../../../components/generals/forms/FormsRegister";
import FormsLogin from "../../../components/generals/forms/FormsLogin";

const Ingreso = () => {
  const [view, setView] = useState("registro");
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      flexDirection={isSmall ? "column-reverse" : "row"}
      alignItems="stretch"
      justifyContent="center"
      gap={4}
      p={isSmall ? 2 : 6}
      sx={{
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {/* CARD FORMULARIO */}
      <Box
        flex={1}
        sx={{
          background: "white",
          borderRadius: "14px",
          padding: isSmall ? "20px" : "40px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          border: "1px solid #eee",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "var(--label-colorTxF)",
            fontWeight: "bold",
            mb: 3,
          }}
        >
          {view === "registro" ? "REGISTRARSE" : "INGRESAR"}
        </Typography>

        {view === "registro" ? <FormsRegister /> : <FormsLogin />}
      </Box>

      {/* DIVIDER SOLO DESKTOP */}
      {!isSmall && (
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: "var(--border-colorTxF)",
            opacity: 0.3,
          }}
        />
      )}

      {/* CARD INFORMACIÓN */}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        sx={{
          background: "var(--header-bg)",
          borderRadius: "14px",
          padding: isSmall ? "20px" : "40px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "var(--label-colorTxF)",
            fontWeight: "bold",
          }}
        >
          REGISTRO
        </Typography>

        <Typography
          variant="body1"
          mb={4}
          sx={{
            maxWidth: "420px",
            color: "black",
            lineHeight: 1.6,
          }}
        >
          {view === "registro"
            ? "Registrarse en este sitio le permite acceder al estado y al historial de su pedido. Complete los campos y en pocos segundos tendrá su cuenta lista."
            : "Acceda con su cuenta registrada para revisar el estado y el historial de sus pedidos."}
        </Typography>

        {view === "registro" ? (
          <Button
            variant="contained"
            onClick={() => setView("ingreso")}
            sx={{
              background: "var(--ingresar-btx)",
              borderRadius: "40px",
              px: 5,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "14px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
              "&:hover": {
                background: "var(--productModal-icon-color)",
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
              background: "var(--ingresar-btx)",
              borderRadius: "40px",
              px: 5,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "14px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
              "&:hover": {
                background: "var(--productModal-icon-color)",
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