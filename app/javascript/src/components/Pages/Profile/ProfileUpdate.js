import React from 'react';

const ProfileUpdate = ({setProfileUpdate, profileChange, editedProfile, updateProfile}) => {
	return (
		<div className="profile-card shadow-effect">
			<div className="header-x">
				<button onClick={()=> setProfileUpdate(false)}>&times;</button>
			</div>
			<div className="header-title">
				<h2>Profile</h2>
			</div>
			<form onSubmit={updateProfile}>
				<div className="field">
					<label>Bio:</label>
					<textarea onChange={profileChange} value={editedProfile.bio} type="text" name="bio"  />
				</div>
				<div className="field">
					<label>Position:</label>
					<input onChange={profileChange} value={editedProfile.position} type="text" name="position"  />
				</div>
				<div className="field">
					<label>Department:</label>
					<input onChange={profileChange} value={editedProfile.department} type="text" name="department"  />
				</div>
				<button className="submit update-btn" type="submit">Update</button>
			</form>
		</div>
	)
}

export default ProfileUpdate;
