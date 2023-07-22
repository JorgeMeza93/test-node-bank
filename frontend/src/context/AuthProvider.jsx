import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);
    const navigate = useNavigate();
    const autenticarUsuario = async (req, res) => {
        const token = localStorage.getItem("data");
        if(!token){
            console.log("No hay token");
            setCargando(false)
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
            navigate("/user")
        } catch (error) {
            console.log("Fallo al llamar");
        }
        finally{
            setCargando(false)
        }
        
    }

    useEffect( () => {
        autenticarUsuario();
    }, [])

    return(
        <AuthContext.Provider value={{ auth, setAuth, cargando }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider }
export default AuthContext;