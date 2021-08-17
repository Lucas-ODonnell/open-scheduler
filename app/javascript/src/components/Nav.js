import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
	<nav>
		<div className="navbar">
				<ul>
						<li>
							<Link to="/">Appointments</Link>
						</li>
						<li>
							<Link to="/user">Username</Link>
						</li>
				</ul>
			</div>
	</nav>
)

export default Nav;
