import { useState } from "react";
import "./TodoForm.css";

function TodoForm(props) {
	const [inputText, setInputText] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [priority, setPriority] = useState(3);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputText === "" || !dueDate) {
			return alert("Task or due date cannot be empty");
		}
		console.log(inputText, dueDate, priority);
		props.addTodo({ title: inputText, dueDate: dueDate, priority: priority });

		setInputText("");
		setDueDate("");
		setPriority("");
	};

	return (
		<form onSubmit={handleSubmit} className="form">
			<input
				value={inputText}
				type="text"
				className="todo__input"
				placeholder="Task to be done.."
				onInput={(e) => setInputText(e.target.value)}
			/>
			<input
				type="date"
				value={dueDate}
				min="2023-01-01"
				className="dueDate"
				onInput={(e) => setDueDate(e.target.value)}
			/>
			<select
				name=""
				defaultValue={'3'}
				className="priority"
				onInput={(e) => setPriority(parseInt(e.target.value))}
			>
				<option value="1">High</option>
				<option value="2">Medium</option>
				<option value="3">Low</option>
			</select>
			<input type="submit" value="Add task" className="form__btn" />
		</form>
	);
}

export default TodoForm;
