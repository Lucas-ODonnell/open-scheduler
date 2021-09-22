import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppContext from '../../context/AppContext';
import Document from './Document';
import FileUploader from './FileUploader';
import './Document.css';

const Documents = () => {
	const global = useContext(AppContext);
	const [documents, setDocuments] = useState([]);
	//fileinfo and file comprise the multipart form data
	const [file, setFile] = useState(null);
	const [fileInfo, setFileInfo] = useState({
		title: '',
		description: ''
	})

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
		const config = {
			headers: {
				Authorization: global.authorizationToken,
				'content-type': 'multipart/form-data'
			}
		}
		const formData = new FormData();
		if (file === null) {
			global.setError("A file is required");
			global.flashError();
			return;
		};
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
				global.setError(response.response.data[0]);
				global.flashError();
			})
	}

	const handleFileDelete = (id) => {
		const config = {
			headers: { Authorization: global.authorizationToken }
		}
		axios.delete(`/api/v1/documents/${id}`, config)
			.then(response => {
				console.log(response)
				setDocuments(documents.filter(document => document.id !== id))
			})
	}

	const documentList = documents.map((thisDocument, index) => {
		const { title, description, file } = thisDocument.attributes;
		const id = thisDocument.id
		return (
			<Document key={index} {...{title, description, file, id, handleFileDelete, global}} />
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
