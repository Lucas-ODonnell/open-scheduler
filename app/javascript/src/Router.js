import React from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Appointments from './components/Appointments/Appointments';
import ShowAppointment from './components/Appointment/ShowAppointment';
import User from './components/User/User';
import Nav from './components/Nav';

	

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
				<Route exact path="/user">
					<User />
				</Route>
			</Switch>
		</Routes>
	)


export default Router;
