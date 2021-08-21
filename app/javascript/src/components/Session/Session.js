import React from 'react';
import SignIn from './SignIn';
import './session.css';

const User = ({handleSignInChange, handleSignInSubmit, userData}) => {
	return (
		<div className="signin-container">
			<SignIn {...{handleSignInChange, handleSignInSubmit, userData}}/>
		</div>
	)
}

export default User;
