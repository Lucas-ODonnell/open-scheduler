import React from 'react';

const SignOut = ({handleSignOut, FontAwesomeIcon}) => (
	<div className="signout">
		<button onClick={handleSignOut}><FontAwesomeIcon  icon="sign-out-alt" size="lg" /></button>
	</div>
)

export default SignOut;
