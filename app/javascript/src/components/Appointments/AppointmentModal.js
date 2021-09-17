import React from 'react';

const AppointmentModal = ({showModal, onClose, handleChange, newAppointment, handleSubmit}) => {
	if (!showModal) return null;
	return (
		<div className="modal-background">
			<div className="modal-content">
				<div className="header">
					<div>
						<h2>Create an Appointment</h2>
					</div>
					<div className="close-button">
						<button onClick={onClose}>&times;</button>
					</div>
				</div>
				<form className="appointment-form" onSubmit={handleSubmit}>
					<div className="field">
						<label>Company Name: </label>
						<input onChange={handleChange} type="text" name="company_name" value={newAppointment.company_name} placeholder="Company Name" />
					</div>
					<div className="field">
						<label>Address:</label>
						<input onChange={handleChange} type="text" name="street_address" value={newAppointment.street_address} placeholder="Main St" />
					</div>
					<div className="city-info">
						<div className="field">
							<label>City:</label>
							<input onChange={handleChange} type="text" name="city" value={newAppointment.city} placeholder="NYC" />
						</div>
						<div className="field">
							<label>State:</label>
							<input onChange={handleChange} type="text" name="state" value={newAppointment.state} placeholder="NY" />
						</div>
						<div className="field">
							<label>Zipcode:</label>
							<input onChange={handleChange} type="number" name="zipcode" value={newAppointment.zipcode}  placeholder="10001" />
						</div>
					</div>
					<div className="country-row">
						<div className="field">
							<label>Country:</label>
							<input onChange={handleChange} type="text" name="country" value={newAppointment.country} placeholder="USA" />
						</div>
						<div className="field">
							<label>Contact:</label>
							<input onChange={handleChange} type="text" name="company_contact" value={newAppointment.company_contact} placeholder="Davy Crockett" />
						</div>
					</div>
					<div className="contact-information">
						<div className="field">
							<label>Phone:</label>
							<input onChange={handleChange} type="text" name="phone" value={newAppointment.phone} placeholder="555-555-5555" />
						</div>
						<div className="field">
							<label>Email:</label>
							<input onChange={handleChange} type="email" name="email" value={newAppointment.email} placeholder="contact@company.com" />
						</div>
						<div className="field">
							<label>Meeting:</label>
							<input onChange={handleChange} type="datetime-local" name="meeting_date" value={newAppointment.meeting_date} />
						</div>
					</div>
					<div className="field">
						<label>Notes:</label>
						<textarea onChange={handleChange} type="text" name="notes" value={newAppointment.notes}/>
					</div>
					<button className='submit' type='submit'>Submit</button>
				</form>
			</div>
		</div>
	)
}

export default AppointmentModal;
