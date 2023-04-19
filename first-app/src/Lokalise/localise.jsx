import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleToggle(id) {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTodo = { id: Date.now(), task: event.target.task.value, completed: false };
    setTodos(prevTodos => [...prevTodos, newTodo]);
    event.target.task.value = '';
  }

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => handleToggle(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.task}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoList;