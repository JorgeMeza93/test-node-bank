import { getConnection } from "../config/databaselow.js";
import bcrypt from "bcrypt";
import generarJWT from "../helpers/generarJWT.js";

const signUp = async (req, res) => {
    const {firstname, lastname, email, password, accountNumber, age, country} = req.body;
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
                accountNumber: accountNumber,
                age: age,
                country: country,
                balance: 0.0
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


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existeUsuario = await getConnection().data.users.find( usr => usr.email == email); 
        if(!existeUsuario){
            const error = new Error("The user doesn't exist, please checkout");
            return res.status(404).json({ msg: error.message });
        }
        else{
            console.log(existeUsuario);
            const unHashedPassword = await bcrypt.compare(password, existeUsuario.password)
            if(await unHashedPassword){
                console.log("contraseña es correcta");
                res.json({
                    id: existeUsuario.id,
                    firstname: existeUsuario.firstname,
                    lastname: existeUsuario.lastname,
                    email: existeUsuario.email,
                    accountNumber: existeUsuario.accountNumber,
                    token: generarJWT(existeUsuario.id, existeUsuario.firstname, existeUsuario.lastname, existeUsuario.email)
                })
            }
            else{
                console.log("contraseña no es correcta");
                const error = new Error("Wrong password, please checkout");
                return res.status(403).json({ msg: error.message });
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message })
    }
}

const profile = async (req, res) => {
    console.log("Desde el perfil del usuario");
    console.log(req.user);
}

export { signUp, login, profile }
