import React from 'react';
import SearchLeads from './SearchLeads';

const AppointmentModal = ({showModal, onClose, handleChange, newAppointment, handleSubmit, leads, showPossibleLeads, setShowPossibleLeads, errorMessage}) => {
	if (!showModal) return null;
	return (
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
						{errorMessage !== undefined && errorMessage.includes("Company name")
							?
								<span className="input-error">{errorMessage}</span >
								:
						null
						}
					</div>
					<div className="field">
						<label>Address:</label>
						<input onChange={handleChange} type="text" name="street_address" value={newAppointment.street_address} placeholder="Main St" />
						{errorMessage !== undefined && errorMessage.includes("Street address")
							?
								<span className="input-error">{errorMessage}</span >
								:
						null
						}
																		</div>
					<div className="multi-input">
						<div className="field">
							<label>City:</label>
							<input onChange={handleChange} type="text" name="city" value={newAppointment.city} placeholder="NYC" />
							{errorMessage !== undefined && errorMessage.includes("City")
							?
								<span className="input-error">{errorMessage}</span >
								:
						null
						}
						</div>
						<div className="field">
							<label>State:</label>
							<input onChange={handleChange} type="text" name="state" value={newAppointment.state} placeholder="NY" />
						</div>
						<div className="field">
							<label>Zipcode:</label>
							<input onChange={handleChange} type="text" name="zipcode" value={newAppointment.zipcode}  placeholder="10001" />
							{errorMessage !== undefined && errorMessage.includes("Zipcode")
							?
								<span className="input-error">{errorMessage}</span >
								:
						null
						}
						</div>
					</div>
					<div className="multi-input">
						<div className="field">
							<label>Country:</label>
							<input onChange={handleChange} type="text" name="country" value={newAppointment.country} placeholder="USA" />
							{errorMessage !== undefined && errorMessage.includes("Country")
							?
								<span className="input-error">{errorMessage}</span >
								:
						null
						}
						</div>
						<div className="field">
							<label>Contact:</label>
							<input onFocus={()=>setShowPossibleLeads(true)} 
								onBlur={()=>setShowPossibleLeads(false)} 
								onChange={handleChange} 
								type="text" name="company_contact" 
								value={newAppointment.company_contact} placeholder="Davy Crockett" autoComplete="chrome-off"
								/>
							<SearchLeads {...{leads, newAppointment, showPossibleLeads}} />
						</div>
					</div>
					<div className="multi-input">
						<div className="field">
							<label>Phone:</label>
							<input onChange={handleChange} type="text" name="phone" value={newAppointment.phone} placeholder="555-555-5555" />
							{errorMessage !== undefined && errorMessage.includes("Phone")
							?
								<span className="input-error">{errorMessage}</span >
								:
						null
						}
						</div>
						<div className="field">
							<label>Email:</label>
							<input onChange={handleChange} type="email" name="email" value={newAppointment.email} placeholder="contact@company.com" />
						</div>
						<div className="field">
							<label>Meeting:</label>
							<input onChange={handleChange} type="datetime-local" name="meeting_date" value={newAppointment.meeting_date} />
							{errorMessage !== undefined && errorMessage.includes("Meeting")
							?
								<span className="input-error">{errorMessage}</span>
								:
						null
						}
						</div>
					</div>
					<div className="field">
						<label>Notes:</label>
						<textarea onChange={handleChange} type="text" name="notes" value={newAppointment.notes}/>
					</div>
					<button className='submit' type='submit'>Submit</button>
				</form>
			</div>
	)
}

export default AppointmentModal;
