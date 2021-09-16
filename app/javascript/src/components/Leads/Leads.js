import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppContext from '../../context/AppContext';
import Lead from './Lead';
import CreateLead from './CreateLead';
import UpdateLead from './UpdateLead';
import './Leads.css';

const Leads = () => {
	const global = useContext(AppContext);
	const FontAwesomeIcon = global.FontAwesomeIcon;
	const config = {
		headers: { Authorization: global.authorizationToken }
	}
	const [createModal, setCreateModal] = useState(false);
	const [updateModal, setUpdateModal] = useState(false);
	const [leads, setLeads] = useState([]);
	const [newLead, setNewLead] = useState({
		name: "",
		company: "",
		position: "",
		phone: "",
		email: "",
		referrer: ""
	})

	const [updateLead, setUpdateLead] = useState({
		name: "",
		company: "",
		position: "",
		phone: "",
		email: "",
		referrer: ""
	})

	const [current, setCurrent] = useState();

	useEffect(() => {
		axios.get('/api/v1/leads.json', config)
			.then( response => {
				setLeads(response.data.data);
			})
			.catch( response => {
				console.log(response)
			})
	}, [updateModal])

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
				setCreateModal(false);
			})
			.catch(response => {
				global.setError(response.response.data[0]);
				global.flashError();
			});
	}

	const handleUpdateChange = (e) => {
		e.preventDefault();
		setUpdateLead({...updateLead, [e.target.name]: e.target.value})
	}

	const handleUpdateSubmit = (e) => {
		e.preventDefault();
		const edited = Object.fromEntries(
			Object.entries(updateLead).filter(([key, value]) => value !== ""))
		if (Object.keys(edited).length === 0) {
			setUpdateModal(false);
			return;
		}
		axios.put(`api/v1/leads/${current}`, edited, config)
			.then(response => {
				setUpdateLead({
					name: "",
					company: "",
					position: "",
					phone: "",
					email: "",
					referrer: ""
				})
				setUpdateModal(false);
			})
			.catch(response => {
				global.setError(response.response.data[0]);
				global.flashError();
			})
	}

	const handleDelete = (id) => {
			axios.delete(`/api/v1/leads/${id}`, config)
				.then(response => {
					setLeads(leads.filter(object => object.id !== id))
				})
	}

	const indexLeads = leads.map((lead, index) => {
		const { name, company, position, phone, email, referrer } = lead.attributes;
		const id  = lead.id;
		return (
			<Lead key={index} {...{setCurrent,name, company, position, phone, email, referrer, id, handleDelete, setUpdateModal, FontAwesomeIcon, global}} />
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
			<UpdateLead onClose={()=> setUpdateModal(false)} {...{updateModal, handleUpdateChange, handleUpdateSubmit, updateLead}} />
			<div className="all-leads">
				{indexLeads}
			</div>
		</section>
	)
}

export default Leads;
