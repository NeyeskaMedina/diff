import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const authGoogle = async (req, res, next) => {

  try {

    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        message: "Token de Google requerido"
      });
    }

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    // lo pasas al controller
    req.googleUser = payload;

    next();

  } catch (error) {

    console.error("❌ Token Google inválido");

    return res.status(401).json({
      message: "Token de Google inválido"
    });

  }

};