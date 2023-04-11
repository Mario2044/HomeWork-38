const todoList = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodo');
const addTodoButton = document.getElementById('addTodo');

// Обработчик события изменения состояния checkbox
function handleTodoChange(event) {
	if (event.target.tagName === 'INPUT') {
		console.log('Checkbox state changed');
	}
}

// Обработчик события отправки формы
function handleFormSubmit(event) {
	event.preventDefault(); // отменяем действие по умолчанию
	const newTodoText = newTodoInput.value.trim(); // получаем текст новой задачи и удаляем пробелы
	if (newTodoText !== '') {
		// Создаем новый элемент списка
		const newTodo = document.createElement('li');
		newTodo.innerHTML = `<input type="checkbox">${newTodoText}`;
		todoList.appendChild(newTodo); // добавляем новый элемент в список
		newTodoInput.value = ''; // очищаем поле ввода
	}
}

// Добавляем обработчики событий
todoList.addEventListener('change', handleTodoChange);
addTodoButton.addEventListener('click', handleFormSubmit);