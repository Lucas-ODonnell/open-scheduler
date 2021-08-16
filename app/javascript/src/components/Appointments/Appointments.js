import React, { useState, useEffect } from 'react';
import AppointmentModal from './AppointmentModal';
import axios from 'axios';
import Appointment from './Appointment';
import './appointments.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)


const Appointments = () => {
	const [appointments, setAppointments] = useState([]);
	const [newAppointment, setNewAppointment] = useState({
		company_name: "",
		street_address: "",
		city: "",
		state: "",
		zipcode: "",
		country: "",
		company_contact: "",
		phone: "",
		email: "",
		meeting_date: "",
		notes: ""
	})
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		axios.get('/api/v1/appointments.json')
			.then( response => {
				setAppointments(response.data.data);
			})
			.catch( response => console.log(response));
	}, [appointments.length])

	const handleDelete = (slug) => {
		axios.delete(`/api/v1/appointments/${slug}`)
			.then( response => {
			console.log(response)
				setAppointments(appointments.filter(object => object.attributes.slug !== slug));
			})
	}

	const handleChange = (e) => {
		e.preventDefault();
		setNewAppointment({...newAppointment, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const csrfToken = document.querySelector('[name=csrf-token]').content;
		axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
		axios.post('/api/v1/appointments', newAppointment )
			.then(response => {
				setAppointments([...appointments, response.data.data])
				setNewAppointment({
					company_name: "",
					street_address: "",
					city: "",
					state: "",
					zipcode: "",
					country: "",
					company_contact: "",
					phone: "",
					email: "",
					meeting_date: "",
					notes: ""
				})
				setShowModal(false);
			})
			.catch(response => console.log(response));
	}

	const appointmentList = appointments.map((appointment, index) => {
		const { company_name, meeting_date, slug } = appointment.attributes;
		return (
			<Appointment
				key={index}
				{...{company_name, meeting_date, slug, appointments, setAppointments, handleDelete, FontAwesomeIcon}}
				/>
		)
	});

	return (
		<section className="appointments">
			<div className="appointments-header">
				<h1>Appointments</h1>
			</div>
			<div className="new-appointment">
				<button className="modal-button" onClick={() => setShowModal(true)}>New Appointment</button>
				<AppointmentModal onClose={() => setShowModal(false)} {...{showModal, handleChange, newAppointment, handleSubmit}}/>
			</div>
			<div className="appointments-grid">
				{appointmentList}
			</div>
		</section>
	)
}

export default Appointments;
