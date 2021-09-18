import React, {useState, useContext} from 'react';
import AppContext from '../../../context/AppContext';
import axios from 'axios';

const PasswordReset = ({setPasswordReset}) => {
	const global = useContext(AppContext);
	const [ email, setEmail ] = useState({
		email: ""
	});
	const [reset, setReset] = useState({
		token: "",
		email: "",
		password: "",
		password_confirmation: ""
	}); //This is for reseting password

	//To send a password reset token
	const handleEmailChange = (e) => {
		e.preventDefault();
		setEmail({...email, [e.target.name]: e.target.value})
	}

	const handlePasswordTokenSubmit = (e) => {
		e.preventDefault();
		axios.post(`/api/v1/forgot_password`, email)
			.then(response => {
				console.log(response)
				global.setError(response.data.alert);
				global.flashError();
				setEmail({email: ""});
			})
			.catch(response => {
				global.setError(response.data.alert);
				global.flashError();
				setEmail({email: ""});
			})
	}

	//reset password
	const handleResetPasswordChange = (e) => {
		e.preventDefault();
		setReset({...reset, [e.target.name]: e.target.value});
	}

	const handleResetPasswordSubmit = (e) => {
		e.preventDefault();
		if (passwordValid(reset.password, reset.password_confirmation)) {
			axios.post(`/api/v1/reset_password`, reset)
				.then( response => {
					global.setError(response.data.alert);
					global.flashError();
					setReset({
						token: "",
						email: "",
						password: "",
						password_confirmation: ""
					});
					setPasswordReset(false);
				})
				.catch(response => {
					global.setError("Either your token or email are not valid");
					global.flashError();
				})
		}
	}

	const passwordValid = (password, passwordConfirmation) => {
		if (password !== passwordConfirmation) {
			global.setError("Passwords don't match");
			global.flashError();
			setReset({
				password: "",
				password_confirmation: ""
			})
			return false;
		}
		return true;
	}

	return (
		<>
			<div className="password-reset">
				<form onSubmit={handlePasswordTokenSubmit}>
					<label>Receive reset token</label>
					<input onChange={handleEmailChange} type="email" name="email" value={email.email} placeholder="Email"/>
					<button>Submit</button>
				</form>
			</div>
			<div className="password-change">
				<form onSubmit={handleResetPasswordSubmit}>
					<div>
						<label>Token:</label>
						<input onChange={handleResetPasswordChange}type="text" name="token" value={reset.token} placeholder="Password Reset Token"/>
					</div>
					<div>
						<label>Email:</label>
						<input onChange={handleResetPasswordChange} type="email" name="email" value={reset.email} placeholder="Email"/>
					</div>
					<div>
						<label>New Password:</label>
						<input onChange={handleResetPasswordChange} type="password" name="password" value={reset.password} placeholder="Password"/>
					</div>
					<div>
						<label>New Password Confirmation:</label>
						<input onChange={handleResetPasswordChange} type="password" name="password_confirmation" value={reset.password_confirmation} placeholder="Password"/>
					</div>
					<button>Reset Password</button>
				</form>
			</div>
			</>
	)
}

export default PasswordReset;
