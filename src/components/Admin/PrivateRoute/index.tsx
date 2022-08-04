import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext"

export default function PrivateRoute() {
    const { isLogged } = useAuth();

    if (isLogged){
        return <Outlet/>
    }

    return <Navigate to="/admin"/>
}
