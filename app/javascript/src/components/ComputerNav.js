import React from 'react';
import { Link } from 'react-router-dom';

const ComputerNav = () => (
	<div className="nav-body">
		<div>
			<Link to="/">Appointments</Link>
		</div>
		<div>
			<Link to="/leads">Leads</Link>
		</div>
		<div>
			<Link to="/profile">Profile</Link>
		</div>
		<div>
			<Link to="/documents">Documents</Link>
		</div>
	</div>
)

export default ComputerNav;
