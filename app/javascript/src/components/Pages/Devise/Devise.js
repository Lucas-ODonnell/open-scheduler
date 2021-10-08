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
		<section>
			<div className="sigin-nav-container">
				<div className="signin-nav-content">
				<h1>Open Scheduler</h1>
				</div>
			</div>
			<div className="signin-container">
				{register ?
				<Registration {...{toggleRegistration, setAuthorizationToken}}/>
				:
				<SignIn {...{toggleRegistration, setAuthorizationToken}}/>
				}
			</div>
		</section>
	)
}

export default Devise;
