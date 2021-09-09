import React from 'react';
import SignIn from './SignIn';

const Session = ({handleSignInChange, handleSignInSubmit, userData, toggleRegistration, toggleReset, passwordReset, handleEmailChange, email, handlePasswordResetSubmit}) => {

	return (
		<>
			<SignIn {...{handleSignInChange, handleSignInSubmit, userData, toggleRegistration, toggleReset, passwordReset, handleEmailChange, email, handlePasswordResetSubmit}}/>
		</>
	)
}

export default Session;
