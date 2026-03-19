import express from "express";

import { verifyActivity } from "../../../middleware/reports.js"
import { postGoogle } from "../../../src/api/v1/controllers/login/postGoogle.js";
import { authGoogle } from "../../../middleware/authGoogle.js";

const router = express.Router();
router.post("/", verifyActivity, authGoogle, postGoogle);

export default router;