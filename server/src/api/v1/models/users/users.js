import { pool } from "../../../../../config/db/connectionDB.js";

const selectUser = async (useremail) => {

  try {

    const query = `
      SELECT 
        id_usuario,
        nombre,
        email,
        clave,
        google_id,
        foto,
        role,
        telefono

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

const insertUser = async (username, useremail, hashedPassword) => {
    try {
        const query = `
      INSERT INTO usuarios (nombre, email, clave, role)
      VALUES ($1, $2, $3, $4)
      RETURNING id_usuario, nombre, email, clave, role
    `;
        const { rows } = await pool.query(query, [username, useremail, hashedPassword, "Cliente"]);
        return rows[0] || null;
    } catch (error) {
        console.error("❌ Error en createUser:", error);
        throw error;
    }
};



export { 
    selectUser,
    insertUser
};