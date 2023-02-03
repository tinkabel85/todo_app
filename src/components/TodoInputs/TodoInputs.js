function TodoInputs(props) {
    
    const onSubmit = e => {
        e.preventDefault();
    };

    return (
			<form>
				<input type='text'/>
				<input type='submit' value='Add'/>
			</form>
		);
}

export default TodoInputs;