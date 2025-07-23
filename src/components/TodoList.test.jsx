import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('renders todo list items', () => {
  const items = ['Learn Jest', 'Write tests', 'Run tests'];
  render(<TodoList items={items} />);
  items.forEach(item => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });
});
