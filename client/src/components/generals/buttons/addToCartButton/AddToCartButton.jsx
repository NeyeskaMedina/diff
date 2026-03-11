import { Button } from "@mui/material";

const AddToCartButton = ({ onClick, sx, disabled, fullWidth }) => {
  return (
    <Button
      variant="contained"
      sx={sx}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      AÑADIR AL CARRITO
    </Button>
  );
};

export default AddToCartButton;