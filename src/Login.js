import React from 'react'
import './Login.css'
import logo from './assets/newLogo.png';

function Login() {

	const register = () => {

	};

	const loginToApp = () => {
		
	};

	return (
		<div className="login">
			<img src={logo} alt=""/>
			<form action="">
				<input type="text" name="" id="" placeholder="Full name (required if register)"/>
				<input type="text" name="" id="" placeholder="Profile pic URL (optional)"/>
				<input type="email" name="" id="" placeholder="Email"/>
				<input type="password" name="" id="" placeholder="Password"/>
				<button type="submit" onClick="loginToApp">Sign in</button>
			</form>
			<p>Not a member ?
				<span className="login_register" onClick={register}>Register Now</span>
			</p>
		</div>
	)
}

export default Login