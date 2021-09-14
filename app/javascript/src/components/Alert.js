import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Alert = () => {
	const error = useContext(AppContext)
	return (
		<div className="alert">
			<p>{error.error}</p>
		</div>
	)
}

export default Alert;
