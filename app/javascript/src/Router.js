import React from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Appointments from './components/Appointments/Appointments';
import ShowAppointment from './components/Appointment/ShowAppointment';
import User from './components/User/User';
import Profile from './components/Profile/Profile';

const Router = ({authorizationToken, currentUser, profile}) => (
	<Routes>
		<Nav />
		<Switch>
			<Route exact path="/">
				<Appointments {...{authorizationToken}}/>
			</Route>
			<Route exact path="/appointments/:slug">
				<ShowAppointment {...{authorizationToken}}/>
			</Route>
			<Route exact path="/user">
				<User {...{currentUser}}/>
			</Route>
			<Route exact path="/profile" >
				<Profile {...{profile}} />
			</Route>
		</Switch>
	</Routes>
)


export default Router;
