import { api } from "../axios";

const postGoogleLogin = async (googleToken) => {

  try {

    const { data } = await api.post("/auth/google", {
      token: googleToken
    });

    return {
      response: data,
      error: null
    };

  } catch (err) {

    console.error("❌ Error al ingresar por Google:", err.response?.data || err.message);

    return {
      response: null,
      error: err.response?.data?.message || "Error al iniciar sesión con Google"
    };

  }

};

export { postGoogleLogin };