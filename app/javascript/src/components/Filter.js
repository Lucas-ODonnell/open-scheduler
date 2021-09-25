import React from 'react';

const Filter = ({handleFilterChange, filter}) => {
	return (
		<div className="filter">
			<div>
			<input onChange={handleFilterChange} value={filter } placeholder="Filter" />
			</div>
		</div>
	)
}

export default Filter;
