import React, { useState, useEffect } from 'react';
import {
  Box, Grid, Typography, Button, Pagination, Drawer, List, ListItem,
  ListItemButton, ListItemText, Card, CardMedia, CardContent,
  IconButton, useMediaQuery
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useParams, useNavigate } from "react-router-dom";
import BreadcrumbsStore from "../../components/main/store/BreadcrumbsStore";

const categories = [
  'Ropa',
  'Articulos de Higiene',
  'Seguridad',
  'Alimentación',
  'Descanso',
  'Juego',
  'Lactancia',
  'Accesorios de auto',
  'Desodorantes Spray'
];

const allProducts = [
  {
    id: 1,
    title: 'Desodorante Khamrah 200 ml',
    category: 'Ropa',
    price: 14990,
    discountPrice: 8990,
    image: 'https://link-a-tu-imagen/khamrah.jpg'
  },
  {
    id: 2,
    title: 'Desodorante Bade’e Al Oud Honor',
    category: 'Desodorantes Spray',
    price: 14990,
    discountPrice: 8990,
    image: 'https://link-a-tu-imagen/honor.jpg'
  },
  {
    id: 3,
    title: 'Desodorante Mayar 200 ml',
    category: 'Articulos de Higiene',
    price: 14990,
    discountPrice: 8990,
    image: 'https://link-a-tu-imagen/mayar.jpg'
  },
];

const ITEMS_PER_PAGE = 6;

// Función para crear un "slug" URL amigable
const slugify = (str) =>
  str.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export default function Tienda() {
  const { categoria } = useParams(); // 👈 leemos la categoría desde la URL
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const isMobile = useMediaQuery('(max-width:900px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  // si no hay categoría en la URL, usamos la primera
  const selectedCategory = categoria
    ? categories.find((cat) => slugify(cat) === categoria) || categories[0]
    : categories[0];

  const filteredProducts = allProducts.filter(
    (product) => product.category === selectedCategory
  );

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handleCategoryClick = (cat) => {
    navigate(`/tienda/${slugify(cat)}`);
    setPage(1);
    setDrawerOpen(false);
  };

  return (
    <Box display="flex" padding={2}>
      {/* Sidebar solo en desktop */}
      {!isMobile && (
        <Box width="250px" mr={2}>
          <Typography variant="h6">Categorías</Typography>
          <List>
            {categories.map((cat) => {
              const count = allProducts.filter((p) => p.category === cat).length;
              return (
                <ListItem key={cat} disablePadding>
                  <ListItemButton
                    selected={cat === selectedCategory}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    <ListItemText primary={`${cat} (${count})`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      )}

      {/* Contenido principal */}
      <Box flex={1}>
        {/* Migas de pan */}
        <BreadcrumbsStore category={selectedCategory} />

        {/* 📱 Botón de filtros en mobile */}
        {isMobile && (
          <Box display="flex" justifyContent="flex-end" mb={2}>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <FilterListIcon />
            </IconButton>
          </Box>
        )}

        {/* Productos */}
        <Grid container spacing={2}>
          {paginatedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="subtitle1">{product.title}</Typography>
                  <Typography color="textSecondary">
                    <del>${product.price.toLocaleString()}</del>{" "}
                    <strong>${product.discountPrice.toLocaleString()}</strong>
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 1, bgcolor: '#F7B801', color: 'black' }}
                  >
                    AÑADIR AL CARRITO
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box mt={4} display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
          />
        </Box>
      </Box>

      {/* 📱 Drawer de categorías en mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box width={250} role="presentation" p={2}>
          <Typography variant="h6" mb={2}>Categorías</Typography>
          <List>
            {categories.map((cat) => {
              const count = allProducts.filter((p) => p.category === cat).length;
              return (
                <ListItem key={cat} disablePadding>
                  <ListItemButton
                    selected={cat === selectedCategory}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    <ListItemText primary={`${cat} (${count})`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
