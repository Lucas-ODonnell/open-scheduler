import React, { useState, useContext } from 'react';
import AppContext from '../../../../context/AppContext';
import axios from 'axios';
import PasswordReset from './PasswordReset';

const SignIn = ({toggleRegistration, setAuthorizationToken}) => {
	const global = useContext(AppContext)
	const [ passwordReset, setPasswordReset ] = useState(false) //for sending token to email
	const [userData, setUserData] = useState({
		email: "",
		password: ""
	})

	const toggleReset = (e) => {
		e.preventDefault();
		setPasswordReset(!passwordReset);
	}

	const handleSignInChange = (e) => {
		e.preventDefault();
		setUserData({...userData, [e.target.name]: e.target.value})
	}

	const handleSignInSubmit = (e) => {
		e.preventDefault();
		const user = { user: userData }
		axios.post('/users/sign_in', user)
			.then(response => {
				if (response.headers.authorization === undefined) {
					setUserData({
						email: "",
						password: ""
					})
					return;
				} 
				localStorage.setItem('Authorization', JSON.stringify(response.headers.authorization));
				setAuthorizationToken(JSON.parse(localStorage.getItem('Authorization')))
				setUserData({
					email: "",
					password: ""
				})
			})	
			.catch(response => {
				global.setError(response.response.data.message);
				global.flashError();
			})
	}

	return (
		<div className="sign-content">
			<div className='sign-header'>
				<h1>Sign In</h1>
			</div>
			<form onSubmit={handleSignInSubmit} className="sign-form">
				<div className="field">
					<label>Email: </label>
					<input onChange={handleSignInChange} type="email" name="email" value={userData.email} />
				</div>
				<div className="field">
					<label>Password:</label>
					<input onChange={handleSignInChange} type="password" name="password" value={userData.password} />
				</div>
				<button className='submit' type='submit'>Sign In</button>
				<div className="switcher">
					<div className="switcher-vert" >
						<button onClick={toggleRegistration}>Sign Up</button>
						<button onClick={toggleReset}>Reset Password</button>
					</div>
				</div>
			</form>
			{passwordReset ?
			<PasswordReset {...{setPasswordReset}}/>
			:
			<>
				</>
			}
			</div>
	)
}

export default SignIn;
