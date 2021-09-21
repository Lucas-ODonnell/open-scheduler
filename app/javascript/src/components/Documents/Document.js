import React from 'react';

const Document = ({title, description, file}) => {
	return (
		<div className="each-file">
			<div className="file-header">
				<h2>{title}</h2>
			</div>
			<div className="file-body">
				<p>{description}</p>
				<div className="file-download">
					<a href={file} download>Download</a>
				</div>
			</div>
		</div>
	)
}

export default Document;
