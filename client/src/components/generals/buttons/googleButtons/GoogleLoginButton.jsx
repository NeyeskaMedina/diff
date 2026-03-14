import React, { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { GoogleContext } from "../../../../context/appContext/allContext/GoogleContext";

const GoogleLoginButton = () => {

  const { setGoogleUser } = useContext(GoogleContext);

  const handleSuccess = (credentialResponse) => {

    const decoded = jwtDecode(credentialResponse.credential);

    const user = {
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
      id: decoded.sub
    };

    setGoogleUser(user);

    localStorage.setItem("googleUser", JSON.stringify(user));

    console.log("Usuario Google:", user);
  };

  const handleError = () => {
    console.log("Login failed");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default GoogleLoginButton;