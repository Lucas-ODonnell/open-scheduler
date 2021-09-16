import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Alert = ({showError}) => {
	const error = useContext(AppContext)
	if (!showError) {
		return (
			<>
				</>
		)
	};
	return (
		<div className="alert">
			<p>{error.error}</p>
		</div>
	)
}

export default Alert;
