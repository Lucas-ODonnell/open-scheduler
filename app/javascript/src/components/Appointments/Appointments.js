import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import AppointmentModal from './AppointmentModal';
import axios from 'axios';
import Appointment from './Appointment';
import Filter from '../Filter';
import './Appointments.css';

const Appointments = () => {
	const global = useContext(AppContext);
	const string = "appointments";
	const FontAwesomeIcon = global.FontAwesomeIcon;
	const [showPossibleLeads, setShowPossibleLeads] = useState(false);
	const [appointments, setAppointments] = useState([]);
	const [leads, setLeads] = useState([]);
	const [appointmentFilter, setAppointmentFilter] = useState("");
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
	const [errorMessage, setErrorMessage] = useState();

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
			getLeads();
	}, [])


	const getLeads = () => {
		axios.get('/api/v1/leads.json', config)
			.then(response => {
				setLeads(response.data.data)
			})
	}

	const handleChange = (e) => {
		e.preventDefault();
		setNewAppointment({...newAppointment, [e.target.name]: e.target.value})
	}
	/*This is for the filter appointments input*/
	const handleFilterChange = (e) => {
		e.preventDefault();
		setAppointmentFilter(e.target.value)
	}

	/*This updates a lead with an appointment_id if you make a new appointment where the lead is the contact of the appointment*/
	const updateLead = (response,newAppointment) => {
		const targetLead = leads.filter((lead) => lead.attributes.name.toLowerCase() === newAppointment.company_contact.toLowerCase());
		if (targetLead.length === 0) return;
		axios.put(`/api/v1/leads/${targetLead[0].id}`, { appointment_id: response.data.data.id }, config)
			.then(response => {
				console.log(response)
				getLeads()
			});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('/api/v1/appointments', newAppointment, config )
			.then(response => {
				getLeads();
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
				getLeads();
			})
			.catch(response => {
				console.log(response.response)
				setErrorMessage(response.response.data[0]);
			});
	}

	const handleDelete = (slug) => {
		axios.delete(`/api/v1/appointments/${slug}`, config)
			.then( response => {
				setAppointments(appointments.filter(object => object.attributes.slug !== slug));
			})
	}

	const appointmentList = appointments.filter((appointment) => {
		if (appointmentFilter == "") {
			return appointment;
		} else if (appointment.attributes.company_name.toLowerCase().includes(appointmentFilter.toLowerCase())){
			return appointment
		}
	})
	.map((appointment, index) => {
		const { company_name, formatted_date, slug } = appointment.attributes;
		return (
			<Appointment
				key={index}
				{...{company_name, formatted_date, slug, appointments, 
					setAppointments, handleDelete, FontAwesomeIcon, global}}
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
				<AppointmentModal 
					onClose={() => 
					setShowModal(false)} 
					{...{showModal, handleChange, newAppointment, 
						handleSubmit, leads, showPossibleLeads, 
						setShowPossibleLeads, errorMessage}} 
					/>
			</div>
			<Filter {...{handleFilterChange, appointmentFilter, string}}/>
			<div className="appointments-grid">
				{appointmentList}
			</div>
		</section>
	)
}

export default Appointments;
