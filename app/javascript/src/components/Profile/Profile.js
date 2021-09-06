import React from 'react';

const Profile = ({profile}) => {
	return (
			<div className="view-user">
			<div className="attributes"><span>Name:</span> {profile.attributes.full_name}</div>
			<div className="attributes"><span>Bio:</span> {profile.attributes.bio}</div>
      <div className="attributes"><span>Position:</span> {profile.attributes.position}</div>
		</div>
	)
}

export default Profile;
