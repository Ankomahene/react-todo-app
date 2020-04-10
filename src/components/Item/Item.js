import React from 'react';
import './Item.css';

const Item = (props) => {
	return (
		<div className="item">
			<div className="item-content">
				<span className="position">{props.position + 1}</span>
				<span>{props.todo}</span>
			</div>
			<div>
				<button
					type="button"
					onClick={(e) => {
						props.handleDeleteItem(props.todo);
					}}
				>
					X
				</button>
			</div>
		</div>
	);
};

export default Item;
