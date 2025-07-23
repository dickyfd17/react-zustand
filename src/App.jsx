// src/App.jsx
import React from 'react';
import useStore from './stores/store';
import TodoApp from './components/TodoApp';
import AuthApp from './components/AuthApp';
import ThemeApp from './components/ThemeApp';

function App() {
  // Access count state and actions from Zustand store using the hook
  const { count, increase, reset } = useStore();

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Zustand Example</h1>

        {/* Display the current count */}
        <h2>Count: {count}</h2>

        {/* Button to increase count */}
        <button onClick={increase} style={{ marginRight: 10 }}>Increase</button>

        {/* Button to reset count */}
        <button onClick={reset}>Reset</button>
      </div>
      <TodoApp/>
      <AuthApp/>
      <ThemeApp/>
    </>
  );
}

export default App;
