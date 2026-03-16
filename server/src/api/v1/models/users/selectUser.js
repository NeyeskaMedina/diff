import { pool } from "../../../../../config/db/connectionDB.js";

export const selectUser = async (useremail) => {

  try {

    const query = `
      SELECT 
        id_usuario,
        nombre,
        email,
        clave
      FROM usuarios
      WHERE email = $1
      LIMIT 1
    `;

    const { rows } = await pool.query(query, [useremail]);

    return rows[0] || null;

  } catch (error) {

    console.error("❌ Error en selectUser:", error);
    throw error;

  }

};

