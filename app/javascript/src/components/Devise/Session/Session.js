import React from 'react';
import SignIn from './SignIn';

const Session = ({handleSignInChange, handleSignInSubmit, userData, toggleRegistration}) => {
	return (
		<>
			<SignIn {...{handleSignInChange, handleSignInSubmit, userData, toggleRegistration}}/>
		</>
	)
}

export default Session;
