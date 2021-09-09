import React from 'react';

const LogInShow = ({currentUser, FontAwesomeIcon, setLogInUpdate}) => {
	return (
		<div className="profile-card">
			<div className="header-edit">
				<button onClick={ () => setLogInUpdate(true)}><FontAwesomeIcon icon="edit" size="lg" /></button>
			</div>
			<div className="header-title">
				<h2>Login Information</h2>
			</div>
			<div className="attributes"><span>Name:</span> {currentUser.attributes.name}</div>
			<div className="attributes"><span>Email:</span> {currentUser.attributes.email}</div>
		</div>
	)
}

export default LogInShow;
