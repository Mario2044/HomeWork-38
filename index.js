const todoList = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodo');
const addTodoButton = document.getElementById('addTodo');

function handleTodoChange(event) {
	if (event.target.tagName === 'INPUT') {
		console.log('Checkbox state changed');
	}
}

function handleFormSubmit(event) {
	event.preventDefault(); 
	const newTodoText = newTodoInput.value.trim(); 
	if (newTodoText !== '') {
		const newTodo = document.createElement('li');
		newTodo.innerHTML = `<input type="checkbox">${newTodoText}`;
		todoList.appendChild(newTodo); 
		newTodoInput.value = ''; 
	}
}

todoList.addEventListener('change', handleTodoChange);
addTodoButton.addEventListener('click', handleFormSubmit);