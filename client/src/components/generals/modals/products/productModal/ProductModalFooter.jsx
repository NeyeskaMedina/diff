import React from "react";
import { Box, Divider, Typography, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";

const ProductModalFooter = ({ category }) => {
  return (
    <Box sx={{ mt: 4, width: "100%" }}>
      {/* Línea superior */}
      <Divider sx={{ mb: 2 }} />

      {/* Categoría */}
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        <strong>Categoría:</strong> {category}
      </Typography>

      {/* Línea inferior */}
      <Divider sx={{ mb: 2 }} />

      {/* Compartir */}
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1, alignItems: "center" }}>
      <Typography variant="body2" color="text.secondary">
        <strong>Ver Redes:</strong>
      </Typography>

      <Stack direction="row" spacing={1}>
        <IconButton sx={{ color: 'custom.iconModalColor', '&:hover': { backgroundColor: 'custom.iconModalColorBg' } }}>
          <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton sx={{ color: 'custom.iconModalColor', '&:hover': { backgroundColor: 'custom.iconModalColorBg' } }}>
          <TwitterIcon fontSize="small" />
        </IconButton>
        <IconButton sx={{ color: 'custom.iconModalColor', '&:hover': { backgroundColor: 'custom.iconModalColorBg' } }}>
          <PinterestIcon fontSize="small" />
        </IconButton>
        <IconButton sx={{ color: 'custom.iconModalColor', '&:hover': { backgroundColor: 'custom.iconModalColorBg' } }}>
          <LinkedInIcon fontSize="small" />
        </IconButton>
      </Stack>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1, alignItems: "center" }}>
      <Typography variant="body2" color="text.secondary">
        <strong>Copiar enlace</strong>
      </Typography>

      <Stack direction="row" spacing={1}>
        <IconButton sx={{ color: 'custom.iconModalColor', '&:hover': { backgroundColor: 'custom.iconModalColorBg' } }}>
          <LinkIcon fontSize="small" />
        </IconButton>
      </Stack>
      </Box>
    </Box>
  );
};

export default ProductModalFooter;
