import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './Warning.css';

const Warning = () => {
	const global = useContext(AppContext);
	if (!global.showWarning) {
		return (
			<div>
			</div>
		)
	};
	return (
		<div className="modal-background">
			<div className="warning-card">
				<div className="warning-header">
				</div>
				<div className="warning-container">
					<div className="warning-message">
						<p>Are you sure you want to delete? There is no going back!</p>
					</div>
					<div className="options">
						<button onClick={()=> global.setShowWarning(false)} className="warning-cancel">Cancel</button>
						<button onClick={()=> {global.deleteFunction();  global.setShowWarning(false);}} className="warning-confirm">Delete</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Warning;
