import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Item from '../Item/Item';
import './Items.css';

const Items = ({ handleDeleteTodoItem, listItems }) => {
	return (
		<div className="items">
			{listItems.map((todo, index) => (
				<Draggable key={todo.id} draggableId={todo.id} index={index}>
					{provided => (
						<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
							<Item todoItem={todo} handleDeleteTodoItem={handleDeleteTodoItem} />
						</div>
					)}
				</Draggable>
			))}
		</div>
	);
};

export default Items;
