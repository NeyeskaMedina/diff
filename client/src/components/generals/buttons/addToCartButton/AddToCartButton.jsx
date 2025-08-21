// src/components/common/AddToCartButton.jsx
import { Button } from "@mui/material";

const AddToCartButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{
        mt: 1,
        backgroundColor: "#f7c600",
        color: "#000",
        fontWeight: "bold",
        textTransform: "none",
        borderRadius: "20px",
        px: 3,
        "&:hover": {
          backgroundColor: "#e6b800",
        },
      }}
      onClick={onClick}
    >
      AÑADIR AL CARRITO
    </Button>
  );
};

export default AddToCartButton;
