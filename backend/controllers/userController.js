import { getConnection } from "../config/databaselow.js";
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
    const {firstname, lastname, email, password, age, country} = req.body;
    let hashedPassword;
    try {
        const existeUsuario = await getConnection().data.users.find( usr => usr.email == email); 
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt);
        if(!existeUsuario){
            const user = {
                id:  new Date().getTime(),
                firstname: firstname,
                lastname: lastname, 
                email: email,
                password: hashedPassword,
                age: age,
                country: country
            }
            const db = await getConnection();
            db.data.users.push(user);
            await db.write();
            res.json(user)
        }
        else{
            const error = new Error("User already registered");
            return res.status(400).json({ msg: error.message });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message })
    }
}

export { signUp }
