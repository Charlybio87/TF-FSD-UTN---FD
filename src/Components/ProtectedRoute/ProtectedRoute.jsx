import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext"


//Limita si esta o no authenticado el usuario y nos envia a una ruta deseada
const ProtectedRoute = () => {
  const {isAuthenticatedState} = useContext(AuthContext)
  return isAuthenticatedState ? <Outlet/> : <Navigate to={"/login"}/>
}

export default ProtectedRoute

//Similar al next() en un middleware el outlet
