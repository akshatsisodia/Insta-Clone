import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login,register,getMe } from "../services/auth.api";

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    const {user, loading, setUser, setLoading} = context;

    async function handleLogin(username, password){

        setLoading(true);

        const response = await login(username,password);

        setUser(response.data);

        setLoading(false);

    }

    async function handleRegister(username, email, password){

        setLoading(true);

        const response = await register(username, email, password);

        setUser(response.data);

        setLoading(false);
    }

    return{
        user, loading, handleLogin ,handleRegister
    }
}