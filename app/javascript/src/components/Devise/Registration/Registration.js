import React, {useState} from 'react';
import axios from 'axios';
import SignUp from './SignUp';

const Registration = ({toggleRegistration, setAuthorizationToken}) => {
	const [newUserData, setNewUserData] = useState({
		name: "",
		email: "",
		password: "",
		password_confirmation: ""
	})

	
	const handleSignUpChange = (e) => {
		e.preventDefault();
		setNewUserData({...newUserData, [e.target.name]: e.target.value})
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

	return (
		<>
			<SignUp {...{toggleRegistration, handleSignUpChange, handleSignUpSubmit, newUserData}}/>
			</>
	)
}

export default Registration;
