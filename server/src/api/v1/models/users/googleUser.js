import { pool } from "../../../../../config/db/connectionDB.js";

const createGoogleUser = async ({ name, email, sub, picture }) => {

  try {

    const query = `
      INSERT INTO usuarios (nombre, email, google_id, foto, role)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id_, nombre, email, foto, role
    `;

    const { rows } = await pool.query(query, [name, email, sub, picture, "Cliente"]);

    return rows[0];

  } catch (error) {

    console.error("❌ Error en createGoogleUser:", error);
    throw error;

  }

};
const updateGoogleUser = async ({ name, email, sub, picture }) => {

  try {

    const query = `
      UPDATE usuarios
      SET nombre = $1, foto = $2, google_id = $3
      WHERE email = $4
    `;

    await pool.query(query, [name, picture, sub, email]);

  } catch (error) {

    console.error("❌ Error en updateGoogleUser:", error);
    throw error;

  }

};

export { 
    createGoogleUser, 
    updateGoogleUser 
};