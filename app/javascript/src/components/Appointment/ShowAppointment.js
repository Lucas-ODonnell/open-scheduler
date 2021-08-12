import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './appointment.css';

const ShowAppointment = () => {
	const { slug } = useParams();
	const [appointment, setAppointment] = useState({});
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const url = `/api/v1/appointments/${slug}`;
		axios.get(url)
			.then ( response => {
			setAppointment(response.data.data)
			setLoaded(true);
			})
			.catch( response => console.log(response))
	}, [])

	return (
		<section className="show-appointment">
		{ loaded &&
		<div className="appointment-card">
			<div className="company-title">
				<h2>{appointment.attributes.company_name}</h2>
			</div>
			<div className="street">
				<div className="attribute"><span>Address:</span> {appointment.attributes.street_address}</div>
			</div>
			<div className="city-info">
				<div className="attribute"><span>City:</span> {appointment.attributes.city}</div>
				<div className="attribute"><span>State:</span> {appointment.attributes.state}</div>
				<div className="attribute"><span>Zipcode:</span> {appointment.attributes.zipcode}</div>
			</div>
			<div className="country-row">
				<div className="attribute"><span>Country:</span> {appointment.attributes.country}</div>
				<div className="attribute"><span>Contact:</span> {appointment.attributes.company_contact}</div>
			</div>
			<div className="contact-information">
				<div className="attribute"><span>Phone:</span> {appointment.attributes.phone}</div>
				<div className="attribute"><span>Email:</span> {appointment.attributes.email}</div>
				<div className="attribute"><span>Meeting:</span> {appointment.attributes.meeting_date}</div>
			</div>
			<div className="notes">
				<div>
					<span>Notes:</span><p>{appointment.attributes.notes}</p>
				</div>
			</div>
		</div>
		}
		</section>
	)
}

export default ShowAppointment;
