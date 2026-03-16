import { api } from "../axios";

const postLogin = async ({ useremail, password }) => {


  try {

    const { data } = await api.post("/login", {
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

export { postLogin };
