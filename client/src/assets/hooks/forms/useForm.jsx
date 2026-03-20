import { useState } from "react";

export const useForm = ({
  initialValues,
  validate,
  format
}) => {

  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // -------------------------
  // HANDLE CHANGE
  // -------------------------
  const handleChange = ({ target }) => {
    const { name, value } = target;

    // 🔥 FORMATEO (uppercase, lowercase, etc)
    const newValue = format ? format(name, value) : value;

    setForm((prev) => ({
      ...prev,
      [name]: newValue
    }));

    // VALIDACIÓN EN TIEMPO REAL
    if (validate) {
      const error = validate(name, newValue);

      setErrors((prev) => ({
        ...prev,
        [name]: error
      }));
    }
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

    if (validate) {
      const error = validate(name, value);

      setErrors((prev) => ({
        ...prev,
        [name]: error
      }));
    }
  };

  // -------------------------
  // RESET FORM
  // -------------------------
  const resetForm = () => {
    setForm(initialValues);
    setErrors({});
    setTouched({});
  };

  // -------------------------
  // VALIDACIÓN GLOBAL
  // -------------------------
  const isValid = Object.values(errors).every((e) => !e) &&
                  Object.values(form).every((v) => v !== "");

  return {
    form,
    errors,
    touched,
    handleChange,
    handleBlur,
    resetForm,
    isValid
  };
};