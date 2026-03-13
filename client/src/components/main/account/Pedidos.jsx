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
  Card,
  CardContent,
  CardActions,
  Button,
  useMediaQuery,
  Pagination,
  Collapse,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import VisibilityIcon from "@mui/icons-material/Visibility";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import { useNavigate } from "react-router-dom";

const pedidosMock = [
  {
    id: 1,
    nombre: "Pedido de Ropa",
    fecha: "2025-08-10",
    estado: "Pendiente",
    total: "$120.00",
    productos: ["Polera", "Pantalón", "Chaqueta"]
  },
  {
    id: 2,
    nombre: "Pedido de Juguetes",
    fecha: "2025-08-15",
    estado: "Enviado",
    total: "$250.00",
    productos: ["Auto RC", "Muñeca", "Puzzle"]
  },
  {
    id: 3,
    nombre: "Pedido de Alimentos",
    fecha: "2025-08-20",
    estado: "Entregado",
    total: "$89.90",
    productos: ["Chocolate", "Galletas"]
  },
  {
    id: 4,
    nombre: "Pedido de Higiene",
    fecha: "2025-08-22",
    estado: "Pendiente",
    total: "$49.99",
    productos: ["Shampoo", "Jabón"]
  }
];

const Pedidos = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [estadoFiltro, setEstadoFiltro] = useState("");
  const [page, setPage] = useState(1);
  const [openPedido, setOpenPedido] = useState(null);

  const isDesktop = useMediaQuery("(min-width:1200px)");

  const rowsPerPage = 4;

  const pedidosFiltrados = pedidosMock.filter((pedido) => {

    const matchTexto =
      pedido.nombre.toLowerCase().includes(search.toLowerCase()) ||
      pedido.fecha.includes(search);

    const matchEstado =
      estadoFiltro ? pedido.estado === estadoFiltro : true;

    return matchTexto && matchEstado;

  });

  const totalPages = Math.ceil(pedidosFiltrados.length / rowsPerPage);

  const startIndex = (page - 1) * rowsPerPage;

  const pedidosPaginados =
    pedidosFiltrados.slice(startIndex, startIndex + rowsPerPage);

  const estadoColor = (estado) => {
    if (estado === "Pendiente") return "warning";
    if (estado === "Enviado") return "info";
    return "success";
  };

  const trackingText = (estado) => {

    if (estado === "Pendiente") return "Preparando pedido";
    if (estado === "Enviado") return "En camino 🚚";
    return "Entregado 📦";

  };

  return (

    <Paper elevation={2} sx={{ p: 3 }}>

      <Typography variant="h5" gutterBottom>
        📦 Tus pedidos recientes
      </Typography>

      {/* FILTROS */}

      <Box mb={3}>

        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>

            <TextField
              fullWidth
              label="Buscar por nombre o fecha"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />

          </Grid>

          <Grid item xs={12} md={6}>

            <FormControl fullWidth>

              <InputLabel>Filtrar por estado</InputLabel>

              <Select
                value={estadoFiltro}
                label="Filtrar por estado"
                onChange={(e)=>setEstadoFiltro(e.target.value)}
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

      {/* 📱 CARDS MOBILE Y TABLET */}

      {!isDesktop && pedidosPaginados.map((pedido)=> (

        <Card key={pedido.id} sx={{ mb:2, borderRadius:3 }}>

          <CardContent>

            <Box display="flex" justifyContent="space-between">

              <Typography fontWeight={600}>
                Pedido #{pedido.id}
              </Typography>

              <Chip
                label={pedido.estado}
                color={estadoColor(pedido.estado)}
                size="small"
              />

            </Box>

            <Typography color="text.secondary">
              {pedido.nombre}
            </Typography>

            <Typography>
              📅 {pedido.fecha}
            </Typography>

            <Typography mt={1} fontWeight={600}>
              Total: {pedido.total}
            </Typography>

            <Typography mt={1} color="text.secondary">
              🚚 {trackingText(pedido.estado)}
            </Typography>

          </CardContent>

          <CardActions>

            <Button
              size="small"
              onClick={()=>setOpenPedido(
                openPedido === pedido.id ? null : pedido.id
              )}
            >
              👁 Ver pedido
            </Button>

            <Button size="small">
              ⭐ Volver a comprar
            </Button>

          </CardActions>

          <Collapse in={openPedido === pedido.id}>

            <Box p={2}>

              <Typography fontWeight={600}>
                📦 Productos
              </Typography>

              <List dense>

                {pedido.productos.map((prod,i)=>(
                  <ListItem key={i}>
                    <ListItemText primary={prod}/>
                  </ListItem>
                ))}

              </List>

            </Box>

          </Collapse>

        </Card>

      ))}

      {/* 🖥 TABLA DESKTOP */}

      {isDesktop && (

        <TableContainer>

          <Table>

            <TableHead>

              <TableRow>

                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Total</TableCell>
                <TableCell align="center">Acciones</TableCell>

              </TableRow>

            </TableHead>

            <TableBody>

              {pedidosPaginados.map((pedido)=> (

                <TableRow key={pedido.id} hover>

                  <TableCell>{pedido.id}</TableCell>
                  <TableCell>{pedido.nombre}</TableCell>
                  <TableCell>{pedido.fecha}</TableCell>

                  <TableCell>

                    <Chip
                      label={pedido.estado}
                      color={estadoColor(pedido.estado)}
                      size="small"
                    />

                  </TableCell>

                  <TableCell>{pedido.total}</TableCell>

                  <TableCell align="center">

                    <Box display="flex" justifyContent="center" gap={1}>

                      <Tooltip title="Ver pedido">

                        <IconButton
                          color="primary"
                          onClick={() => navigate(`/pedidos/${pedido.id}`)}
                        >
                          <VisibilityIcon/>
                        </IconButton>

                      </Tooltip>

                      <Tooltip title="Ver productos">

                        <IconButton color="secondary">
                          <Inventory2Icon/>
                        </IconButton>

                      </Tooltip>

                      <Tooltip title="Tracking del envío">

                        <IconButton color="info">
                          <LocalShippingIcon/>
                        </IconButton>

                      </Tooltip>

                      <Tooltip title="Volver a comprar">

                        <IconButton color="success">
                          <ReplayIcon/>
                        </IconButton>

                      </Tooltip>

                    </Box>

                  </TableCell>

                </TableRow>

              ))}

            </TableBody>

          </Table>

        </TableContainer>

      )}

      {/* PAGINACION */}

      <Box display="flex" justifyContent="center" mt={3}>

        <Pagination
          count={totalPages}
          page={page}
          onChange={(e,val)=>setPage(val)}
          color="primary"
        />

      </Box>

    </Paper>

  );

};

export default Pedidos;