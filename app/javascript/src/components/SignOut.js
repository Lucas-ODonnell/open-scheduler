import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const SignOut = ({handleSignOut}) => {
	const global = useContext(AppContext);
	const FontAwesomeIcon = global.FontAwesomeIcon;
	return (
		<div className="signout">
			<button onClick={handleSignOut}><FontAwesomeIcon  icon="sign-out-alt" size="lg" /></button>
		</div>
	)
} 
export default SignOut;
