// src/components/common/AddToCartButton.jsx
import { Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const AddToCartButtonIcon = ({ onClick, sx }) => {
  return (
    <Button
      variant="contained"
      sx={sx}
      onClick={onClick}
    >
      <AddShoppingCartIcon />
    </Button>
  );
};

export default AddToCartButtonIcon;
