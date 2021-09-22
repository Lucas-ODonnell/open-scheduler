import React, { useState } from 'react';
import Registration from './Registration/Registration';
import SignIn from './Session/SignIn';
import './Devise.css';

const Devise = ({setAuthorizationToken}) => {
	const [ register, setRegister ] = useState(false);
	const toggleRegistration = (e) => {
		e.preventDefault();
		setRegister(!register)
	}

	return (
		<section className="sign-container card-effect">
			{register ?
			<Registration {...{toggleRegistration, setAuthorizationToken}}/>
			:
			<SignIn {...{toggleRegistration, setAuthorizationToken}}/>
			}
		</section>
	)
}

export default Devise;
