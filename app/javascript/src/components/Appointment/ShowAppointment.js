import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../../context/AppContext';
import ViewAppointment from './ViewAppointment';
import UpdateAppointment from './UpdateAppointment';
import './appointment.css';

const ShowAppointment = () => {
	const global = useContext(AppContext)
	const FontAwesomeIcon = global.FontAwesomeIcon;
	const { slug } = useParams();
	const [appointment, setAppointment] = useState({});
	const [loaded, setLoaded] = useState(false);
	const [update, setUpdate] = useState(false);
	const [editedAppointment, setEditedAppointment] = useState({});

	useEffect(() => {
		const url = `/api/v1/appointments/${slug}`;
		const config = {
			headers: { Authorization: global.authorizationToken }
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
			headers: { Authorization: global.authorizationToken }
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
			.catch(response => {
				global.setError(response.response.data[0]);
				global.flashError();
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
