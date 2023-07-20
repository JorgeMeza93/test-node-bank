import { useState, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const autenticarUsuario = async (req, res) => {
        const token = localStorage.getItem("data");
        if(!token){
            console.log("No hay token");
            return
        }
        else{
            console.log("Si hay token");
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const { data } = await axios.get("http://localhost:4000/api/users/profile", config);
            setAuth(data);
        } catch (error) {
            console.log("Fallo al llamar");
        }
    }

    useEffect( () => {
        autenticarUsuario();
    }, [])

    return(
        <AuthContext.Provider value={{ setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider }
export default AuthContext;