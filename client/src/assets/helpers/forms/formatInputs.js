export const formatInputs = (name, value) => {

  if (name === "username") {
    return value
      .trim()
      // .replace(/\s+/g, " ")
      .toLowerCase()
      .replace(/(^|\s)\p{L}/gu, (char) => char.toUpperCase()); // soporta acentos
  }

  if (name === "email") {
    return value.trim().toLowerCase();
  }

  return value;
};