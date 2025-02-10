import express from "express";
import { fetchUserData, updateUserData } from "../controller/userController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/fetch-user-data", authMiddleware, fetchUserData);
router.put("/update-user-data", authMiddleware, updateUserData);

export default router;
