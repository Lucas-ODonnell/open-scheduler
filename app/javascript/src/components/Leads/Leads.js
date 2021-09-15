import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppContext from '../../context/AppContext';
import Lead from './Lead';
import CreateLead from './CreateLead';
import './Leads.css';

const Leads = () => {
	const global = useContext(AppContext);
	const FontAwesomeIcon = global.FontAwesomeIcon;
	const config = {
		headers: { Authorization: global.authorizationToken }
	}
	const [createModal, setCreateModal] = useState(false);
	const [leads, setLeads] = useState([]);
	const [newLead, setNewLead] = useState({
		name: "",
		company: "",
		position: "",
		phone: "",
		email: "",
		referrer: ""
	})

	useEffect(() => {
		axios.get('/api/v1/leads.json', config)
			.then( response => {
				setLeads(response.data.data);
			})
			.catch( response => {
				console.log(response)
			})
	}, [])

	const handleChange = (e) => {
		e.preventDefault();
		setNewLead({...newLead, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('/api/v1/leads', newLead, config)
			.then(response => {
				setLeads([...leads, response.data.data])
				setNewLead({
					name: "",
					company: "",
					position: "",
					phone: "",
					email: "",
					referrer: ""
				})
				//more shit will go here
				setCreateModal(false);
			})
			.catch(response => {
				global.setError(response.response.data[0]);
				global.flashError();
			});
	}

	const indexLeads = leads.map((lead, index) => {
		const { name, company, position, phone, email, referrer } = lead.attributes;
		return (
			<Lead key={index} {...{name, company, position, phone, email, referrer, FontAwesomeIcon}} />
		)
	})

	return (
		<section>
			<div className="leads-header">
				<h1>Leads</h1>
			</div>
			<div className="new-lead">
				<button className="modal-button" onClick={()=> setCreateModal(true)}>New Lead</button>
				<CreateLead onClose={()=> setCreateModal(false)} {...{createModal, handleChange, handleSubmit, newLead}} />
			</div>
			<div className="all-leads">
			{indexLeads}
			</div>
		</section>
	)
}

export default Leads;
