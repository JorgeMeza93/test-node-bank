import express from "express";
import { signUp, login } from "../controllers/userController.js"; 

const router = express.Router();

// Sign up and Login
router.post("/", signUp);
router.post("/login", login)

export default router;