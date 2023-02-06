/* eslint-disable default-case */

import "./TodoItem.css";

function TodoItem(props) {
	const { deleteItem, todo } = props;

    function mapPriority(value) {
        
		switch (value) {
			case 1:
				return "High";
            case 2:
                return "Medium";
			case 3:
				return "Low";
        }
        return '';
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
