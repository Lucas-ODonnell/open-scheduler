import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import AppointmentModal from './AppointmentModal';
import axios from 'axios';
import Appointment from './Appointment';
import './appointments.css';

const Appointments = () => {
	const global = useContext(AppContext);
	const FontAwesomeIcon = global.FontAwesomeIcon;
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
		const config = {
			headers: { Authorization: global.authorizationToken }
		}
		axios.get('/api/v1/appointments.json', config)
			.then( response => {
				setAppointments(response.data.data);
			})
			.catch( response => console.log(response));
	}, [])

	const handleDelete = (slug) => {
		const config = {
			headers: { Authorization: global.authorizationToken }
		}
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
		const config = {
			headers: { Authorization: global.authorizationToken }
		}
		axios.post('/api/v1/appointments', newAppointment, config )
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
			.catch(response => {
			global.setError(response.response.data[0]);
			global.flashError();
			});
	}

	const appointmentList = appointments.map((appointment, index) => {
		const { company_name, formatted_date, slug } = appointment.attributes;
		return (
			<Appointment
				key={index}
				{...{company_name, formatted_date, slug, appointments, setAppointments, handleDelete, FontAwesomeIcon}}
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
