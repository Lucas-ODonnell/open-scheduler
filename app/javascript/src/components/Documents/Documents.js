import React, { useState } from 'react';
import FileUploader from './FileUploader';
import './document.css';

const Documents = () => {
	const [file, setFile] = useState(null);
	const [fileInfo, setFileInfo] = useState({
		title: '',
		description: ''
	})


	const handleInputChange = (e) => {
		e.preventDefault();
		setFileInfo({...fileInfo, [e.target.name]: e.target.value});
	}

	const onFileSelection = (files) => {
		const [uploadedFile] = files;
		setFile(uploadedFile);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
	}

	return (
		<section>
			<div className="files">
				<div className="files-header">
					<h1 className="shadow-effect">Documents</h1>
				</div>
				<div className="documents-body">
					<FileUploader {...{fileInfo, handleInputChange, file, onFileSelection}}/>
				</div>
			</div>
		</section>
	)
}

export default Documents;
