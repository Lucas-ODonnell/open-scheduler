import React from 'react';

const Lead = ({setCurrent, name, company, position, phone, email, referrer, notes, id, handleDelete, setUpdateModal, FontAwesomeIcon, global}) => {
	return (
		<div className="lead-card">
			<div className="delete-button">
				<button onClick={()=> {global.setShowWarning(true); global.setDeleteFunction(()=>()=> handleDelete(id))}}><FontAwesomeIcon  icon="trash" /></button>
				<button onClick={()=>{setUpdateModal(true); setCurrent(id);}}><FontAwesomeIcon icon="edit" /></button>
			</div>
			<div className="lead-name">
				<div className="attribute">
					<h2 className="this-name">{name}</h2>
				</div>
			</div>
			<div className="lead-company-position">
				<div className="attribute">
					<span>Company:</span> {company}
				</div>
				<div className="attribute">
					<span>Position:</span> {position}
				</div>
			</div>
			<div className="lead-contacts">
				<div className="attribute">
					<span>Phone:</span> {phone}
				</div>
				<div className="attribute">
					<span>Email:</span> {email}
				</div>
			</div>
			<div className="attribute">
				<span>Refererrer:</span> {referrer}
			</div>
			<span>Notes:</span> {notes}
		</div>
	)
}
export default Lead;
