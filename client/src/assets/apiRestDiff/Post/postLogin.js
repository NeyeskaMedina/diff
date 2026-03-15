import axios from "axios";
const URL = import.meta.env.VITE_URL_BACK;

const postLogin = async ({ username, password }) => {
    console.log(username, password);
    
    try {
        const response = await axios.post(
            `${URL}/login`,
            { username, password },
            {
                headers: { "Content-Type": "application/json" }
            }
        );
        return { response: response.data, error: null, loading: false }
    } catch (err) {
        console.error("❌ Error al ingresar", err.response?.data || err.message);
        return { response: [], error: "Credenciales incorrectas", loading: false };
    }
}

export { postLogin };
