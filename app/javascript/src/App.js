import React, {useState, useEffect } from 'react';
import { HashRouter as Routes, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Appointments from './components/Pages/Appointments/Appointments';
import Appointment from './components/Pages/Appointment/Appointment';
import Profile from './components/Pages/Profile/Profile';
import Leads from './components/Pages/Leads/Leads';
import Documents from './components/Pages/Documents/Documents';
import Devise from './components/Pages/Devise/Devise';
import SignOut from './components/SignOut';
import Alert from './components/Alert';
import Warning from './components/Warning';
import AppContext from './context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)
import './App.css';

const App = () => {
	const [authorizationToken, setAuthorizationToken] = useState();
	const [signedIn, setSignedIn] = useState(false);
	const [showError, setShowError] = useState(false); //flashError, <Alert /> 
	const [showWarning, setShowWarning] = useState(false); //Warning to delete
	const [deleteFunction, setDeleteFunction] = useState(() => () => {return}); //writing it like this prevents function from firing before actually clicking on a confirmation button
	const [error, setError] = useState(null);
	
	useEffect(() => {
		if (localStorage.Authorization !== undefined) {
			const AuthorizedToken = localStorage.getItem('Authorization')
			setAuthorizationToken(JSON.parse(AuthorizedToken))
			setSignedIn(true);
		}
	}, [authorizationToken])

	const flashError = () => {
		setShowError(true);
		setTimeout(() => {
			setShowError(false)
		}, 5000);
	}

	//context
	//dont delete setDeleteFunction and deleteFunction. It is used to set up a warning before delete
	const global = {
		setSignedIn: setSignedIn,
		error: error,
		setError: setError,
		setShowWarning: setShowWarning,
		showWarning: showWarning,
		setDeleteFunction: setDeleteFunction,
		deleteFunction: deleteFunction,
		flashError: flashError,
		authorizationToken: authorizationToken,
		FontAwesomeIcon: FontAwesomeIcon
	}

	return (
		<>
			<AppContext.Provider value={global}>
				{!signedIn ?
				<section>
					<Devise {...{setAuthorizationToken}}/>
				</section>
				:
				<>
					<Routes>
						<Nav {...{FontAwesomeIcon}}/>
						<Alert {...{showError}}/>
						<Warning />
						<SignOut />
						<Switch>
							<Route exact path="/">
								<Appointments />
							</Route>
							<Route exact path="/appointments/:slug">
								<Appointment />
							</Route>
							<Route exact path="/leads">
								<Leads />
							</Route>
							<Route exact path="/profile" >
								<Profile />
							</Route>
							<Route exact path="/documents">
								<Documents />
							</Route>
						</Switch>
					</Routes>
					</>
				}
			</AppContext.Provider>
			</>
	)
}

export default App;
