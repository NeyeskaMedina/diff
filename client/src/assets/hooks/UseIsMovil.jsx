// hooks/useIsMobile.js
import { useState, useEffect } from "react";

const UseIsMovil = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(
    // Si no hay window (SSR), inicializamos como false
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Llamada inicial para asegurar que el estado está correcto
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default UseIsMovil;
