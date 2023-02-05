/* eslint-disable default-case */

import "./TodoItem.css";

function TodoItem(props) {
	const { deleteItem, todo } = props;

    function mapPriority(value) {
        let valueText;
		switch (value) {
			case "1":
				valueText = "High";
				break;
			case "2":
				valueText = "Medium";
				break;
			case "3":
				valueText = "Low";
				break;
        }
        return valueText;
	}
	return (
		<div className="todo__item">
			<input type="checkbox" />
			<li>
				<div className="todo__item--title">{todo.title}</div>
				<div className="todo__item--date">{todo.dueDate}</div>
				<div className="todo__item--priority">{mapPriority(todo.priority)}</div>
			</li>
			<button onClick={() => deleteItem(todo)}>X</button>
		</div>
	);
}

export default TodoItem;
