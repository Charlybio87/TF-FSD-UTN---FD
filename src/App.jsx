import React from "react"
import { Route, Routes } from "react-router-dom"
import { Cursos, Home } from "./Pages"
import Curses from "./Pages/Cursos/Curses"
import './index.css'
import './App.css'

import RegisterScreen from "./Screen/RegisterScreen"
import { LoginScreen } from "./Screen/LoginScreen"
import ResetPasswordScreen from "./Screen/ResetPasswordScreen"
import ForgotPasswordScreen from "./Screen/ForgotPasswordScreen"
import ErrorScreen from "./Screen/ErrorScreen"
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute"


const App = () => {
  return (
    <div>
      {/* <Home/>
      <Cursos/> */}
      <Routes>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/error' element={<ErrorScreen/>}/>
        <Route path='/reset-password' element={<ResetPasswordScreen/>} />
        <Route path='/forgot-password' element={<ForgotPasswordScreen/>}/>
        
        <Route element={<ProtectedRoute/>}> 
          <Route path='/' element={<Home/>}/>
          <Route path='/cursos' element={<Cursos/>}/>
          <Route path='/cursos/producto/:curse_nombre' element={<Curses/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
