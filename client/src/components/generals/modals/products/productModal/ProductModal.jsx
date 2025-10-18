// src/components/modals/ProductModal.jsx (ajusta la ruta real)
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@mui/material";
import UseIsMovil from "../../../../../assets/hooks/UseIsMovil.jsx"; 
import ProductModalEscritorio from "./ProductModalEscritorio";
import ProductModalMovil from "./ProductModalMovil";

const ProductModal = ({ open, onClose, product }) => {
  const isMobile = UseIsMovil(960);
  const [renderMobile, setRenderMobile] = useState(isMobile);

  // Este useEffect asegura que cada vez que isMobile cambie, actualizamos renderMobile
  useEffect(() => {
    setRenderMobile(isMobile);
  }, [isMobile]);

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
        {renderMobile ? (
          <ProductModalMovil product={product} />
        ) : (
          <ProductModalEscritorio product={product} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
