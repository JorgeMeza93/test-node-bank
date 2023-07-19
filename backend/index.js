import express from "express";
import connectDB from "./config/dbMongo.js";
import dotenv from "dotenv";
import usuarioRouter from "./route/userRoutes.js";
import { createConnection} from "./config/databaselow.js";
import cors from "cors";

const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;

dotenv.config();
//connectDB();
createConnection();
//Configuracion CORS
const whiteList = ["http://localhost:5173"];
const corsOption = {
    origin: function(origin, callback){
        if(whiteList.includes(origin)){
            callback(null, true)
        }
        else{
            callback(new Error("Error de Cors"))
        }
    }
}
app.use(cors(corsOption));

app.use("/api/users", usuarioRouter)

app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
})