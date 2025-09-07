import React from "react";
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Box } from "@mui/material";

const categories = [
  { id: 1, name: "Ropa", img: "/img/categorias/Ropa.jpg" },
  { id: 2, name: "Artículos de Higiene", img: "/img/categorias/Higiene.jpg" },
  { id: 3, name: "Seguridad", img: "/img/categorias/Ropa.jpg" },
  { id: 4, name: "Alimentación", img: "/img/categorias/Higiene.jpg" },
  { id: 5, name: "Descanso", img: "/img/categorias/Ropa.jpg" },
  { id: 6, name: "Juego", img: "/img/categorias/Higiene.jpg" },
  { id: 7, name: "Lactancia", img: "/img/categorias/Higiene.jpg" },
  { id: 8, name: "Accesorios de auto", img: "/img/categorias/Higiene.jpg" },
];

const CategoryCard = ({ category, onClick }) => {
  return (
    <Card sx={{ width: 350, overflow: "hidden", transition: "transform 0.3s", "&:hover": { transform: "scale(1.05)" }  }}>
      <CardActionArea onClick={() => onClick(category)}>
        <CardMedia
          component="img"
          height="460"
          image={category.img}
          alt={category.name}
          sx={{ 
              transition: "transform 0.3s", 
              "&:hover": { transform: "scale(1.1)" }
          }}
        />
        <CardContent
          sx={{
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "white",
            textAlign: "center",
            position: "absolute", 
            width: "100%",
            bottom: 0,
            left: 0, 
          }}
        >
          <Typography variant="h6">{category.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const CategoryGrid = () => {
  const handleClick = (category) => {
    alert(`Hiciste click en: ${category.name}`);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {categories.map((cat) => (
          <Grid item xs={12} sm={6} md={4} key={cat.id}>
            <CategoryCard category={cat} onClick={handleClick} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryGrid;
