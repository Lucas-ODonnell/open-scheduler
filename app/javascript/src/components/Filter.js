import React from 'react';

const Filter = ({handleFilterChange, filter, string}) => {
	return (
		<div className="filter">
			<div>
			<input onChange={handleFilterChange} value={filter } placeholder={`Filter ${string}`}/>
			</div>
		</div>
	)
}

export default Filter;
