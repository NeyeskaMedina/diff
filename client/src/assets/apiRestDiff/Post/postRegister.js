import { api } from "../axios";

const postRegister = async ({ username, useremail, password }) => {


  try {

    const { data } = await api.post("/register", {
      username,
      useremail,
      password
    });

    return {
      response: data,
      error: null
    };

  } catch (err) {

    console.error("❌ Error al ingresar:", err.response?.data || err.message);

    return {
      response: null,
      error: err.response?.data?.message || "Credenciales incorrectas"
    };

  }
};

export { postRegister };
