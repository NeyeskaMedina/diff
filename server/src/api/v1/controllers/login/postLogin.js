import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { selectUser } from "../../models/users/users.js";




export const postLogin = async (req, res) => {

  try {

    let { useremail, password } = req.body;

    if (!useremail || !password) {
      return res.status(400).json({
        message: "Usuario y contraseña son requeridos"
      });
    }

    // normalizar email
    useremail = useremail.trim().toLowerCase();

    // buscar usuario
    const user = await selectUser(useremail);

    if (!user) {
      return res.status(401).json({
        message: "No te encontramos, registrate!."
      });
    }
    
    
    // comparar password
    const isMatch = await bcrypt.compare(password, user.clave);
    console.log(isMatch);
    
    if (!isMatch) {
      return res.status(401).json({
        message: "Contraseña incorrecta"
      });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET no definido en variables de entorno");
    }

    // generar token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "1h"
      }
    );

    return res.status(200).json({
      message: "Login exitoso",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {

    console.error("❌ Error en postLogin:", error);

    return res.status(500).json({
      message: "Error interno en el servidor"
    });

  }
};