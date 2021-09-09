import React, { useState } from 'react';
import axios from 'axios';
import Registration from './Registration/Registration';
import Session from './Session/Session';
import './devise.css';

const Devise = ({setAuthorizationToken}) => {
	const [ passwordReset, setPasswordReset ] = useState(false)
	const [ email, setEmail ] = useState({
		email: ""
	});
	const [ register, setRegister ] = useState(false);
	const [userData, setUserData] = useState({
		email: "",
		password: ""
	})
	const [newUserData, setNewUserData] = useState({
		name: "",
		email: "",
		password: "",
		password_confirmation: ""
	})

	const handleSignInChange = (e) => {
		e.preventDefault();
		setUserData({...userData, [e.target.name]: e.target.value})
	}

	const handleSignUpChange = (e) => {
		e.preventDefault();
		setNewUserData({...newUserData, [e.target.name]: e.target.value})
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
	}

	const handleSignUpSubmit = (e) => {
		e.preventDefault();
		const newUser = { user: newUserData }
		axios.post('/users', newUser)
			.then(response => {
				if (response.headers.authorization === undefined) {
					setNewUserData({
						name: "",
						email: "",
						password: "",
						password_confirmation: ""
					})
					return;
				} 
				localStorage.setItem('Authorization', JSON.stringify(response.headers.authorization));
				setAuthorizationToken(JSON.parse(localStorage.getItem('Authorization')))
				setNewUserData({
					name: "",
					email: "",
					password: "",
					password_confirmation: ""
				})
			})	
	}

	const toggleRegistration = (e) => {
		e.preventDefault();
		setRegister(!register)
	}

	const toggleReset = (e) => {
		e.preventDefault();
		setPasswordReset(!passwordReset);
	}

	//To send a password reset
	const handleEmailChange = (e) => {
		e.preventDefault();
		setEmail({...email, [e.target.name]: e.target.value})
	}

	const handlePasswordResetSubmit = (e) => {
		e.preventDefault();
		axios.post(`/api/v1/forgot_password`, email)
		.then(response => {
			alert(response.alert);
			setEmail({email: ""});
		})
	}

		return (
			<section className="sign-container">
				{register ?
				<Registration {...{toggleRegistration, handleSignUpChange, handleSignUpSubmit, newUserData}}/>
				:
				<Session {...{toggleRegistration, handleSignInChange, handleSignInSubmit, userData, toggleReset, passwordReset, handleEmailChange, email, handlePasswordResetSubmit}}/>
				}
			</section>
		)
	}

export default Devise;
