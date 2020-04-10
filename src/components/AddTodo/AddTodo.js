import React, { Component } from 'react';
import './AddTodo.css';

class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: undefined
		};
	}

	handleAddItem = (e) => {
		e.preventDefault();

		const item = e.target.elements.newItem.value.trim();
		const error = this.props.handleAddItem(item);

		this.setState(() => ({ error }));

		e.target.elements.newItem.value = '';
	};
	render() {
		return (
			<div className="add-todo">
				{this.state.error && <p className="error">{this.state.error}</p>}
				<form onSubmit={this.handleAddItem}>
					<input type="text" name="newItem" id="newTodo" placeholder="enter todo here" />
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}

export default AddTodo;
