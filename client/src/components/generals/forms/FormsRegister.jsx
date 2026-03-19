import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Button
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import {
  validateEmail,
  validatePassword
} from "../../../assets/utils/validations";

import {
  SwalError,
  SwalExito,
  SwalRegistrado,
  SwalInformation,
} from "../../../assets/utils/Swal";

import { postRegister } from "../../../assets/apiRestDiff/Post/postRegister";
import { useAuth } from "../../../context/appContext/allContext/AuthContext.jsx";

const FormsRegister = () => {

  const { login } = useAuth();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false
  });

  const [showPassword, setShowPassword] = useState(false);

  // -------------------------
  // VALIDACIONES
  // -------------------------
  const validateField = (name, value) => {

    let message = "";

    if (name === "username") {
      if (!value.trim()) {
        message = "El nombre de usuario es obligatorio";
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        message = "El correo es obligatorio";
      } else if (!validateEmail(value)) {
        message = "Correo electrónico inválido";
      }
    }

    if (name === "password") {
      if (!value.trim()) {
        message = "La contraseña es obligatoria";
      } else if (!validatePassword(value)) {
        message = "Debe tener mínimo 6 caracteres";
      }
    }

    return message;
  };

  // -------------------------
  // HANDLE CHANGE
  // -------------------------
  const handleChange = ({ target }) => {

    const { name, value } = target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    const errorMessage = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: errorMessage
    }));
  };

  // -------------------------
  // HANDLE BLUR
  // -------------------------
  const handleBlur = ({ target }) => {

    const { name, value } = target;

    setTouched((prev) => ({
      ...prev,
      [name]: true
    }));

    const errorMessage = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: errorMessage
    }));
  };

  // -------------------------
  // VALIDAR FORM
  // -------------------------
  const isFormValid =
    form.username &&
    form.email &&
    form.password &&
    !errors.username &&
    !errors.email &&
    !errors.password;

  // -------------------------
  // SUBMIT
  // -------------------------
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!isFormValid) {
      SwalError("Debes corregir los errores del formulario");
      return;
    }

    try {

      const cleanData = {
        username: form.username.trim(),
        useremail: form.email.trim(),
        password: form.password.trim()
      };

      const { response, error } = await postRegister(cleanData);

      // USUARIO YA EXISTE
      if (error?.status === 409 || error?.message?.includes("exist")) {
        
        SwalInformation(
          "Parece que ya tienes una cuenta con este correo. ¡Debes iniciar sesion con tu cuenta!"
        );
        
        return;
      }

      // REGISTRO EXITOSO
      if (response?.success || response?.token) {

        const result = await SwalRegistrado({
          title: "¡Registro exitoso!",
          text: "¿Deseas iniciar sesión ahora?",
          icon: "success",
          confirmText: "Sí, iniciar sesión",
          cancelText: "Más tarde"
        });

        if (result.isConfirmed) {

          // LOGIN AUTOMÁTICO SI HAY TOKEN
          if (response?.token) {

            login({
              token: response.token,
              user: response.user || { email: form.email }
            });

            SwalExito("Inicio de sesión exitoso");
          }
        }

        return;
      }

      // ERROR 
      SwalError(error || "Error al registrarte");

    } catch (err) {

      console.error(err);
      SwalError("Error al conectar con el servidor");

    }
  };

  return (

    <Box mt={3} component="form" onSubmit={handleSubmit}>

      {/* USERNAME */}
      <TextField
        label="Nombre de usuario"
        name="username"
        fullWidth
        margin="normal"
        size="small"
        value={form.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.username && Boolean(errors.username)}
        helperText={touched.username && errors.username}
      />

      {/* EMAIL */}
      <TextField
        label="Correo electrónico"
        name="email"
        type="email"
        fullWidth
        margin="normal"
        size="small"
        value={form.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />

      {/* PASSWORD */}
      <TextField
        label="Contraseña"
        name="password"
        type={showPassword ? "text" : "password"}
        fullWidth
        margin="normal"
        size="small"
        value={form.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
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

      {/* BOTÓN */}
      <Button
        type="submit"
        variant="outlined"
        fullWidth
        disabled={!isFormValid}
        sx={{
          mt: 2,
          py: 1.2,
          borderRadius: "10px",
          borderColor: "var(--ingresar-btx)",
          color: "var(--ingresar-btx)",
          fontWeight: "bold",
          "&:hover": {
            borderColor: "var(--productModal-icon-color)",
            color: "var(--productModal-icon-color)",
            backgroundColor: "rgba(120,84,143,0.05)"
          }
        }}
      >
        REGISTRARSE
      </Button>

      {/* TEXTO LOGIN */}
      <Typography
        variant="body2"
        textAlign="center"
        mt={2}
        sx={{ color: "text.secondary" }}
      >
        ¿Ya tienes cuenta? Inicia sesión
      </Typography>

    </Box>
  );
};

export default FormsRegister;