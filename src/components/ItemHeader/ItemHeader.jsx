import React from 'react';
import './ItemHeader.css';

export const ItemHeader = ({ label }) => {
	return (
		<div className="item-header">
			<div className="label">{label}</div>
		</div>
	);
};
ItemHeader.defaultProps = {
	label: 'TODO'
};
