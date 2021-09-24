import React from 'react';

const SearchLeads = ({leads, newAppointment}) => {
	const leadList = leads.filter((lead) => {
		if (newAppointment.company_contact === "") {
			return lead;
		} else if (lead.attributes.name.toLowerCase().includes(newAppointment.company_contact.toLowerCase())) {
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
