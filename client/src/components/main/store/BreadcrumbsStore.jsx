import React from 'react';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function BreadcrumbsStore({ category }) {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      <Link
        underline="hover"
        color="inherit"
        href="/"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Inicio
      </Link>
      <Typography color="text.primary">{category}</Typography>
    </Breadcrumbs>
  );
}
