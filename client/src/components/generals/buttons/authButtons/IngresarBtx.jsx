import { Button } from "@mui/material";

const IngresarBtx = ({ onClick, sx, disabled, fullWidth, type, name }) => {
  return (
    <Button
      type={type}
      variant="contained"
      sx={sx}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {name}
    </Button>
  );
};

export default IngresarBtx;