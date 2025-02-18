import React from "react"
import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute"
import './index.css'
import './App.css'

import { Cursos, Home } from "./Pages"
import Curses from "./Pages/Cursos/Curses"
import RegisterScreen from "./Screen/RegisterScreen"
import { LoginScreen } from "./Screen/LoginScreen"
import ResetPasswordScreen from "./Screen/ResetPasswordScreen"
import ForgotPasswordScreen from "./Screen/ForgotPasswordScreen"
import ErrorScreen from "./Screen/ErrorScreen"
import CreateProductScreen from "./Screen/CreateProductScreen"
import ProductDetailScreen from "./Screen/ProductDetailScreen"
import HomeScreen from "./Screen/HomeScreen"


const App = () => {
  return (
    <div>
      {/* <Home/>
      <Cursos/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/error' element={<ErrorScreen/>}/>
        <Route path='/forgot-password' element={<ForgotPasswordScreen/>}/>
        <Route path='/reset-password' element={<ResetPasswordScreen/>} />
        {/* Rutas Protegidas (Acceso a usuarios)*/}
        <Route element={<ProtectedRoute/>} > 
          <Route path='/inicio' element={<HomeScreen/>}/>
          <Route path='/new' element={<CreateProductScreen/>}/>
          <Route path='/cursos' element={<Cursos/>}/>
          <Route path='/cursos/producto/:curse_nombre' element={<Curses/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
