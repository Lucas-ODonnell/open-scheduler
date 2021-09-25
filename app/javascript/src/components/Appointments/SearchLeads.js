import React from 'react';

const SearchLeads = ({leads, newAppointment, showPossibleLeads}) => {
	if (!showPossibleLeads) return null;
	const leadList = leads.filter((lead) => {
		if (newAppointment.company_contact === "" && lead.attributes.appointment_id === null) {
			return lead;
		} else if (
			lead.attributes.appointment_id === null && 
				lead.attributes.name.toLowerCase().includes(newAppointment.company_contact.toLowerCase())) 
		{
			return lead;
		}
	}).map((lead, index) => {
		return (
			<div className="lead" key={index}>
				<p>{lead.attributes.name}</p>
			</div>
		)
	})
	return (
		<div className="leads-search">
			{leadList}
		</div>
	)
}

export default SearchLeads;
