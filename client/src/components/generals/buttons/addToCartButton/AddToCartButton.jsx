// src/components/common/AddToCartButton.jsx
import { Button } from "@mui/material";

const AddToCartButton = ({ onClick, sx }) => {
  return (
    <Button
      variant="contained"
      sx={sx}
      onClick={onClick}
    >
      AÑADIR AL CARRITO
    </Button>
  );
};

export default AddToCartButton;
