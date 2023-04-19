import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = { id: Date.now(), title, completed: false };
    setTodos([...todos, newTodo]);
    setTitle('');
  }

  return (
    <div>
      <h1 type="header">Мои задания на сегодня</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                const newTodos = [...todos];
                const index = newTodos.findIndex(t => t.id === todo.id);
                newTodos[index] = { ...newTodos[index], completed: !newTodos[index].completed };
                setTodos(newTodos);
              }}
            />
            {todo.title}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <button type="submit">Добавить задание</button>
      </form>
    </div>
  );
}

export default TodoList;