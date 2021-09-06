import React, {useState, useEffect} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Router from './Router';
import Devise from './components/Devise/Devise';
import FakeNav from './components/FakeNav';
import SignOut from './components/SignOut';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)
import './app.css';

const App = () => {
	const [authorizationToken, setAuthorizationToken] = useState()
	const [currentUser, setCurrentUser] = useState({});
	const [profile, setProfile] = useState({})
	const [signedIn, setSignedIn] = useState(false);

	useEffect(() => {
		if (localStorage.Authorization !== undefined) {
			const AuthorizedToken = localStorage.getItem('Authorization')
			const decoded = jwt_decode(AuthorizedToken)
			setAuthorizationToken(JSON.parse(AuthorizedToken))
			setSignedIn(true);
			axios.get(`/api/v1/users/${decoded.sub}`)
				.then( response => {
					setCurrentUser(response.data.data)
					axios.get(`/api/v1/profiles/${response.data.data.id}`)
						.then(response => {
							setProfile(response.data.data)
						})
				})
		}
	}, [authorizationToken])

	const handleSignOut = (e) => {
		e.preventDefault();
		const config = {
			headers: { Authorization: authorizationToken }
		}
		axios.delete('users/sign_out', config)
			.then(response => {
				console.log(response)
				setSignedIn(false);
				localStorage.clear();
			})
			.catch(response => {
				console.log(response);
				setSignedIn(false);
			})
	}

	return (
		<>
			{!signedIn ?
			<section>
				<FakeNav />
				<Devise {...{setAuthorizationToken, setSignedIn}}/>
			</section>
			:
			<>
				<SignOut {...{handleSignOut, FontAwesomeIcon}}/>
				<Router {...{authorizationToken, currentUser, profile}}/>
				</>
			}
			</>
	)
}

export default App;
