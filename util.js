const toggleTodo = (
	todos,
	todoid
) => {
	return todos.map((todo) =>
		todo.id === todoid
			? {
					...todo,
					status:
						todo.status ===
						"ACTIVE"
							? "COMPLETE"
							: "ACTIVE",
			  }
			: todo
	);
};
const deleteTodo = (
	todos,
	todoid
) => {
	return todos.filter(
		(todo) => todo.id !== todoid
	);
};

const searchTodos = (
	todos,
	search
) => {
	return todos.filter(
		(todo) =>
			todo.text.indexOf(
				search
			) !== -1
	);
};
const filterTodos = (
	todos,
	filter
) => {
	switch (filter) {
		case "ACTIVE":
		case "COMPLETE": {
			return todos.filter(
				(todo) =>
					todo.status ===
					filter
			);
		}
		default:
			return todos;
	}
};

// PURE FUNCTION

module.exports = {
    toggleTodo
}