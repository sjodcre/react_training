import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div>
			<input 
				className = 'pa3 ba bg-lightest-blue b--green'
				type='search' 
				placeholder='search robots'
				onChange ={searchChange}
			/>
		</div>
	);
}

export default SearchBox;