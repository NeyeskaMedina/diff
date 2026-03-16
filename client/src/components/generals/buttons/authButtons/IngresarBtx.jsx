import { Button } from "@mui/material";

const IngresarBtx = ({ onClick, sx, disabled, fullWidth, type }) => {
  return (
    <Button
      type={type}
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