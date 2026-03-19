import express from "express";
// import registers from "./registers.js";
// import emails from "./emails.js";
import login from "./login.js";
import google from "./auth/google.js";
import register from "./register.js";

const router = express.Router();


// router.use("/confirmar-correo", emails);
router.use("/login", login);
router.use("/auth/google", google);
router.use("/register", register);
// router.use("/admin", admin);
// router.use("/pedidos", pedidos);
// router.use("/productos", productos);


export default router;