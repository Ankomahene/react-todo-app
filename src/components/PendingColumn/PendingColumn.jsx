import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ListIcon } from '../../icons/icons';
import AddTodo from '../AddTodo/AddTodo';
import { Filter } from '../Filter/Filter';
import { ItemHeader } from '../ItemHeader/ItemHeader';
import Items from '../Items/Items';
import './PendingColumn.css';

export const PendingColumn = ({ handleAddTodoItem, handleDeleteTodoItem, listItems, error }) => {
	const [ filteredItems, setFilteredItems ] = useState(listItems);

	return (
		<div className="pending-column">
			<ItemHeader>
				<ListIcon />
			</ItemHeader>
			<AddTodo handleAddTodoItem={handleAddTodoItem} error={error} />
			<div className="pending-items list-items-container">
				<Filter listItems={listItems} setFilteredItems={setFilteredItems} />
				<Droppable droppableId="pending">
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
