import React, {useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import LogInShow from './LogInShow';
import ProfileShow from './ProfileShow';
import LogInUpdate from './LogInUpdate';
import ProfileUpdate from './ProfileUpdate';
import './profile.css';

const Profile = ({authorizationToken, FontAwesomeIcon}) => {
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

	useEffect(() => {
		fetchData()
	}, []) 

	const fetchData = () => {
		const decoded = jwt_decode(authorizationToken);
		axios.get(`/api/v1/users/${decoded.sub}`)
			.then( response => {
				setCurrentUser(response.data.data)
				axios.get(`/api/v1/profiles/${response.data.data.id}`)
					.then(response => {
						setProfile(response.data.data)
						setHasLoaded(true)
					})
			})
	}

	const profileChange = (e) => {
		e.preventDefault();
		setEditedProfile({...editedProfile, [e.target.name]: e.target.value})
	}

	const updateProfile = (e) => {
		e.preventDefault();
		const config = {
			headers: { Authorization: authorizationToken }
		}
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
			.catch(error => {
				console.log(error);
			});
	}

	const logInChange = (e) => {
		e.preventDefault();
		setEditedLogIn({...editedLogIn, [e.target.name]: e.target.value})
	}

	const updateLogIn = (e) => {
		e.preventDefault();
		const config = {
			headers: { Authorization: authorizationToken }
		}
		const edited = Object.fromEntries(
			Object.entries(editedLogIn).filter(([key, value]) => value !== ""));
		axios.put(`/api/v1/users/${currentUser.id}`, edited, config)
			.then(response => {
				setEditedProfile({
					name: currentUser.attributes.name,
					email: currentUser.attributes.email,
				})
				setLogInUpdate(false);
				fetchData();
			})
			.catch(error => {
				console.log(error);
			});
	}

	//Using render, because render will happen before useEffect, this way nothing will render until after the axios request goes through
	const render = () => {
		if (!hasLoaded) return null;
		return (
			<section>
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
			</section>
		)
	}

	return render()
}

export default Profile;
