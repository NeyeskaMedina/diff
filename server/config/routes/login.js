import express from "express";

import { verifyActivity } from "../../middleware/reports.js"
import { postLogin } from "../../src/api/v1/controllers/login/postLogin.js";


const router = express.Router();
router.post("/", verifyActivity, postLogin);

export default router;