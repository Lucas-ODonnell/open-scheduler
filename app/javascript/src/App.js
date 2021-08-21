import React, {useState} from 'react';
import axios from 'axios';
import Router from './Router';
import Session from './components/Session/Session';
import './app.css';

const App = () => {
	const [signedIn, setSignedIn] = useState(false);
	const [userData, setUserData] = useState({
		email: "",
		password: ""
	})

	const handleSignInChange = (e) => {
		e.preventDefault();
		setUserData({...userData, [e.target.name]: e.target.value})
		console.log(userData)
	}

	const handleSignInSubmit = (e) => {
		e.preventDefault();
		axios.post('/users/sign_in', userData)
			.then(response => console.log(response.headers))
	}
	return (
		<>
			{!signedIn ?
			<Session {...{handleSignInChange, handleSignInSubmit, userData}}/>
			:
			<Router />
			}
			</>
	)
}

export default App;
