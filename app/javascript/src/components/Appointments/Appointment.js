import React from 'react';

const Appointment = ({city, company_contact, company_name, country, email, meeting_date, notes, phone,slug, state, street_address, zipcode}) => {
	return (
		<div className="appointment-card">
			<div className="company-title">
				<h2>{company_name}</h2>
			</div>
			<div className="street">
				<div className="attribute"><span>Address:</span> {street_address}</div>
			</div>
			<div className="city-info">
				<div className="attribute"><span>City:</span> {city}</div>
				<div className="attribute"><span>State:</span> {state}</div>
				<div className="attribute"><span>Zipcode:</span> {zipcode}</div>
			</div>
			<div className="country-row">
				<div className="attribute"><span>Country:</span> {country}</div>
				<div className="attribute"><span>Contact:</span> {company_contact}</div>
			</div>
			<div className="contact-information">
				<div className="attribute"><span>Phone:</span> {phone}</div>
				<div className="attribute"><span>Email:</span> {email}</div>
				<div className="attribute"><span>Meeting:</span> {meeting_date}</div>
			</div>
			<div className="notes">
				<div>
					<span>Notes:</span><p>{notes}</p>
				</div>
			</div>
		</div>
	)
}

export default Appointment;
