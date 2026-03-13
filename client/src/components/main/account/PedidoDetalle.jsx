// src/components/PedidoDetalle.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

const pedidosMock = [
  {
    id: 1,
    nombre: "Pedido de Ropa",
    fecha: "2025-08-10",
    estado: "Pendiente",
    productos: [
      { nombre: "Polera", cantidad: 2, precio: 20 },
      { nombre: "Pantalón", cantidad: 1, precio: 40 },
      { nombre: "Chaqueta", cantidad: 1, precio: 40 }
    ]
  },
  {
    id: 2,
    nombre: "Pedido de Juguetes",
    fecha: "2025-08-15",
    estado: "Enviado",
    productos: [
      { nombre: "Auto RC", cantidad: 1, precio: 150 },
      { nombre: "Muñeca", cantidad: 2, precio: 50 }
    ]
  },
  {
    id: 3,
    nombre: "Pedido de Alimentos",
    fecha: "2025-08-20",
    estado: "Entregado",
    productos: [
      { nombre: "Chocolate", cantidad: 3, precio: 10 },
      { nombre: "Galletas", cantidad: 2, precio: 8 }
    ]
  }
];

const PedidoDetalle = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const pedido = pedidosMock.find(p => p.id === Number(id));

  if (!pedido) {
    return (
      <Typography sx={{ p:4 }}>
        Pedido no encontrado
      </Typography>
    );
  }

  const estadoColor = (estado) => {
    if (estado === "Pendiente") return "warning";
    if (estado === "Enviado") return "info";
    return "success";
  };

  const totalPedido = pedido.productos.reduce(
    (total, prod) => total + prod.precio * prod.cantidad,
    0
  );

  return (

    <Box maxWidth={900} mx="auto" mt={4}>

      <Paper sx={{ p:4, borderRadius:3 }}>

        <Typography variant="h5" fontWeight={600} mb={2}>
          📦 Detalle del Pedido #{pedido.id}
        </Typography>

        <Chip
          label={pedido.estado}
          color={estadoColor(pedido.estado)}
          sx={{ mb:2 }}
        />

        <Typography>
          <strong>Nombre:</strong> {pedido.nombre}
        </Typography>

        <Typography>
          <strong>Fecha:</strong> {pedido.fecha}
        </Typography>

        <Divider sx={{ my:3 }}/>

        <Typography variant="h6" mb={2}>
          Productos del pedido
        </Typography>

        <TableContainer>

          <Table>

            <TableHead>

              <TableRow>

                <TableCell>Producto</TableCell>
                <TableCell align="center">Cantidad</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Subtotal</TableCell>

              </TableRow>

            </TableHead>

            <TableBody>

              {pedido.productos.map((prod,i)=>{

                const subtotal = prod.cantidad * prod.precio;

                return(

                  <TableRow key={i}>

                    <TableCell>{prod.nombre}</TableCell>

                    <TableCell align="center">
                      {prod.cantidad}
                    </TableCell>

                    <TableCell align="right">
                      ${prod.precio}
                    </TableCell>

                    <TableCell align="right">
                      ${subtotal}
                    </TableCell>

                  </TableRow>

                )

              })}

            </TableBody>

          </Table>

        </TableContainer>

        <Box mt={3} textAlign="right">

          <Typography variant="h6">

            Total del pedido: ${totalPedido}

          </Typography>

        </Box>

        <Divider sx={{ my:3 }}/>

        <Typography variant="h6" mb={1}>
          🚚 Tracking del envío
        </Typography>

        <Typography color="text.secondary">
          Estado actual: {pedido.estado}
        </Typography>

        <Box mt={4}>

          <Button
            variant="contained"
            onClick={()=>navigate("/pedidos")}
          >
            Volver a pedidos
          </Button>

        </Box>

      </Paper>

    </Box>

  );

};

export default PedidoDetalle;