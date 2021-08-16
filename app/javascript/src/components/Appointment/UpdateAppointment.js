import React from 'react';

const UpdateAppointment = ({hideEdit, handleChange, handleUpdate, editedAppointment, appointment}) => (
	<div className="update-appointment">
		<div className="exit">
			<button onClick={hideEdit}>&times;</button>
		</div>
		<h2>Update {appointment.attributes.company_name}</h2>
		<form onSubmit={handleUpdate}>
			<div className="field">
				<label>Address:</label>
				<input onChange={handleChange} value={editedAppointment.street_address} type="text" name="street_address"  />
			</div>
			<div className="city-info">
				<div className="field">
					<label>City:</label>
					<input onChange={handleChange} value={editedAppointment.city} type="text" name="city"  />
				</div>
				<div className="field">
					<label>State:</label>
					<input onChange={handleChange} value={editedAppointment.state} type="text" name="state"  />
				</div>
				<div className="field">
					<label>Zipcode:</label>
					<input onChange={handleChange} value={editedAppointment.zipcode} type="number" name="zipcode"  />
				</div>
			</div>
			<div className="country-row">
				<div className="field">
					<label>Country:</label>
					<input onChange={handleChange} value={editedAppointment.country} type="text" name="country" />
				</div>
				<div className="field">
					<label>Contact:</label>
					<input onChange={handleChange} value={editedAppointment.company_contact} type="text" name="company_contact" />
				</div>
			</div>
			<div className="contact-information">
				<div className="field">
					<label>Phone:</label>
					<input onChange={handleChange} value={editedAppointment.phone} type="text" name="phone" />
				</div>
				<div className="field">
					<label>Email:</label>
					<input onChange={handleChange} value={editedAppointment.email} type="email" name="email" />
				</div>
				<div className="field">
					<label>Meeting:</label>
					<input onChange={handleChange} value={editedAppointment.meeting_date} type="datetime-local" name="meeting_date" />
				</div>
			</div>
			<div className="field">
				<div>
					<label>Notes:</label>
					<textarea onChange={handleChange} value={editedAppointment.notes} type="text" name="notes" />
				</div>
			</div>
			<button className="submit update-btn" type="submit">Update</button>
		</form>
	</div>
)

export default UpdateAppointment;
