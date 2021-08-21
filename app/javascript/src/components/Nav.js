import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
	<nav>
		<div className="navigation">
			<div className="nav-header">
				<h1>Open Scheduler</h1>
			</div>
			<div className="navbar">
				<ul>
					<li>
						<Link to="/">Appointments</Link>
					</li>
					<li>
						<Link to="/users/sign_in">Username</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
)

export default Nav;
