import React from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Appointments from './components/Appointments/Appointments';
import ShowAppointment from './components/Appointment/ShowAppointment';
import User from './components/User/User';

const Router = ({authorizationToken, currentUser}) => (
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
		</Switch>
	</Routes>
)


export default Router;
