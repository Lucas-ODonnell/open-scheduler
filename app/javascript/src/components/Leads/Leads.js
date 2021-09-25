import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppContext from '../../context/AppContext';
import Lead from './Lead';
import CreateLead from './CreateLead';
import UpdateLead from './UpdateLead';
import Filter from '../Filter';
import './Leads.css';

const Leads = () => {
	const global = useContext(AppContext);
	const string = "leads";
	const FontAwesomeIcon = global.FontAwesomeIcon;
	const config = {
		headers: { Authorization: global.authorizationToken }
	}
	const [createModal, setCreateModal] = useState(false);
	const [updateModal, setUpdateModal] = useState(false);
	const [leads, setLeads] = useState([]);
	const [errorMessage, setErrorMessage] = useState();
	const [filterLead, setFilterLead] = useState("");
	const [newLead, setNewLead] = useState({
		name: "",
		company: "",
		position: "",
		phone: "",
		email: "",
		referrer: "",
		notes: ""
	})

	const [updateLead, setUpdateLead] = useState({
		name: "",
		company: "",
		position: "",
		phone: "",
		email: "",
		referrer: "",
		notes: ""
	})

	const [current, setCurrent] = useState();

	useEffect(() => {
		axios.get('/api/v1/leads.json', config)
			.then( response => {
				setLeads(response.data.data);
			})
			.catch( response => {
				if (response.response.status === 401) global.setSignedIn(false); 
				global.setError("You have been signed out");
				global.flashError();
			})
	}, [updateModal])

	const handleChange = (e) => {
		e.preventDefault();
		setNewLead({...newLead, [e.target.name]: e.target.value})
	}

	const handleFilterChange = (e) => {
		e.preventDefault();
		setFilterLead(e.target.value);
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
					referrer: "",
					notes: ""
				})
				setCreateModal(false);
			})
			.catch(response => {
				setErrorMessage(response.response.data[0]);
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
					referrer: "",
					notes: ""
				})
				setUpdateModal(false);
			})
			.catch(response => {
				setErrorMessage(response.response.data[0]);
			})
	}

	const handleDelete = (id) => {
		axios.delete(`/api/v1/leads/${id}`, config)
			.then(response => {
				setLeads(leads.filter(object => object.id !== id))
			})
	}

	const indexLeads = leads.filter((lead) => {
		if (filterLead === "") {
			return lead;
		} else if (lead.attributes.name.toLowerCase().includes(filterLead.toLowerCase())) {
			return lead;
		}
	})
	.map((lead, index) => {
		const { name, company, position, phone, email, referrer, notes } = lead.attributes;
		const id  = lead.id;
		return (
			<Lead 
				key={index} 
				{...{setCurrent,name, company, position, phone, 
					email, referrer, notes, id, 
					handleDelete, setUpdateModal, 
					FontAwesomeIcon, global}} />
		)
	})

	return (
		<section>
			<div className="leads-header">
				<h1 className="shadow-effect">Leads</h1>
			</div>
			<div className="new-lead">
				<button className="modal-button" onClick={()=> setCreateModal(true)}>New Lead</button>
				<CreateLead 
					onClose={()=> setCreateModal(false)} 
					{...{createModal, handleChange, handleSubmit, newLead, errorMessage}} 
					/>
			</div>
			<Filter {...{handleFilterChange, filterLead, string}}/>
			<UpdateLead 
				onClose={()=> setUpdateModal(false)} 
				{...{updateModal, handleUpdateChange, handleUpdateSubmit, updateLead, errorMessage}} 
				/>
			<div className="all-leads">
				{indexLeads}
			</div>
		</section>
	)
}

export default Leads;
