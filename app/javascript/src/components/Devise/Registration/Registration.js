import React from 'react';
import SignUp from './SignUp';

const Registration = ({toggleRegistration, handleSignUpChange, handleSignUpSubmit, newUserData}) => {
	return (
		<>
			<SignUp {...{toggleRegistration, handleSignUpChange, handleSignUpSubmit, newUserData}}/>
			</>
	)
}

export default Registration;
