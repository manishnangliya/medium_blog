import { useContext, useEffect } from "react"
import { UserContext } from "../store/Context"
import { Navigate } from "react-router-dom";

export function Logout(){
    const userContext = useContext(UserContext);
    useEffect(()=>{
        localStorage.removeItem('token');
        userContext?.setIsLoggedIn(false);
    },[userContext?.isloggedIn])
    return <Navigate to='/signin'/>
}