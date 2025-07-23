// src/App.jsx
import React from 'react';
import useStore from './stores/store';

function App() {
  // Access count state and actions from Zustand store using the hook
  const { count, increase, reset } = useStore();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Zustand Counter Example</h1>

      {/* Display the current count */}
      <h2>Count: {count}</h2>

      {/* Button to increase count */}
      <button onClick={increase} style={{ marginRight: 10 }}>Increase</button>

      {/* Button to reset count */}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
