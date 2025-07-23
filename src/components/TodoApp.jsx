// src/TodoApp.jsx
import React, { useState } from 'react';
import useTodoStore from '../stores/storeToDo';

function TodoApp() {
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const [input, setInput] = useState('');

  // Handle adding a new todo item
  const handleAdd = () => {
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo task"
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}{' '}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
