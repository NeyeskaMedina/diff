// src/components/Pedidos.jsx
import React, { useState } from "react";
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  TextField,
  Box,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Grid,
} from "@mui/material";

const pedidosMock = [
  { id: 1, nombre: "Pedido de Ropa", fecha: "2025-08-10", estado: "Pendiente", total: "$120.00" },
  { id: 2, nombre: "Pedido de Juguetes", fecha: "2025-08-15", estado: "Enviado", total: "$250.00" },
  { id: 3, nombre: "Pedido de Alimentos", fecha: "2025-08-20", estado: "Entregado", total: "$89.90" },
  { id: 4, nombre: "Pedido de Higiene", fecha: "2025-08-22", estado: "Pendiente", total: "$49.99" },
];

const Pedidos = () => {
  const [search, setSearch] = useState("");
  const [estadoFiltro, setEstadoFiltro] = useState("");

  // Filtrado por texto (nombre o fecha) y estado
  const pedidosFiltrados = pedidosMock.filter((pedido) => {
    const matchTexto =
      pedido.nombre.toLowerCase().includes(search.toLowerCase()) ||
      pedido.fecha.includes(search);
    const matchEstado = estadoFiltro ? pedido.estado === estadoFiltro : true;
    return matchTexto && matchEstado;
  });

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        📦 Tus pedidos recientes
      </Typography>

      {/* Controles de Filtro */}
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Buscar por nombre o fecha"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Filtrar por estado</InputLabel>
              <Select
                value={estadoFiltro}
                label="Filtrar por estado"
                onChange={(e) => setEstadoFiltro(e.target.value)}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="Pendiente">Pendiente</MenuItem>
                <MenuItem value="Enviado">Enviado</MenuItem>
                <MenuItem value="Entregado">Entregado</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* Tabla */}
      {pedidosFiltrados.length === 0 ? (
        <Typography variant="body1">No se encontraron pedidos.</Typography>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "grey.100" }}>
                <TableCell><b>ID</b></TableCell>
                <TableCell><b>Nombre</b></TableCell>
                <TableCell><b>Fecha</b></TableCell>
                <TableCell><b>Estado</b></TableCell>
                <TableCell><b>Total</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidosFiltrados.map((pedido) => (
                <TableRow key={pedido.id} hover>
                  <TableCell>{pedido.id}</TableCell>
                  <TableCell>{pedido.nombre}</TableCell>
                  <TableCell>{pedido.fecha}</TableCell>
                  <TableCell>
                    <Chip
                      label={pedido.estado}
                      color={
                        pedido.estado === "Pendiente"
                          ? "warning"
                          : pedido.estado === "Enviado"
                          ? "info"
                          : "success"
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{pedido.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default Pedidos;
