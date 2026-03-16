// import { useEffect, useState } from "react";
// import { getLogin } from "../apiRestDiff/Get/getLogin";

// export const useLoginController = () => {

//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {

//     const axiosLogin = async () => {

//       try {

//         const { response, error } = await getLogin();

//         if (error) {
//           throw error;
//         }

//         if (response?.usuario) {

//           const formattedUser = {
//             id: response.usuario.id,
//             nombre: response.usuario.nombre,
//             email: response.usuario.email,
//             role: response.usuario.role || ""
//           };

//           setUser(formattedUser);

//         } else {

//           setUser(null);

//         }

//       } catch (err) {

//         console.error("Error al obtener usuario:", err);
//         setError(err);

//       } finally {

//         setLoading(false);

//       }

//     };

//     axiosLogin();

//   }, []);

//   return { user, loading, error };

// };

