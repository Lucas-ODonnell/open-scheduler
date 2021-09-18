import React from 'react';
import { Link } from 'react-router-dom';

const Appointment = ({company_name, formatted_date, slug, handleDelete, FontAwesomeIcon, global}) => {
	return (
		<div className="appointment-card card-effect">
			<div className="delete-button">
				<button onClick={() => {global.setShowWarning(true); global.setDeleteFunction(()=>()=> handleDelete(slug))}}><FontAwesomeIcon  icon="trash" size="lg" /></button>
			</div>
			<div className="title-meeting">
				<div className="alt-title">
					<h2>{company_name}</h2>
				</div>
				<div>
					<span>Meeting:</span> {formatted_date}
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
