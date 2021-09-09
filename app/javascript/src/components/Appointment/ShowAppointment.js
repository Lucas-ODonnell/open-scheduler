import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ViewAppointment from './ViewAppointment';
import UpdateAppointment from './UpdateAppointment';
import './appointment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

const ShowAppointment = ({authorizationToken}) => {
	const { slug } = useParams();
	const [appointment, setAppointment] = useState({});
	const [loaded, setLoaded] = useState(false);
	const [update, setUpdate] = useState(false);
	const [editedAppointment, setEditedAppointment] = useState({});

	useEffect(() => {
		const url = `/api/v1/appointments/${slug}`;
		const config = {
			headers: { Authorization: authorizationToken }
		}
		axios.get(url, config)
			.then ( response => {
				setAppointment(response.data.data)
				setLoaded(true);
			})
			.catch( response => console.log(response))
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
		const config = {
			headers: { Authorization: authorizationToken }
		}
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
			.catch(error => {
				console.log(error);
			});
	}

	return (
		<section className="show-appointment">
			{ loaded &&
				<div className="appointment-card">
					{!update ?
					<ViewAppointment {...{appointment, FontAwesomeIcon, showEdit}}/>
					:
					<UpdateAppointment {...{hideEdit, handleChange, handleUpdate, editedAppointment, appointment}}/>
					}
				</div>
			}
		</section>
	)
}

export default ShowAppointment;
