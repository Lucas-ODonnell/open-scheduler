import React from 'react';
import Dropzone from 'react-dropzone';

const FileUploader = ({fileInfo, handleInputChange, file, onFileSelection}) => {
	return (
		<div className="file-uploader shadow-effect">
			<form>
				<div>
					<label>Title</label>
					<input onChange={handleInputChange} type="text" name="title" value={fileInfo.title} placeholder="Title"/>
				</div>
				<div>
					<label>Description</label>
					<input onChange={handleInputChange} type="text" name="description" value={fileInfo.description} placeholder="description"/>
				</div>
				<div className="upload-section">
					<Dropzone onDrop={onFileSelection}>
						{({ getRootProps, getInputProps }) => (
							<div {...getRootProps({ className: 'drop-zone' })} >
								<input {...getInputProps()} />
								<p className="file-selector">File</p>
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
