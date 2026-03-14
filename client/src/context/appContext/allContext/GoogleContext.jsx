import React, { createContext, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const googleID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const GoogleContext = createContext();

export const GoogleAuthProvider = ({ children }) => {

  const [googleUser, setGoogleUser] = useState(null);

  return (

    <GoogleOAuthProvider clientId={googleID}>
      
      <GoogleContext.Provider value={{ googleUser, setGoogleUser }}>
        {children}
      </GoogleContext.Provider>

    </GoogleOAuthProvider>

  );

};