import React from 'react';

const LogInUpdate = ({setLogInUpdate, logInChange, editedLogIn, updateLogIn}) => {
	return (
		<div className="profile-card shadow-effect">
			<div className="header-x">
				<button onClick={() => setLogInUpdate(false)}>&times;</button>
			</div>
			<div className="header-title">
				<h2>Login Information</h2>
			</div>
			<form onSubmit={updateLogIn}>
				<div className="field">
					<label>Name:</label>
					<input onChange={logInChange} value={editedLogIn.name} type="text" name="name"  />
				</div>
				<div className="field">
					<label>Email:</label>
					<input onChange={logInChange} value={editedLogIn.email} type="text" name="email"  />
				</div>
				<button className="submit update-btn" type="submit">Update</button>
			</form>
		</div>
	)
}

export default LogInUpdate;
