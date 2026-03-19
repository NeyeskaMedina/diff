import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // Detectar sesión al cargar
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
        setUser(JSON.parse(userData));
    } else {
        setUser(null);
    }
}, []);

  // Ingresar y guardar el token en local storage
  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user); // info del usuario
  };

  // Cerrar sesion y eliminar token del local storage
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");      
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);