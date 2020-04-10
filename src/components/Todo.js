import React, { Component } from 'react';
import './Todo.css';
import Header from './Header/Header';
import AddTodo from './AddTodo/AddTodo';
import Items from './Items/Items';

class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: props.todos
		};
	}

	handleAddItem = (item) => {
		if (!item) {
			return 'Enter valid Item to add';
		} else if (this.state.todos.indexOf(item) > -1) {
			return 'This item already exist';
		}

		this.setState((prevState) => ({
			todos: prevState.todos.concat(item)
		}));
	};

	handleDeleteItem = (itemToRemove) => {
		this.setState((prevState) => ({
			todos: prevState.todos.filter((item) => {
				return itemToRemove !== item;
			})
		}));
	};

	render() {
		return (
			<div className="parent">
				<div className="main">
					<Header />
					<AddTodo handleAddItem={this.handleAddItem} />
					<Items handleDeleteItem={this.handleDeleteItem} todos={this.state.todos} />
				</div>
			</div>
		);
	}
}
Todo.defaultProps = {
	todos: [ 'Learn react and react native', 'Meeting with Mentee @ 7pm' ]
};

export default Todo;
