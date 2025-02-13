import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

//Crear el contexto
export const AuthContext = createContext()


//Crear el proveedor de contexto (Es un componente)

export const AuthContextProvider = ({children}) =>{
//    //children es una prop para pasar el contenido hijo de nuestro componente

//     //Si hay token en el session o localstorage entonces esta authentificado

//     const navigate = useNavigate()

//     const [is_authenticated_state, setIsAuthenticatedState] = useState(Boolean(sessionStorage.getItem('access_token')))
//     useEffect(
//         () =>{
//             Boolean(sessionStorage.getItem('access_token')) && setIsAuthenticatedState(true)
//         },
//         []
//     )

//     const login = (auth_token) => {
//         sessionStorage.setItem('access_token', auth_token)
//         setIsAuthenticatedState(true)
//         navigate('/home')
//     }

//     const logout = () => {
//         sessionStorage.removeItem('access_token')
//         setIsAuthenticatedState(false)
//         navigate('/login')
//     }
//     return (
//         <AuthContext.Provider 
//             value={
//                 {
//                     is_authenticated_state,
//                     login,
//                     logout
//                 }
//             }
//         >
//             {children}
//         </AuthContext.Provider>
//     )
// }
// }
    let isAuthenticated = Boolean(sessionStorage.getItem('access_token'))
    const [isAuthenticatedState, setIsAuthenticatedState] = useState(isAuthenticated)
    // const login = (access_token) =>{
    //     sessionStorage.setItem('access_token', access_token)
    //     setIsAuthenticatedState(true)
    // }
    useEffect(() =>{
        const auth_token = sessionStorage.getItem('access_token')
        if(auth_token) {
            setIsAuthenticatedState(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{isAuthenticatedState}}>
            {children}
        </AuthContext.Provider>
    )
}

