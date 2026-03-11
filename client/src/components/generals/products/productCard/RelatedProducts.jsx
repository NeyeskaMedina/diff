// src/components/relatedProducts/RelatedProducts.jsx
import React from "react";
import { Grid, Typography } from "@mui/material";
import ProductCard from "../productCard/ProductCard.jsx"; 

const RelatedProducts = ({ products, product }) => {
  const relatedList = [];

  // 1. Si el producto tiene IDs de relacionados, los buscamos
  if (product.related && product.related.length > 0) {
    product.related.forEach((id) => {
      const match = products.find((p) => p.id === id);
      if (match && match.id !== product.id) {
        relatedList.push(match);
      }
    });
  }

  // 2. Si faltan productos para completar 4 → llenamos con productos de la misma categoría
  if (relatedList.length < 4) {
    const fillCategoryMatches = products.filter(
      (p) => p.category === product.category && p.id !== product.id && !relatedList.includes(p)
    );
    relatedList.push(...fillCategoryMatches.slice(0, 4 - relatedList.length));
  }

  // 3. Si aún faltan → completamos con random (opcional)
  if (relatedList.length < 4) {
    const fallback = products.filter((p) => p.id !== product.id && !relatedList.includes(p));
    relatedList.push(...fallback.slice(0, 4 - relatedList.length));
  }

  if (relatedList.length === 0) return null;

  return (
    <>
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 6, mb: 3 }}>
        Productos relacionados
      </Typography>

      <Grid container spacing={2}>
        {relatedList.map((item) => (
          <Grid item xs={6} md={3} key={item.id}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RelatedProducts;
