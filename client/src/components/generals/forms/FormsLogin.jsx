import React, { useState, useContext } from "react";
import {
  Box,
  TextField,
  Typography,
  IconButton,
  InputAdornment
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import IngresarBtx from "../buttons/authButtons/IngresarBtx.jsx";

import {
  SwalExito,
  SwalError
} from "../../../assets/utils/Swal.jsx";

import { UserContext } from "../../../context/appContext/allContext/UserContext";

import { postLogin } from "../../../assets/apiRestDiff/Post/postLogin";

import {
  validateEmail,
  validatePassword
} from "../../../assets/utils/validations";

const FormsLogin = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false
  });

  const [showPassword, setShowPassword] = useState(false);

  const { setUserLogin } = useContext(UserContext);

  const navigate = useNavigate();

  // -------------------------
  // VALIDACIONES
  // -------------------------

  const validateField = (name, value) => {

    let message = "";

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
        message = "La contraseña debe tener mínimo 6 caracteres";
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
  // VALIDAR FORM COMPLETO
  // -------------------------

  const isFormValid =
    form.email &&
    form.password &&
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
        useremail: form.email.trim(),
        password: form.password.trim()
      };

      const { response, error } = await postLogin(cleanData);

      if (response?.token) {

        setUserLogin({
          useremail: response.email
        });

        localStorage.setItem("token", response.token);

        SwalExito("Inicio de sesión exitoso");

        navigate("/mi-cuenta");

      } else {

        SwalError(error || "Credenciales incorrectas");
        navigate("/");

      }

    } catch (err) {

      console.error(err);

      SwalError("Error al conectar con el servidor");

    }

  };

  return (

    <Box mt={3} component="form" onSubmit={handleSubmit}>

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

      <IngresarBtx
        type="submit"
        fullWidth
        disabled={!isFormValid}
        sx={{
          mt: 2,
          py: 1.2,
          borderRadius: "8px",
          backgroundColor: "custom.ingresarBtx"
        }}
      />

      {/* RECUPERAR PASSWORD */}

      <Typography
        variant="body2"
        textAlign="center"
        mt={2}
        sx={{ cursor: "pointer", color: "primary.main" }}
      >
        ¿Olvidaste tu contraseña?
      </Typography>

    </Box>

  );

};

export default FormsLogin;