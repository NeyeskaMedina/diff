import express from "express";

import { verifyActivity } from "../../middleware/reports.js"
import { postLogin } from "../../src/api/v1/controllers/login/postLogin.js";
// import { postGoogle } from "../../src/api/v1/controllers/login/postlogin/postGoogle.js";

const router = express.Router();

router.post("/", verifyActivity, postLogin);
// router.post("/", verifyActivity, postGoogle)

export default router;