import React, { useState } from 'react';
import Registration from './Registration/Registration';
import SignIn from './Session/SignIn';
import './devise.css';

const Devise = ({setAuthorizationToken, setError}) => {
	const [ register, setRegister ] = useState(false);
	const toggleRegistration = (e) => {
		e.preventDefault();
		setRegister(!register)
	}

	return (
		<section className="sign-container">
			{register ?
			<Registration {...{toggleRegistration, setAuthorizationToken}}/>
			:
			<SignIn {...{toggleRegistration, setAuthorizationToken, setError}}/>
			}
		</section>
	)
}

export default Devise;
