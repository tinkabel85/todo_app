import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const todosArr = JSON.parse(localStorage.getItem("todos"));
		if (!todos) {
			return [];
		}
		if (todosArr.length) {
			setTodos(todosArr);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);



	const sortByPriority = (todos) => {
		let done = false;
		while (!done) {
			done = true;
			for (let i = 1; i < todos.length; i++) {
				if (todos[i - 1].priority > todos[i].priority) {
					done = false;
					let temp = todos[i - 1];
					todos[i - 1] = todos[i];
					todos[i] = temp;
				}
			}
		}
		//setTodos([...todos]);
		console.log(todos);
		return todos;
	};

	return (
		<>
			<div className="Container">
				<header>
					<h1 className="Title">Todo List </h1>
				</header>
				<TodoForm addTodo={(todo) => setTodos([...todos, todo])} />
				<TodoList todos={todos} setTodos={setTodos} />
				<button
					onClick={() => setTodos(sortByPriority([...todos]))}
					className="Button--sort"
				>
					Sort Tasks
				</button>
			</div>
		</>
	);
}

export default App;
