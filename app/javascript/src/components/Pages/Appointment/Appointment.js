import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../../../context/AppContext';
import ViewAppointment from './ViewAppointment';
import UpdateAppointment from './UpdateAppointment';
import AppointmentLead from './AppointmentLead';
import './Appointment.css';

const Appointment = () => {
	const global = useContext(AppContext)
	const FontAwesomeIcon = global.FontAwesomeIcon;
	const { slug } = useParams();
	const [appointment, setAppointment] = useState({});
	const [lead, setLead] = useState({});
	const [loaded, setLoaded] = useState(false);
	const [update, setUpdate] = useState(false);
	const [showLead, setShowLead] = useState(false);
	const [editedAppointment, setEditedAppointment] = useState({});
	const [errorMessage, setErrorMessage] = useState();
	const config = {
		headers: { Authorization: global.authorizationToken }
	}

	useEffect(() => {
		const url = `/api/v1/appointments/${slug}`;
		axios.get(url, config)
			.then ( response => {
				setAppointment(response.data.data)
				setLead(response.data.included[0])
				setLoaded(true);
			})
			.catch( response => {
				if (response.response.status === 401) global.setSignedIn(false); 
				global.setError("You have been signed out");
				global.flashError();
			})
	}, [update])

	//The notes should be loaded so we can add to them.
	const showEdit = (e) => {
		e.preventDefault();
		setUpdate(true);
		setEditedAppointment({
			street_address: "",
			city: "",
			state: "",
			zipcode: "",
			country: "",
			company_contact: "",
			phone: "",
			email: "",
			meeting_date: "",
			notes: appointment.attributes.notes 
		})
	}

	const hideEdit = (e) => {
		e.preventDefault();
		setUpdate(false);
	}

	const handleChange = (e) => {
		e.preventDefault();
		setEditedAppointment({...editedAppointment, [e.target.name]: e.target.value});
	}

	const handleUpdate = (e) => {
		e.preventDefault();
		const edited = Object.fromEntries(
			Object.entries(editedAppointment).filter(([key, value]) => value !== ""))
		axios.put(`/api/v1/appointments/${slug}`, edited, config)
			.then(response => {
				setEditedAppointment({
					street_address: "",
					city: "",
					state: "",
					zipcode: "",
					country: "",
					company_contact: "",
					phone: "",
					email: "",
					meeting_date: ""
				})
				setUpdate(false);
			})
			.catch(response => {
				setErrorMessage(response.response.data[0])
			});
	}

	return (
		<section>
			<div className="thisappointment-container">
				<div className="show-appointment">
					{ loaded &&
						<div className="appointment-card shadow-effect">
							{!update ?
							<>
								<ViewAppointment {...{appointment, FontAwesomeIcon, showEdit, setShowLead}}/>
								<AppointmentLead {...{lead, showLead}} />
								</>
							:
							<UpdateAppointment {...{hideEdit, handleChange, handleUpdate, editedAppointment, appointment, errorMessage}}/>
							}
						</div>
					}
				</div>
			</div>
		</section>
	)
}

export default Appointment;
