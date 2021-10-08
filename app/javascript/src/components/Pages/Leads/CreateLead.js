import React from 'react';

const CreateLead = ({onClose, createModal,handleChange, handleSubmit, newLead, errorMessage}) => {
	if (!createModal) return null;
	return (
		<div className="modal-background">
			<div className="lead-modal">
				<div className="lead-content">
					<div className="header">
						<div>
							<h2>Create a New Lead</h2>
						</div>
						<div className="close-button">
							<button onClick={onClose}>&times;</button>
						</div>
					</div>
					<form className="lead-form" onSubmit={handleSubmit}>
						<div className="field">
							<label>Name: </label>
							<input onChange={handleChange} type="text" name="name" value={newLead.name} placeholder="Name" />
							{errorMessage !== undefined && errorMessage.includes("Name")
							?
								<span className="input-error">{errorMessage}</span >
								:
						null
						}
						</div>
						<div className="field">
							<label>Company: </label>
							<input onChange={handleChange} type="text" name="company" value={newLead.company} placeholder="Company" />
							{errorMessage !== undefined && errorMessage.includes("Company")
							?
								<span className="input-error">{errorMessage}</span >
								:
						null
						}
						</div>
						<div className="field">
							<label>Position: </label>
							<input onChange={handleChange} type="text" name="position" value={newLead.position} placeholder="Position" />
						</div>
						<div className="field">
							<label>Phone: </label>
							<input onChange={handleChange} type="text" name="phone" value={newLead.phone} placeholder="Phone" />
							{errorMessage !== undefined && errorMessage.includes("Phone")
							?
								<span className="input-error">{errorMessage}</span >
								:
						null
								}
						</div>
						<div className="field">
							<label>Email: </label>
							<input onChange={handleChange} type="email" name="email" value={newLead.email} placeholder="Email" />
						</div>
						<div className="field">
							<label>Referrer: </label>
							<input onChange={handleChange} type="text" name="referrer" value={newLead.referrer} placeholder="Referrer" />
							{errorMessage !== undefined && errorMessage.includes("Referrer")
							?
								<span className="input-error">{errorMessage}</span >
								:
						null
						}
						</div>
						<div className="field">
							<label>Notes: </label>
							<textarea onChange={handleChange} type="text" name="notes" value={newLead.notes} placeholder="Notes" />
						</div>

						<button className='submit' type='submit'>Submit</button>
					</form>
				</div>
			</div>
		</div>
	)
} 

export default CreateLead;
