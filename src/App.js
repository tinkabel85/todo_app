import './App.css';
import { useState } from 'react';
import TodoInputs from './components/TodoInputs/TodoInputs';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState(['h', '74834']);
  return (
		<>
			<TodoInputs addTodo={(todo) => [...todos, todo]} />
			<TodoList todos={todos} />
		</>
	);
}

export default App;
