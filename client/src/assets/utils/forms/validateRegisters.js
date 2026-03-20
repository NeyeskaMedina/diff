import {
  validateEmail,
  validatePassword,
  validateName
} from "../validations";

export const validateRegister = (name, value) => {

  if (name === "username") {
    if (!value.trim()) return "El nombre es obligatorio";
    if (!validateName(value)) return "Nombre inválido";
  }

  if (name === "email") {
    if (!value.trim()) return "El correo es obligatorio";
    if (!validateEmail(value)) return "Correo inválido";
  }

  if (name === "password") {
    if (!value.trim()) return "Contraseña obligatoria";
    if (!validatePassword(value)) return "Mínimo 6 caracteres";
  }

  return "";
};