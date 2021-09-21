import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppContext from '../../context/AppContext';
import Document from './Document';
import FileUploader from './FileUploader';
import './document.css';

const Documents = () => {
	const global = useContext(AppContext);
	const [documents, setDocuments] = useState([]);
	const [file, setFile] = useState(null);
	const [fileInfo, setFileInfo] = useState({
		title: '',
		description: ''
	})

	const config = {
		headers: {
			Authorization: global.authorizationToken,
			'content-type': 'multipart/form-data'
		}
	}

	useEffect(()=> {
		const config = {
			headers: { Authorization: global.authorizationToken }
		}
		axios.get('/api/v1/documents.json', config)
			.then(response => {
				setDocuments(response.data.data);
			})
	}, [file])

	const handleInputChange = (e) => {
		e.preventDefault();
		setFileInfo({...fileInfo, [e.target.name]: e.target.value});
	}

	const onFileSelection = (files) => {
		const [uploadedFile] = files;
		setFile(uploadedFile);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('document[title]', fileInfo.title);
		formData.append('document[description]', fileInfo.description);
		formData.append('document[file]', file);
		axios.post('/api/v1/documents', formData, config)
			.then(response => {
				setFileInfo({
					title: "",
					description: ""
				})
				setFile(null);
			})
			.catch(response=> {
				global.setError(response.response.data);
				global.flashError();
			})
	}

	const documentList = documents.map((thisDocument, index) => {
		const { title, description, file } = thisDocument.attributes;
		return (
			<Document key={index} {...{title, description, file}} />
		)
	})

	return (
		<section>
			<div className="files">
				<div className="files-header">
					<h1 className="shadow-effect">Documents</h1>
				</div>
				<div className="documents-body">
					<FileUploader {...{fileInfo, handleInputChange, file, onFileSelection, handleSubmit}}/>
				</div>
			</div>
			<div className="all-documents">
				<div className="document-container shadow-effect" >
					{documentList}
				</div>
			</div>
		</section>
	)
}

export default Documents;
