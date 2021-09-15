import React from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Appointments from './components/Appointments/Appointments';
import ShowAppointment from './components/Appointment/ShowAppointment';
import Profile from './components/Profile/Profile';
import Leads from './components/Leads/Leads';

const Router = () => (
	<Routes>
		<Nav />
		<Switch>
			<Route exact path="/">
				<Appointments />
			</Route>
			<Route exact path="/appointments/:slug">
				<ShowAppointment />
			</Route>
			<Route exact path="/leads">
				<Leads />
			</Route>
			<Route exact path="/profile" >
				<Profile />
			</Route>
		</Switch>
	</Routes>
)


export default Router;
