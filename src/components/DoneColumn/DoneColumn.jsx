import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Filter } from '../Filter/Filter';
import { ItemHeader } from '../ItemHeader/ItemHeader';
import Items from '../Items/Items';
import './DoneColumn.css';

export const DoneColumn = ({ handleDeleteTodoItem, listItems }) => {
	const [ filteredItems, setFilteredItems ] = useState(listItems);

	return (
		<div className="done-column">
			<ItemHeader label="DONE" />
			<div className="empty-space" />
			<div className="done-items-container">
				<Filter listItems={listItems} setFilteredItems={setFilteredItems} />
				<Droppable droppableId="completed">
					{provided => (
						<div className="items-wrapper" {...provided.droppableProps} ref={provided.innerRef}>
							<Items handleDeleteTodoItem={handleDeleteTodoItem} listItems={filteredItems} />
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</div>
		</div>
	);
};
