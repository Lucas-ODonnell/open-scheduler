import React from 'react';
import Dropzone from 'react-dropzone';

const FileUploader = ({fileInfo, handleInputChange, file, onFileSelection, handleSubmit, errorMessage}) => {
	return (
		<div className="file-uploader card-effect">
			<form onSubmit={handleSubmit}>
				<div className="form-input">
					<label>Title</label>
					<input onChange={handleInputChange} type="text" name="title" value={fileInfo.title} placeholder="Title"/>
					{errorMessage !== undefined && errorMessage.includes("Title")
					?
					<span className="input-error">{errorMessage}</span >
					:
					null
					}
				</div>
				<div className="form-input">
					<label>Description</label>
					<input onChange={handleInputChange} type="text" name="description" value={fileInfo.description} placeholder="description"/>
					{errorMessage !== undefined && errorMessage.includes("Description")
					?
					<span className="input-error">{errorMessage}</span >
					:
					null
					}
				</div>
				<div className="upload-section">
					<Dropzone onDrop={onFileSelection}>
						{({ getRootProps, getInputProps }) => (
							<div {...getRootProps({ className: 'drop-zone' })} >
								<input {...getInputProps()} />
								<div className="file-selector">
									<div>
										<p className="button-like">File</p>
									</div>
									<div>
										{errorMessage !== undefined && errorMessage.includes("File")
										?
										<span className="input-error error-position">{errorMessage}</span >
										:
										null
										}
									</div>
								</div>
								{file && (
									<div className="selected-file">
										<strong>Selected file:</strong> {file.name}
									</div>
								)}
							</div>
						)}
					</Dropzone>
				</div>
				<button className="file-submitter">Upload</button>
			</form>
		</div>
	)
}

export default FileUploader;
