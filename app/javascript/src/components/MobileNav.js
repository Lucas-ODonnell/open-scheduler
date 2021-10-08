import React from 'react';
import { Link } from 'react-router-dom';
const MobileNav = ({cleanup}) => (
	<div className="mobile-nav-container">
		<div className="mobile-nav">
			<div>
				<Link to="/" onClick={()=>cleanup()} >Appointments</Link>
			</div>
			<div>
				<Link to="/leads" onClick={()=>cleanup()}>Leads</Link>
			</div>
			<div>
				<Link to="/profile" onClick={()=>cleanup()}>Profile</Link>
			</div>
			<div>
				<Link to="/documents" onClick={()=>cleanup()}>Documents</Link>
			</div>
		</div>
	</div>
)

export default MobileNav;
