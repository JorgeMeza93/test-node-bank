import jwt from "jsonwebtoken";

const generarJWT = (id, firstname, lastname, email) => {
    return jwt.sign({ id, firstname, lastname, email }, process.env.JWT_SECRET, {expiresIn: "1d"})
}

export default generarJWT