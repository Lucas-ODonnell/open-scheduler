import React from 'react';
import { HashRouter as Routes, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Appointments from './components/Appointments/Appointments';
import Appointment from './components/Appointment/Appointment';
import Profile from './components/Profile/Profile';
import Leads from './components/Leads/Leads';
import Documents from './components/Documents/Documents';

const Router = () => (
	<Routes>
		<Nav />
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
)


export default Router;
