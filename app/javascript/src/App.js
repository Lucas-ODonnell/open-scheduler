import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Router from './Router';
import Session from './components/Session/Session';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)
import './app.css';

const App = () => {
	const [authorizationToken, setAuthorizationToken] = useState()
	const [signedIn, setSignedIn] = useState(false);
	const [userData, setUserData] = useState({
		email: "",
		password: ""
	})

	useEffect(() => {
		if (localStorage.Authorization !== undefined) {
			const AuthorizedToken = localStorage.getItem('Authorization')
			setAuthorizationToken(JSON.parse(AuthorizedToken))
			setSignedIn(true);
		}
	}, [authorizationToken])

	const handleSignInChange = (e) => {
		e.preventDefault();
		setUserData({...userData, [e.target.name]: e.target.value})
	}

	const handleSignInSubmit = (e) => {
		e.preventDefault();
		const user = { user: userData }
		axios.post('/users/sign_in', user)
			.then(response => {
				localStorage.setItem('Authorization', JSON.stringify(response.headers.authorization));
				setAuthorizationToken(JSON.parse(localStorage.getItem('Authorization')))
				setSignedIn(true);
				setUserData({
					email: "",
					password: ""
				})
			})	
	}

	const handleSignOut = (e) => {
		e.preventDefault();
		const config = {
			headers: { Authorization: authorizationToken }
		}
		axios.delete('http://localhost:3000/users/sign_out', config)
			.then(response => {
				console.log(response)
				setSignedIn(false);
				localStorage.clear();
			})
	}
	return (
		<>
			{!signedIn ?
			<Session {...{handleSignInChange, handleSignInSubmit, userData}}/>
			:
			<>
				<div className="signout">
					<button onClick={handleSignOut}><FontAwesomeIcon  icon="sign-out-alt" size="lg" /></button>
				</div>
				<Router {...{authorizationToken}}/>
				</>
			}
			</>
	)
}

export default App;
