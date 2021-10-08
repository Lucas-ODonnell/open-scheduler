import React, {useState, useEffect, useContext} from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import AppContext from '../../../context/AppContext';
import LogInShow from './LogInShow';
import ProfileShow from './ProfileShow';
import LogInUpdate from './LogInUpdate';
import ProfileUpdate from './ProfileUpdate';
import './Profile.css';

const Profile = () => {
	const global = useContext(AppContext);
	const FontAwesomeIcon = global.FontAwesomeIcon;
	const [hasLoaded, setHasLoaded] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	const [profile, setProfile] = useState({});
	const [profileUpdate, setProfileUpdate] = useState(false);
	const [logInUpdate, setLogInUpdate] = useState(false);
	const [editedProfile, setEditedProfile] = useState({
		bio: "",
		position: "",
		department: ""
	});
	const [editedLogIn, setEditedLogIn] = useState({
		name: "",
		email: ""
	});
	const config = {
		headers: { Authorization: global.authorizationToken }
	}

	useEffect(() => {
		fetchData()
	}, []) 

	const fetchData = () => {
		const decoded = jwt_decode(global.authorizationToken);
		axios.get(`/api/v1/users/${decoded.sub}`, config)
			.then( response => {
				setCurrentUser(response.data.data)
				axios.get(`/api/v1/profiles/${response.data.data.id}`, config)
					.then(response => {
						setProfile(response.data.data)
						setHasLoaded(true)
					})
			})
			.catch(response => {
				if (response.response.status === 401) global.setSignedIn(false); 
				global.setError("You have been signed out");
				global.flashError();
			})
	}

	const profileChange = (e) => {
		e.preventDefault();
		setEditedProfile({...editedProfile, [e.target.name]: e.target.value})
	}

	const updateProfile = (e) => {
		e.preventDefault();
		const edited = Object.fromEntries(
			Object.entries(editedProfile).filter(([key, value]) => value !== ""));
		axios.put(`/api/v1/profiles/${profile.id}`, edited, config)
			.then(response => {
				setEditedProfile({
					bio: "",
					position: "",
					department: ""
				})
				setProfileUpdate(false);
				fetchData();
			})
			.catch(response => {
				console.log(response)
			});
	}

	const logInChange = (e) => {
		e.preventDefault();
		setEditedLogIn({...editedLogIn, [e.target.name]: e.target.value})
	}

	const updateLogIn = (e) => {
		e.preventDefault();
		const edited = Object.fromEntries(
			Object.entries(editedLogIn).filter(([key, value]) => value !== ""));
		axios.put(`/api/v1/users/${currentUser.id}`, edited, config)
			.then(response => {
				setEditedLogIn({
					name: "",
					email: ""
				})
				setLogInUpdate(false);
				fetchData();
			})
			.catch(response => {
				global.setError(response.response.data[0]);
				global.flashError();
			});
	}

	const handleDelete = () => {
		axios.delete(`/api/v1/users/${currentUser.id}`, config)
			.then(response => {
				console.log(response);
				global.setSignedIn(false);
			})
	}

	//Using render, because render will happen before useEffect, this way nothing will render until after the axios request goes through
	const render = () => {
		if (!hasLoaded) return null;
		return (
			<section>
				<div className="profile-container">
					<div className="profile-content">
						{profileUpdate ?
						<ProfileUpdate {...{setProfileUpdate, profileChange, editedProfile, updateProfile}} />
						:
						<ProfileShow {...{profile, FontAwesomeIcon, setProfileUpdate}}/>
						}
						{logInUpdate ?
						<LogInUpdate {...{setLogInUpdate, logInChange, editedLogIn, updateLogIn}}/>
						:
						<LogInShow {...{currentUser, FontAwesomeIcon, setLogInUpdate}}/>
						}
						<div className="delete-container">
							<button onClick={()=>{global.setShowWarning(true); global.setDeleteFunction(()=>()=>handleDelete())}} className="delete-account">Delete Account</button>
						</div>
					</div>
				</div>
			</section>
		)
	}

	return render()
}

export default Profile;
