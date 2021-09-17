import React from 'react';

const UpdateLead = ({onClose, updateModal, handleUpdateChange, handleUpdateSubmit, updateLead}) => {
	if (!updateModal) return null;
	return (
		<div className="modal-background">
			<div className="lead-modal">
				<div className="modal-content">
					<div className="header">
						<div>
							<h2>Update Lead</h2>
						</div>
						<div className="close-button">
							<button onClick={onClose}>&times;</button>
						</div>
					</div>
					<form onSubmit={handleUpdateSubmit} className="lead-form">
						<div className="field">
							<label>Name: </label>
							<input onChange={handleUpdateChange} type="text" name="name" value={updateLead.name} placeholder="Name" />
						</div>
						<div className="field">
							<label>Company: </label>
							<input onChange={handleUpdateChange} type="text" name="company" value={updateLead.company} placeholder="Company" />
						</div>
						<div className="field">
							<label>Position: </label>
							<input onChange={handleUpdateChange} type="text" name="position" value={updateLead.position} placeholder="Position" />
						</div>
						<div className="field">
							<label>Phone: </label>
							<input  onChange={handleUpdateChange} type="text" name="phone" value={updateLead.phone} placeholder="Phone" />
						</div>
						<div className="field">
							<label>Email: </label>
							<input  onChange={handleUpdateChange} type="email" name="email" value={updateLead.email} placeholder="Email" />
						</div>
						<div className="field">
							<label>Referrer: </label>
							<input onChange={handleUpdateChange} type="text" name="referrer" value={updateLead.referrer} placeholder="Referrer" />
						</div>
						<button className='submit' type='submit'>Update</button>
					</form>
				</div>
			</div>
		</div>
	)
} 

export default UpdateLead;
