import React from 'react';
import { Link } from 'react-router-dom';

const Appointment = ({company_name, meeting_date, slug}) => {
	return (
		<Link to={`/appointments/${slug}`} >
			<div className="appointment-card">
				<div className="company-title">
					<h2>{company_name}</h2>
				</div>
				<div className="delete-row">
					<div>
						<span>Meeting:</span> {meeting_date}
					</div>
					<div className="appointment-delete">
						<button>Delete goes here</button>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default Appointment;
