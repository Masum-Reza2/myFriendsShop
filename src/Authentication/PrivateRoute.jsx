import { useContext } from "react"
import { AuthContext } from "../ContextProvider/AuthProvider"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if(loading){
        return <h1 className="font-bold text-2xl text-center">Loading...</h1>
    }
    
    if (user) {
        return children
    }
    else {
        return <Navigate to={'/login'}></Navigate>
    }
}

export default PrivateRoute