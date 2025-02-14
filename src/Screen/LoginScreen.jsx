import React, { useContext } from 'react'
import useForm from '../hooks/useForm'
import ENVIROMENT from '../utils/constants/enviroment'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

export const LoginScreen = () => {

  const {login, isAuthenticatedState} = useContext(AuthContext)
  console.log('Authenticated: ', isAuthenticatedState)
  
  const navigate = useNavigate()
  
  const { form_state, handleChangeInput } = useForm({email:'', password:'',role:''})//Como empieza el formulario
  const url = new URLSearchParams(window.location.search) //permite acceder y manipular los parámetros de la URL 
    if(url.get('verified')){
        alert('Cuenta verificada')
    }
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault() //prevenimos que se recargue la pagina
      const response = await fetch(ENVIROMENT.API_URL + '/api/auth/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // definimos que se envia json
          // 'x-api-key': ENVIROMENT.API_KEY
        },
        body: JSON.stringify(form_state) // definimos enviarlo por body hacia el BACKEND
      }) //Envia el formulario al BACKEND

      const data = await response.json()
      console.log(data)
      // sessionStorage.setItem('access_toke', data.data.access_token)
      login(data.data.access_token)
      navigate('/')

    } catch (error) {
      console.error("Error al loguear", error)
    }
  }
  
  const errores = {
    email: [],
    password: []
  }

  //CONDICIONES PARA VALIDAR LOGIN
  form_state.email && form_state.email.length > 30 && errores.email.push("El limite de caracteres es 30") 
  form_state.email && form_state.email.length < 5 && errores.email.push("El minimo de caracteres es 5")
  form_state.password && form_state.password.length < 5 && errores.password.push("El minimo de caracteres es 5")

  return (
    <main className='auth-screen'>
			<form onSubmit={handleSubmitForm} className='auth-form'>
        <h1 className='title'> Login </h1>
				<div className='input-container'>
					<label htmlFor='email'>Ingresa tu email:</label>
					<input
						name='email'
						id='email'
            type='email'
            placeholder='joedoe@gmail.com'
            value={form_state.email}
            onChange={handleChangeInput}
					/>
          {
            errores.email.map((error, index) => <p key={index} style={{color: 'red'}}>{error}</p>)
          }
				</div>
				<div className='input-container'>
					<label htmlFor='password'>Ingresa tu contraseña:</label>
					<input
						name='password'
						id='password'
            type='password'
            value={form_state.password}
            onChange={handleChangeInput}
					/>
          {
            errores.password.map((error, index) => <p style={{color: 'red'}} key={index}>{error}</p>)
          }
				</div>
        <div className='input-container'>
					<label htmlFor='role'>Ingresa tu role:(user/admin)</label>
					<input
						name='role'
						id='role'
            type='role'
            value={form_state.role}
            onChange={handleChangeInput}
					/>
          {
            errores.password.map((error, index) => <p style={{color: 'red'}} key={index}>{error}</p>)
          }
				</div>
				<button 
          type='submit' 
          disabled={
            errores.email.length || 
            errores.password.length || 
            !form_state.email || 
            !form_state.password || 
            !form_state.role
          }
        >
          Iniciar sesion
        </button>
        <span>Aun no tienes cuenta?<Link to={'/register'}> Registrate </Link></span>
        <Link to={'/forgot-password'}> Olvide mi contraseña </Link>
			</form>
    </main>
  )
}
