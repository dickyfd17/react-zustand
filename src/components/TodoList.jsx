// src/TodoList.js
import React from 'react';

export default function TodoList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
