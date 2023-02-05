import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

function TodoList(props) {
    const { todos, setTodos } = props;
	return (
		<ul className="Todo__list">
			{todos.map((todo, i) => (
				<TodoItem key={i} todo={todo} deleteItem={(todo) => {
                    todos.splice(todos.indexOf(todo), 1);
					setTodos([...todos]);
				}} />
			))}
		</ul>
	);
}

export default TodoList;
