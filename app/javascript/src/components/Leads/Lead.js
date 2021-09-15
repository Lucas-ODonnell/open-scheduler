import React from 'react';

const Lead = ({name, company, position, phone, email, referrer, FontAwesomeIcon}) => {
	return (
		<div className="lead-card">
			<div className="delete-button">
				<button><FontAwesomeIcon  icon="trash" size="lg" /></button>
			</div>
			<div className="row-one">
				<div className="attribute">
					<span>Name:</span>{name}
				</div>
				<div className="attribute">
					<span>Company:</span>{company}
				</div>
				<div className="attribute">
					<span>Position:</span>{position}
				</div>
			</div>
			<div className="row-two">
				<div className="attribute">
					<span>Phone:</span>{phone}
				</div>
				<div className="attribute">
					<span>Email:</span>{email}
				</div>
			</div>
			<div className="row-three">
				<div className="attribute">
					<span>Refererrer:</span>{referrer}
				</div>
			</div>
		</div>
	)
}
export default Lead;
