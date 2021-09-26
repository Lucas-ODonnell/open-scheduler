import React from 'react';
import { Link } from 'react-router-dom';

const Appointment = ({company_name, formatted_date, slug, handleDelete, FontAwesomeIcon, global}) => {
	return (
		<div className="each-card">
			<button className="delete-card" onClick={() => {global.setShowWarning(true); global.setDeleteFunction(()=>()=> handleDelete(slug))}}><FontAwesomeIcon  icon="times"/></button>
			<div className="appointments-icon">
				<FontAwesomeIcon icon="handshake" />
			</div>
			<div className="each-title">
				<h2>{company_name}</h2>
			</div>
			<div className="each-meeting">
			<span>Meeting:</span> {formatted_date}
			</div>
			<div className="link-appointment">
				<Link to={`/appointments/${slug}`}>View Appointment <FontAwesomeIcon icon="arrow-right"/></Link>
			</div>
		</div>
	)
}

export default Appointment;
