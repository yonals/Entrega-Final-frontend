
import React, {useState} from 'react';
import "./Login.css";
const Login = () => {
	const [inputNombre, cambiarInputNombre] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');
  const [inputPassword, cambiarInputPassword] = useState('')

	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ...
		// Si todo es correcto enviamos el formulario

		console.log('Formulario Enviado!');
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

  	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputPassword = (e) => {
		cambiarInputPassword(e.target.value);
	}

	return (
		<div className="mainCuenta">
			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
				<div className="cuenta">Login</div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>

				<div>
					<label htmlFor="correo">Correo</label>
					<input
						type="text"
						name="correo"
						placeholder="Correo"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>

        <div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						placeholder="Password"
						id="password"
						value={inputPassword}
						onChange={handleInputPassword}
					/>
				</div>

				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}
 
export default Login;