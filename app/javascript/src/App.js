import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Router from './Router';
import Devise from './components/Devise/Devise';
import FakeNav from './components/FakeNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)
import './app.css';

const App = () => {
	const [authorizationToken, setAuthorizationToken] = useState()
	const [signedIn, setSignedIn] = useState(false);

	useEffect(() => {
		if (localStorage.Authorization !== undefined) {
			const AuthorizedToken = localStorage.getItem('Authorization')
			setAuthorizationToken(JSON.parse(AuthorizedToken))
			setSignedIn(true);
		}
	}, [authorizationToken])

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
