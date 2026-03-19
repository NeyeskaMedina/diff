import jwt from "jsonwebtoken";

import { selectUser } from "../../models/users/users.js";
import { 
        updateGoogleUser,
        createGoogleUser
 } from "../../models/users/googleUser.js";

export const postGoogle = async (req, res) => {

  try {

    const { sub, email, name, picture } = req.googleUser;

    if (!email) {
      return res.status(400).json({
        message: "Email no ha sido proporcionado por Google"
      });
    }

    // Buscar usuario
    let user = await selectUser(email);

    // Crear si no existe
    if (!user) {

      user = await createGoogleUser({
        name,
        email,
        sub,
        picture
      });

    } else {

      // Actualizar datos
      await updateGoogleUser({
        name,
        email,
        sub,
        picture
      });

    }

    // Generar JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      token,
      user
    });

  } catch (error) {

    console.error("❌ Error en postGoogle:", error);

    return res.status(500).json({
      message: "Error en autenticación con Google"
    });

  }

};