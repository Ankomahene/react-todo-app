import React, { useState } from 'react';
import { PlusIcon } from '../../icons/icons';
import './AddTodo.css';
import { v4 as uid } from 'uuid';

const AddTodo = ({ handleAddTodoItem, error }) => {
	const [ todo, setTodo ] = useState('');

	const handleAddTodo = () => {
		handleAddTodoItem({ id: uid(), text: todo, status: 'pending' });
		setTodo('');
	};

	const handleKeyUpEvent = event => {
		if (event.keyCode === 13) {
			handleAddTodo();
		}
	};

	return (
		<div className="add-todo">
			{error && <p className="error">{error}</p>}
			<input
				type="text"
				placeholder="Enter todo here"
				value={todo}
				onChange={e => setTodo(e.target.value)}
				onKeyUp={handleKeyUpEvent}
			/>
			<button type="submit" onClick={handleAddTodo}>
				<PlusIcon />
			</button>
		</div>
	);
};

export default AddTodo;
