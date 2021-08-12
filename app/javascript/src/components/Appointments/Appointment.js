import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

const Appointment = ({company_name, meeting_date, slug, handleDelete}) => {
	return (
		<div className="appointment-card">
			<div className="delete-button">
				<button onClick={() => handleDelete(slug)}><FontAwesomeIcon  icon="trash" size="lg" /></button>
			</div>
			<div className="title-meeting">
				<div className="alt-title">
					<h2>{company_name}</h2>
				</div>
				<div>
					<span>Meeting:</span> {meeting_date}
				</div>
			</div>
			<div className="show-row">
				<div className="link-appointment">
					<Link to={`/appointments/${slug}`}>View</Link>
				</div>
			</div>
		</div>
	)
}

export default Appointment;
