import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { 
    selectUser, 
    insertUser } from "../../models/users/users.js"

export const postRegister = async (req, res) => {

  try {

    let { username, useremail, password } = req.body;

    // VALIDACIÓN
    if (!username || !useremail || !password) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios"
      });
    }

    useremail = useremail.trim().toLowerCase();
    const pass = password.trim();

    // Usuario ya existe
    const user = await selectUser(useremail);
    let isMatch = false;
    if (user) {
      isMatch = await bcrypt.compare(pass, user.clave);
      return res.status(409).json({
        message: "El usuario ya existe"
        });
    }

    //  hash password
    const hashedPassword = await bcrypt.hash(pass, 10);
    const newUser = await insertUser(username, useremail, hashedPassword);

    if (!newUser) {
        return res.status(500).json({
            message: "Error al crear el usuario"
        });
    }

    // console.log("Usuario registrado:", {
    //   username,
    //   useremail,
    //   password: hashedPassword
    // });

    // generar token
    const token = jwt.sign(
      {
        id: 1,
        email: useremail,
        name: username,
        role: newUser.role || "Cliente"
      },
      process.env.JWT_SECRET || "secreto",
      {
        expiresIn: "1h"
      }
    );

    // RESPUESTA EXITOSA
    return res.status(200).json({
      success: true,
      message: "Usuario registrado exitosamente",
      token,
      user: {
        id: 1,
        name: username,
        email: useremail,
        role: newUser.role || "Cliente"
      }
    });

  } catch (error) {

    console.error("❌ Error en postRegister:", error);

    return res.status(500).json({
      message: "Error interno en el servidor"
    });

  }
};