import React from 'react';

const Lead = ({setCurrent, name, company, position, phone, email, referrer, id, handleDelete, setUpdateModal, FontAwesomeIcon, global}) => {
	return (
		<div className="lead-card card-effect">
			<div className="delete-button">
				<button onClick={()=> {global.setShowWarning(true); global.setDeleteFunction(()=>()=> handleDelete(id))}}><FontAwesomeIcon  icon="trash" /></button>
				<button onClick={()=>{setUpdateModal(true); setCurrent(id);}}><FontAwesomeIcon icon="edit" /></button>
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
