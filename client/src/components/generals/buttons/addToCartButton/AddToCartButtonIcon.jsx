import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const AddToCartButtonIcon = ({ onClick, sx, disabled, fullWidth }) => {
  return (
    <Button
      variant="contained"
      sx={sx}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      <AddShoppingCartIcon />
    </Button>
  );
};

export default AddToCartButtonIcon;