// src/storeTodo.js
import { create } from 'zustand';

// Zustand store to manage a todo list
const useTodoStore = create((set) => ({
  todos: [], // List of todo items

  // Add a new todo item
  addTodo: (task) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), task }],
    })),

  // Remove a todo item by id
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useTodoStore;
