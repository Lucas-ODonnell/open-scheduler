import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Appointments from './components/Appointments/Appointments';
import './main.css';

const App = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Appointments />
			</Route>
		</Switch>
	)
}

export default App;
