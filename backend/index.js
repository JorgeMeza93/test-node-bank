import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import usuarioRouter from "./route/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

dotenv.config();
connectDB();

app.use("/api/users", usuarioRouter)

app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
})