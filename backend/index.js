import express from "express";
import connectDB from "./config/dbMongo.js";
import dotenv from "dotenv";
import usuarioRouter from "./route/userRoutes.js";
import { createConnection} from "./config/databaselow.js";

const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;

dotenv.config();
//connectDB();
createConnection();

app.use("/api/users", usuarioRouter)

app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
})