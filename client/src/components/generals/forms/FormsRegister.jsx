import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { Box, TextField, Button, Typography } from "@mui/material"; 
import { useForm } from "../../../assets/hooks/forms/useForm.jsx"; 
import { formatInputs } from "../../../assets/helpers/forms/formatInputs.js"; 
import { validateRegister } from "../../../assets/utils/forms/validateRegisters.js"; 
import { SwalError, SwalExito, SwalRegistrado } from "../../../assets/utils/Swal.jsx";
import { postRegister } from "../../../assets/apiRestDiff/Post/postRegister";
import { useAuth } from "../../../context/appContext/allContext/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const FormsRegister = () => { 
  const { login } = useAuth();
  const { navigate } = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  //Hook de manejo de mi formulario
  const { 
    form, 
    errors, 
    touched, 
    handleChange, 
    handleBlur, 
    isValid 
  } = useForm({ 
        initialValues: { username: "", email: "", password: "" }, 
        validate: validateRegister, 
        format: formatInputs 
  }); 


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!isValid) {
    SwalError("Debes completar correctamente el formulario");
    return;
  }

  try {

    const { response, error } = await postRegister({
      username: form.username,
      useremail: form.email,
      password: form.password
    });

    // ❌ Usuario ya existe
    if (error?.status === 409) {
      SwalError("El usuario ya existe");
      return;
    }

    // ✅ Registro exitoso
    if (response?.success || response?.token) {

      const result = await SwalRegistrado({
        title: "¡Registro exitoso!",
        text: "¿Deseas iniciar sesión?",
        icon: "success",
        confirmText: "Sí",
        cancelText: "No"
      });

      if (result.isConfirmed && response?.token) {
        login({
          token: response.token,
          user: response.user
        });

        SwalExito("Inicio de sesión exitoso");
        navigate("/"); // Redirige a la página principal después del login
      }
      if (!result.isConfirmed && response?.token) {
          navigate("/"); // Redirige al home
      }

    }

  } catch (err) {
    SwalError("Error al conectar con el servidor");
  }
};
return ( 
<Box 
  component="form" 
  onSubmit={handleSubmit} 
  sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, mt: 2 }}
> 
  <TextField 
      label="Nombre" 
      name="username" 
      value={form.username} 
      onChange={handleChange} 
      onBlur={handleBlur} 
      error={touched.username && Boolean(errors.username)} 
      helperText={touched.username && errors.username} 
      fullWidth 
  /> 
  <TextField 
      label="Correo" 
      name="email" 
      value={form.email} 
      onChange={handleChange} 
      onBlur={handleBlur} 
      error={touched.email && Boolean(errors.email)} 
      helperText={touched.email && errors.email} 
      fullWidth 
  /> 
  <TextField 
      label="Contraseña" 
      name="password" 
      type={showPassword ? "text" : "password"}  
      value={form.password} 
      onChange={handleChange} 
      onBlur={handleBlur} 
      error={touched.password && Boolean(errors.password)} 
      helperText={touched.password && errors.password} 
      fullWidth 
      InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
      }}
  /> 
  <Button 
      type="submit" 
      variant="contained"
      disabled={!isValid} 
      fullWidth 
      sx={{
          background: "var(--ingresar-btx)",
          borderRadius: "40px",
          px: 5,
          py: 1.5,
          fontWeight: "bold",
          fontSize: "16px",
          color: "white",
          boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
          "&:hover": {
            background: "var(--productModal-icon-color)",
          },
      }}
  > 
      REGISTRARSE 
  </Button> 
  <Typography mt={2}> ¿Ya tienes cuenta?, inicia sesión. </Typography> 
</Box> 
)}; 
export default FormsRegister;