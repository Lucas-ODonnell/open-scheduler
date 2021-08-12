import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Appointments from './components/Appointments/Appointments';
import ShowAppointment from './components/Appointment/ShowAppointment';
import './main.css';

const App = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Appointments />
			</Route>
			<Route exact path="/appointments/:slug">
				<ShowAppointment />
			</Route>
		</Switch>
	)
}

export default App;
