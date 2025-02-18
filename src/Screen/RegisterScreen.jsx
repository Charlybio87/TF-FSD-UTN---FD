import React from 'react'
import useForm from '../hooks/useForm'
import ENVIROMENT from '../utils/constants/enviroment.js'

const RegisterScreen = () => {
	const { formState, handleChangeInput } = useForm({ username: "", email: "", role:"",password: "" })
	const handleSubmitForm = async (e) => {
		e.preventDefault()
		try {
			const response = await fetch(ENVIROMENT.API_URL + "/api/auth/register", {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'

				},
				body: JSON.stringify(formState)
			})

			const data = await response.json()
			console.log(data)

		} catch (error) {
			console.error("Error al registrar el usuario", error)
		}
	}

	const errores = {
		username: [],
		email: [],
		password: []
	}

	formState.email && formState.email.length > 30 && errores.email.push("El límite de caracteres es 30")
	formState.email && formState.email.length < 5 && errores.email.push("El mínimo de caracteres es 5")

	formState.password && formState.password.length > 30 && errores.password.push("El máximo de caracteres es 30")
	formState.password && formState.password.length < 5 && errores.password.push("El mínimo de caracteres es 5")

	formState.username && formState.username.length > 30 && errores.username.push("El límite de caracteres es 30")
	formState.username && formState.username.length < 5 && errores.username.push("El mínimo de caracteres es 5")

	return (
		<div>
			<h2>RegistroScreen</h2>
			<h1>Registro</h1>
			<form onSubmit={handleSubmitForm}>
				<div>
					<label htmlFor="username">Ingresa tu nombre de usuario:</label>
					<input 
						name='username' 
						id='username' 
						placeholder='Joedoe'
						value={formState.username} 
						onChange={handleChangeInput} 
					/>
					{
						errores.username?.map((error, index) => <p key={index} style={{ color: "red" }}>{error}</p>)
					}
				</div>
				<div>
					<label htmlFor="email">Ingresa tu email:</label>
					<input 
						name='email' 
						id='email' 
						placeholder='joedoe@gmail' 
						value={formState.email} 
						onChange={handleChangeInput} 
					/>
					{
						errores.email?.map((error, index) => <p key={index} style={{ color: "red" }}>{error}</p>)
					}
				</div>
				<div>
					<label htmlFor="role">Ingresa su Rol:(user/admin )</label>
					<input 
						name='role' 
						id='role' 
						value={formState.role} 
						onChange={handleChangeInput} 
					/>
					{
						errores.email?.map((error, index) => <p key={index} style={{ color: "red" }}>{error}</p>)
					}
				</div>
				<div>
					<label htmlFor="password">Ingresa tu contraseña:</label>
					<input 
						name='password' 
						id='password' 
						value={formState.password} 
						onChange={handleChangeInput} 
					/>
					<button 
						type='submit' 
						disabled=
						{
							errores.email.length > 0 || 
							errores.password.length || 
							!formState.email || 
							!formState.password
						}
					>
						Crear usuario
					</button>
					{
						errores.password?.map((error, index) => <p key={index} style={{ color: "red" }}>{error}</p>)
					}
				</div>
			</form>
		</div>
	)
}

export default RegisterScreen