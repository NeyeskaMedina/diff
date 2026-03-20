import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CrearCuentaBtx = ({ onClick, onClose, sx, disabled, fullWidth, variant }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Cierra el modal
    if (onClose) onClose();

    // Navega a registro
    navigate("/ingresar");
  };
  return (
    <Button
      variant={variant}
      onClick={handleClick}
      sx={sx}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      Crear cuenta
    </Button>
  );
};

export default CrearCuentaBtx;