import React from 'react';
import { TrashIcon } from '../../icons/icons';
import './Item.css';

const Item = ({ todoItem, handleDeleteTodoItem }) => {
	return (
		<div className={`item ${todoItem.status === 'completed' ? 'completed' : 'pending'}`}>
			<div className="item-content">
				<span>{todoItem.text}</span>
			</div>
			<div>
				<button
					type="button"
					onClick={e => {
						handleDeleteTodoItem(todoItem.id, todoItem.status);
					}}
				>
					<TrashIcon />
				</button>
			</div>
		</div>
	);
};

export default Item;
