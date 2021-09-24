import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import AppointmentModal from './AppointmentModal';
import axios from 'axios';
import Appointment from './Appointment';
import './Appointments.css';

const Appointments = () => {
	const global = useContext(AppContext);
	const FontAwesomeIcon = global.FontAwesomeIcon;
	const [appointments, setAppointments] = useState([]);
	const [leads, setLeads] = useState([]);
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
	const config = {
		headers: { Authorization: global.authorizationToken }
	}

	useEffect(() => {
		axios.get('/api/v1/appointments.json', config)
			.then( response => {
				setAppointments(response.data.data);
			})
			.catch( response => {
				if (response.response.status === 401) global.setSignedIn(false); 
				global.setError("You have been signed out");
				global.flashError();
			});

			axios.get('/api/v1/leads.json', config)
			.then( response => {
			setLeads(response.data.data)
			});
	}, [])

	const handleDelete = (slug) => {
		axios.delete(`/api/v1/appointments/${slug}`, config)
			.then( response => {
				setAppointments(appointments.filter(object => object.attributes.slug !== slug));
			})
	}

	const handleChange = (e) => {
		e.preventDefault();
		setNewAppointment({...newAppointment, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('/api/v1/appointments', newAppointment, config )
			.then(response => {
				setAppointments([...appointments, response.data.data])
				updateLead(response, newAppointment);
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
			.catch(response => {
			console.log(response)
				global.setError(response.response.data[0]);
				global.flashError();
			});
	}

	const updateLead = (response,newAppointment) => {
		const targetLead = leads.filter((lead) => lead.attributes.name.toLowerCase() === newAppointment.company_contact.toLowerCase());
		if (targetLead.length === 0) return;
		axios.put(`/api/v1/leads/${targetLead[0].id}`, { appointment_id: response.data.data.id }, config)
		.then(response => console.log(response));
	}

	const appointmentList = appointments.map((appointment, index) => {
		const { company_name, formatted_date, slug } = appointment.attributes;
		return (
			<Appointment
				key={index}
				{...{company_name, formatted_date, slug, appointments, setAppointments, handleDelete, FontAwesomeIcon, global}}
				/>
		)
	});

	return (
		<section className="appointments">
			<div className="appointments-header">
				<h1 className="shadow-effect">Appointments</h1>
			</div>
			<div className="new-appointment">
				<button className="modal-button" onClick={() => setShowModal(true)}>New Appointment</button>
				<AppointmentModal onClose={() => setShowModal(false)} {...{showModal, handleChange, newAppointment, handleSubmit, leads}} />
			</div>
			<div className="appointments-grid">
				{appointmentList}
			</div>
		</section>
	)
}

export default Appointments;
