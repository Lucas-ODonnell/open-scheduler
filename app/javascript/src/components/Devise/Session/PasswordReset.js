import React, {useState} from 'react';
import axios from 'axios';

const PasswordReset = ({setPasswordReset}) => {
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
				alert(response.data.alert);
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
		if (reset.password !== reset.password_confirmation) {
			alert("Passwords don't match");
			setReset({
				password: "",
				password_confirmation: ""
			})
		}
		axios.post(`/api/v1/reset_password`, reset)
			.then(response => {
				alert(response.data.alert)
			})
			.catch(response => alert(response));
		setReset({
			token: "",
			email: "",
			password: "",
			password_confirmation: ""
		})
		setPasswordReset(false);
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
