import React, { useEffect, useState } from 'react';
import { SearchIcon } from '../../icons/icons';
import './Filter.css';

export const Filter = ({ listItems, setFilteredItems }) => {
	const [ searchText, setSearchText ] = useState('');

	useEffect(
		() => {
			setFilteredItems(listItems.filter(item => item.text.toLowerCase().includes(searchText.toLowerCase())));
		},
		[ searchText, listItems, setFilteredItems ]
	);

	return (
		<div className="filter-sort">
			<small>Filter Items</small>
			<div className="filter">
				<input
					type="text"
					placeholder="search..."
					value={searchText}
					onChange={e => setSearchText(e.target.value)}
				/>
				<button>
					<SearchIcon />
				</button>
			</div>
		</div>
	);
};
