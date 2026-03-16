import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_URL_BACK,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 10000
});


/*
  INTERCEPTOR DE REQUEST
  agrega el token automáticamente a mi localstorage
*/

api.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);



/*
  INTERCEPTOR DE RESPONSE
  detecta token expirado para cerrar la sesion
*/

api.interceptors.response.use(

  (response) => response,

  (error) => {

    if (error.response?.status === 401) {

      console.warn("⚠️ Token expirado, cerrando sesión");

      localStorage.removeItem("token");

      // // redirigir al login
      // window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

