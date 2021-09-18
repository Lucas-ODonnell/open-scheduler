import React, { useContext } from 'react';
import axios from 'axios';
import AppContext from '../context/AppContext';

const SignOut = () => {
	const global = useContext(AppContext);
	const FontAwesomeIcon = global.FontAwesomeIcon;
	const config = {
			headers: { Authorization: global.authorizationToken }
		}

	const handleSignOut = (e) => {
		e.preventDefault();
		axios.delete('users/sign_out', config)
			.then(response => {
				global.setSignedIn(false);
				localStorage.clear();
			})
			.catch(response => {
				console.log(response);
				global.setSignedIn(false);
			})
	}
	return (
		<div className="signout">
			<button onClick={handleSignOut}><FontAwesomeIcon  icon="sign-out-alt" size="2x" /></button>
		</div>
	)
} 
export default SignOut;
