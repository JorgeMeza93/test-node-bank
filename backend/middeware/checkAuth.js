import jwt from "jsonwebtoken";
import { getConnection } from "../config/databaselow.js";

const checkAuth = async (req,res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await getConnection().data.users.find( usr => usr.id == decoded.id); 
            return next();
        } 
        catch (error) {
            console.log(error);
            return res.status(404).json({ msg: "Ha ocurrido un error con la solicitud" })
        }
    }
    if(!token){
        const error = new Error("Non-existent or invalid token");
        res.status(401).json({ msg: error.message })
    }
    next();
}

export default checkAuth;