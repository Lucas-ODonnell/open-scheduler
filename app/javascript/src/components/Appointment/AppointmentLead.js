import React from 'react'

const AppointmentLead = ({lead,showLead}) => {
	if (!showLead || Object.keys(lead).length === 0) return null;
	return (
		<div className="show-lead">
			<div className="lead-container">
				<div className="name-row">
					<div>
					<span>Name:</span> {lead.attributes.name}
					</div>
					<div>
					<span>Position:</span> {lead.attributes.position}
					</div>
				</div>
				<div className="lead-notes">
					<span>Notes:</span> {lead.attributes.notes}
				</div>
			</div>
		</div>
	)
}

export default AppointmentLead;
