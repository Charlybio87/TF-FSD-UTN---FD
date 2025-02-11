import React from "react"
import { Route, Routes } from "react-router-dom"
import { Cursos, Home } from "./Pages"
import '../src/App.css'
import Curses from "./Pages/Cursos/Curses"
import RegisterScreen from "./Screen/RegisterScreen"
import { LoginScreen } from "./Screen/LoginScreen"


const App = () => {
  return (
    <div>
      {/* <Home/>
      <Cursos/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/cursos' element={<Cursos/>}/>
        <Route path='/cursos/producto/:curse_nombre' element={<Curses/>}/>
      </Routes>
    </div>
  )
}

export default App
