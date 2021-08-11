import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Appointment from './Appointment';
import './appointments.css';

const Appointments = () => {
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		axios.get('/api/v1/appointments.json')
			.then( response => {
				setAppointments(response.data.data);
			})
			.catch( response => console.log(response));
	}, [Appointments.length])

	const appointmentList = appointments.map((appointment, index) => {
		const { city, company_contact, company_name, country, email, meeting_date, notes, phone, slug, state, street_address, zipcode } = appointment.attributes;
		return (
			<Appointment
				key={index}
				{...{city, company_contact, company_name, country, email, meeting_date, notes, phone, slug, state, street_address, zipcode}}
				/>
		)
	})

	return (
		<section className="appointments">
			<div className="appointments-header">
				<h1>Appointments</h1>
			</div>
			<div className="appointments-grid">
				{appointmentList}
			</div>
		</section>
	)
}

export default Appointments;
