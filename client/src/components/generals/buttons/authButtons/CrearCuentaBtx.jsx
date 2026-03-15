import { Button } from "@mui/material";

const CrearCuentaBtx = ({ onClick, sx, disabled, fullWidth, variant }) => {
  return (
    <Button
      variant={variant}
      sx={sx}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      Crear cuenta
    </Button>
  );
};

export default CrearCuentaBtx;