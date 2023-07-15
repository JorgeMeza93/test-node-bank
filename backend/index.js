import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 4000;

dotenv.config();
connectDB();


app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
})