import express from "express";

import { verifyActivity } from "../../middleware/reports.js"
import { postRegister } from "../../src/api/v1/controllers/register/postRegister.js";


const router = express.Router();
router.post("/", verifyActivity, postRegister);

export default router;