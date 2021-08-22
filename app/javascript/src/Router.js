import React from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Appointments from './components/Appointments/Appointments';
import ShowAppointment from './components/Appointment/ShowAppointment';
import User from './components/User/User';
import Nav from './components/Nav';

	

const Router = ({authorizationToken}) => (
		<Routes>
			<Nav />
			<Switch>
				<Route exact path="/">
					<Appointments {...{authorizationToken}}/>
				</Route>
				<Route exact path="/appointments/:slug">
					<ShowAppointment {...{authorizationToken}}/>
				</Route>
				<Route exact path="/users/sign_in">
					<User />
				</Route>
			</Switch>
		</Routes>
	)


export default Router;
