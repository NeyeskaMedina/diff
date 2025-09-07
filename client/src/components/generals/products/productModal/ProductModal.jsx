import React from "react";
import {
  Dialog,
  DialogContent,
  Grid,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import AddToCartButton from "../../buttons/addToCartButton/AddToCartButton";

const ProductModal = ({ open, onClose, product }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={false}
      BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.2)" } }}
      PaperProps={{
        style: {
          borderRadius: 0,
          width: "90%",
          maxWidth: 900,
          height: "90vh",
          maxHeight: 900,
        },
      }}
    >
      <DialogContent sx={{ height: "100%", p: 0 }}>
        {/* Desktop Layout */}
        {!isMobile ? (
          <Grid container sx={{ height: "100%", display: "flex", flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-around' }}>
            {/* IZQUIERDA (fijo) */}
            <Grid
              item
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                borderRight: "1px solid #eee",
                height: "100%",
                p: 2,
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100%",
                    maxWidth: 400,
                    maxHeight: 400,
                    borderRadius: 12,
                    objectFit: "contain",
                  }}
                />
              </Box>
              <AddToCartButton product={product} fullWidth />
            </Grid>

            {/* DERECHA (scroleable) */}
            <Grid
              item
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: '450px',
                gap: 2,
                height: "100%",
                overflowY: "auto",
                p: 2,
              }}
            >
              <Typography variant="h5" fontWeight="700">
                {product.title}
              </Typography>

              <Box display="flex" alignItems="center" gap={2}>
                {product.oldPrice && (
                  <Typography
                    variant="body1"
                    sx={{ textDecoration: "line-through", opacity: 0.6 }}
                  >
                    {product.oldPrice}
                  </Typography>
                )}
                <Typography variant="h5" color="error" fontWeight={800}>
                  {product.price}
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>

              <Typography variant="body2">
                ✅ {product.stock} disponibles
              </Typography>

              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Button variant="contained" color="primary" fullWidth>
                  Comprar ahora
                </Button>
              </Box>
            </Grid>
          </Grid>
        ) : (
          // Mobile Layout
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "100%",
              overflowY: "auto",
              p: 2,
            }}
          >
            <Typography variant="h6" fontWeight="700">
              {product.title}
            </Typography>

            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                maxWidth: 350,
                maxHeight: 350,
                margin: "0 auto",
                borderRadius: 12,
                objectFit: "contain",
              }}
            />

            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>

            <Typography variant="body2">
              ✅ {product.stock} disponibles
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mt: "auto" }}>
              <AddToCartButton product={product} fullWidth />
              <Button variant="contained" color="primary" fullWidth>
                Comprar ahora
              </Button>
            </Box>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
