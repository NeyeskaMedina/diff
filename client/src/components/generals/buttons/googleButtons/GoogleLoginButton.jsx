import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { SwalExito, SwalError } from "../../../../assets/utils/Swal";
import { postGoogleLogin } from "../../../../assets/apiRestDiff/Post/postGoogleLogin";
import { useAuth } from "../../../../context/appContext/allContext/AuthContext";

const GoogleLoginButton = ({ onClose }) => {

  const { login } = useAuth();

  const handleSuccess = async (credentialResponse) => {

    try {

      const { response, error } = await postGoogleLogin(
        credentialResponse.credential
      );

      if (error) {
        console.error("❌ Error en postGoogleLogin:", error);
        SwalError("Error en el inicio de sesión con Google");
        return;
      }

      // 🔥 LOGIN GLOBAL (IGUAL QUE FORMULARIO)
      login({
        token: response.token,
        user: response.user
      });

      console.log("✅ Login Google:", response.user);

      SwalExito("Inicio de sesión con Google exitoso");
      onClose();

    } catch (err) {

      console.error(err);
      SwalError("Error al conectar con el servidor");

    }
  };

  const handleError = () => {
    console.log("❌ Login Google falló");
    SwalError("Error al iniciar sesión con Google");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default GoogleLoginButton;