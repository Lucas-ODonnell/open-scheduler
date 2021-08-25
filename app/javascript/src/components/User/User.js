import React from 'react';

const User = ({currentUser}) => {
	return (
		<div className="view-user">
			<div className="attributes"><span>Name:</span> {currentUser.attributes.name}</div>
			<div className="attributes"><span>Company:</span> {currentUser.attributes.company}</div>
      <div className="attributes"><span>Position:</span> {currentUser.attributes.position}</div>
			<div className="attributes"><span>Email:</span> {currentUser.attributes.email}</div>
		</div>
	)
}

export default User;
