import axios from "axios";
const URL = import.meta.env.VITE_URL_BACK;

const getLogin = async () => {
    const token = localStorage.getItem('token'); 
    try {
        const response = await axios.get(`${URL}/login`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return { response: response.data, error: null, loading: true }
    } catch (err) {
        console.error("Error al obtener datos en BD", err);
        return { response: [], error: "Error al obtener datos en BD", loading: false };
    }
}

export { 
    getLogin 
};
