import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Router from './Router';
import Devise from './components/Devise/Devise';
import FakeNav from './components/FakeNav';
import SignOut from './components/SignOut';
import Alert from './components/Alert';
import AppContext from './context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)
import './app.css';

const App = () => {
	const [authorizationToken, setAuthorizationToken] = useState();
	const [signedIn, setSignedIn] = useState(false);
	const [showError, setShowError] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (localStorage.Authorization !== undefined) {
			const AuthorizedToken = localStorage.getItem('Authorization')
			setAuthorizationToken(JSON.parse(AuthorizedToken))
			setSignedIn(true);
		}}, [authorizationToken])

	const handleSignOut = (e) => {
		e.preventDefault();
		const config = {
			headers: { Authorization: authorizationToken }
		}
		axios.delete('users/sign_out', config)
			.then(response => {
				setSignedIn(false);
				localStorage.clear();
			})
			.catch(response => {
				console.log(response);
				setSignedIn(false);
			})
	}

	const flashError = () => {
		setShowError(true);
		setTimeout(() => {
			setShowError(false)
		}, 5000);
	}

	//context
	const global = {
		error: error,
		setError: setError,
		flashError: flashError,
		authorizationToken: authorizationToken,
		FontAwesomeIcon: FontAwesomeIcon
	}

	return (
		<>
			{showError ?
			<AppContext.Provider value={global}>
				<Alert />
			</AppContext.Provider>
			:
			<div></div>
			}
			{!signedIn ?
			<AppContext.Provider value={global}>
				<section>
					<FakeNav />
					<Devise {...{setAuthorizationToken, setSignedIn}}/>
				</section>
			</AppContext.Provider>
			:
			<AppContext.Provider value={global}>
				<SignOut {...{handleSignOut}}/>
				<Router />
			</AppContext.Provider>
			}
			</>
	)
}

export default App;
