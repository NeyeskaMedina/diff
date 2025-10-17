// src/components/common/AddToCartButton.jsx
import { Button } from "@mui/material";

const AddToCartButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{
        color: "#000",
        fontWeight: "bold",
        backgroundColor: "transparent",
        textTransform: "none",
        border: "2px solid var(--product-btn-addToCart)",
        borderRadius: "20px",
        px: 3,
        "&:hover": {
          backgroundColor: "var(--product-btn-addToCart)",
          color: "#fff",
        },
      }}
      onClick={onClick}
    >
      AÑADIR AL CARRITO
    </Button>
  );
};

export default AddToCartButton;
