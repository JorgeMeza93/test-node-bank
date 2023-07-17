import express from "express";
import { signUp } from "../controllers/userController.js"; 

const router = express.Router();

// Sign up and Login
router.post("/", signUp)

export default router;