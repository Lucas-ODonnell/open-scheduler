import React from 'react';

const ViewAppointment = ({appointment, FontAwesomeIcon, showEdit}) => (
	<div className="view-appointment">
		<div className="show-edit">
			<button onClick={showEdit}><FontAwesomeIcon icon="edit" size="lg" /></button>
		</div>
		<div className="company-title">
			<h2>{appointment.attributes.company_name}</h2>
		</div>
		<div className="street">
			<div className="attributes"><span>Address:</span> {appointment.attributes.street_address}</div>
		</div>
		<div className="city-info">
			<div className="attributes"><span>City:</span> {appointment.attributes.city}</div>
			<div className="attributes"><span>State:</span> {appointment.attributes.state}</div>
			<div className="attributes"><span>Zipcode:</span> {appointment.attributes.zipcode}</div>
		</div>
		<div className="country-row">
			<div className="attributes"><span>Country:</span> {appointment.attributes.country}</div>
			<div className="attributes"><span>Contact:</span> {appointment.attributes.company_contact}</div>
		</div>
		<div className="contact-information">
			<div className="attributes"><span>Phone:</span> {appointment.attributes.phone}</div>
			<div className="attributes"><span>Email:</span> {appointment.attributes.email}</div>
			<div className="attributes"><span>Meeting:</span> {appointment.attributes.formatted_date}</div>
		</div>
		<div className="notes">
			<div>
				<span>Notes:</span><p className="appointment_notes">{appointment.attributes.notes}</p>
			</div>
		</div>
	</div>
)

export default ViewAppointment;
