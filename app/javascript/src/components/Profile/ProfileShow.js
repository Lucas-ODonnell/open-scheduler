import React from 'react';

const ProfileShow = ({profile, FontAwesomeIcon, setProfileUpdate}) => {
	return (
		<div className="profile-card">
				<div className="header-edit">
					<button onClick={()=> setProfileUpdate(true)}><FontAwesomeIcon icon="edit" size="lg" /></button>
				</div>
				<div className="header-title">
					<h2>Profile</h2>
				</div>
				<div className="attributes"><span>Bio:</span> {profile.attributes.bio}</div>
				<div className="attributes"><span>Position:</span> {profile.attributes.position}</div>
				<div className="attributes"><span>Department:</span> {profile.attributes.department}</div>
			</div>
	)
}

export default ProfileShow;
