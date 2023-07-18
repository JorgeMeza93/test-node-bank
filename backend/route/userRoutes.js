import express from "express";
import { signUp, login, profile } from "../controllers/userController.js"; 
import checkAuth from "../middeware/checkAuth.js";

const router = express.Router();

// Sign up and Login
router.post("/", signUp);
router.post("/login", login);

//
router.get("/profile", checkAuth, profile)


export default router;