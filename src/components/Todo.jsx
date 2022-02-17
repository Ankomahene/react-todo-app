import React, { useState } from 'react';
import './Todo.css';
import { defaultCompletedItems, defaultPendingItems } from '../mocks/todos';
import { DoneColumn } from './DoneColumn/DoneColumn';
import { PendingColumn } from './PendingColumn/PendingColumn';
import { DragDropContext } from 'react-beautiful-dnd';

const Todo = () => {
	const [ pendingItems, setPendingItems ] = useState(defaultPendingItems);
	const [ completedItems, setCompletedItems ] = useState(defaultCompletedItems);
	const [ error, setError ] = useState(undefined);
	const errorMessages = [ 'Enter todo item to add' ];

	const handleAddTodoItem = itemToAdd => {
		if (itemToAdd.text.trim() === '') {
			setError(errorMessages[0]);
			clearError();
			return;
		}
		setPendingItems([ ...pendingItems, itemToAdd ]);
	};

	const handleDeleteItem = (itemIdToRemove, status) => {
		status === 'pending'
			? setPendingItems(pendingItems.filter(todo => todo.id !== itemIdToRemove))
			: setCompletedItems(completedItems.filter(todo => todo.id !== itemIdToRemove));
	};

	const handleOnDragEnd = result => {
		const { source, destination } = result;

		if (!result.destination) return;

		if (source.droppableId === destination.droppableId) {
			source.droppableId === 'completed'
				? updateItemsFromSameSourceAndDestination(result, completedItems, setCompletedItems)
				: updateItemsFromSameSourceAndDestination(result, pendingItems, setPendingItems);
			return;
		}

		if (source.droppableId === 'pending' && destination.droppableId === 'completed') {
			updateItemsFromDifferentSourceAndDestination(
				result,
				pendingItems,
				completedItems,
				setPendingItems,
				setCompletedItems,
				'completed'
			);
			return;
		}
		updateItemsFromDifferentSourceAndDestination(
			result,
			completedItems,
			pendingItems,
			setCompletedItems,
			setPendingItems,
			'pending'
		);
	};

	const updateItemsFromSameSourceAndDestination = (dragResult, listItems, updaterFunc) => {
		const items = Array.from(listItems);
		const [ draggedItem ] = items.splice(dragResult.source.index, 1);
		items.splice(dragResult.destination.index, 0, draggedItem);
		updaterFunc(items);
	};

	const updateItemsFromDifferentSourceAndDestination = (
		dragResult,
		sourceItems,
		destinationItems,
		sourceUpdaterFunc,
		destinationUpdaterFunc,
		status
	) => {
		const sourceItemsAsList = Array.from(sourceItems);
		const [ draggedItem ] = sourceItemsAsList.splice(dragResult.source.index, 1);
		sourceUpdaterFunc([ ...sourceItemsAsList ]);

		const destinationItemsAsList = Array.from(destinationItems);
		destinationItemsAsList.splice(dragResult.destination.index, 0, { ...draggedItem, status });
		destinationUpdaterFunc([ ...destinationItemsAsList ]);
	};

	const clearError = () => {
		setTimeout(() => {
			setError(undefined);
		}, 5000);
	};

	return (
		<div className="app">
			<div className="header">
				<div>
					<h2>Keep Track of Your Daily Activities</h2>
				</div>
			</div>
			<div className="main">
				<DragDropContext onDragEnd={handleOnDragEnd}>
					<PendingColumn
						handleAddTodoItem={handleAddTodoItem}
						handleDeleteTodoItem={handleDeleteItem}
						listItems={pendingItems}
						error={error}
					/>
					<DoneColumn handleDeleteTodoItem={handleDeleteItem} listItems={completedItems} />
				</DragDropContext>
			</div>
			<footer>&copy; Mister Shadrack, 2022</footer>
		</div>
	);
};

export default Todo;
