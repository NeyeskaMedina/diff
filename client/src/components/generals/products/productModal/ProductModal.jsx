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
import ViewDetails from "../../buttons/viewDetails/viewDetails";
import AddToCartButton from "../../buttons/addToCartButton/AddToCartButton";

const ProductPreviewModal = ({ open, onClose, product }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth
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
        <Grid container sx={{ height: "100%" }}>
          {/* Lado izquierdo fijo */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              borderRight: { md: "1px solid #eee" },
              height: "100%",
              p: 2,
              position: "relative",
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
            <ViewDetails text="VER DETALLES" onClick={() => {}} fullWidth />
          </Grid>

          {/* Lado derecho scrollable */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "100%",
              overflowY: "auto", // scroll siempre en la derecha
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

            <Typography variant="body2">✅ {product.stock} disponibles</Typography>

            {/* Botones de acción */}
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <AddToCartButton product={product} />
              <Button variant="contained" color="primary">
                Comprar ahora
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProductPreviewModal;
