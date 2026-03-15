import { Button } from "@mui/material";

const IngresarBtx = ({ onClick, sx, disabled, fullWidth }) => {
  return (
    <Button
      variant="contained"
      sx={sx}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      Ingresar
    </Button>
  );
};

export default IngresarBtx;