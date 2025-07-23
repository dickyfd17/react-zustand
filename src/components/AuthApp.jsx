// src/AuthApp.jsx
import React from 'react';
import useAuthStore from '../stores/storeAuth';

function AuthApp() {
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Authentication Example</h2>

      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button
            onClick={() => login({ id: 1, name: 'John Doe' })}
          >
            Login as John Doe
          </button>
        </>
      )}
    </div>
  );
}

export default AuthApp;
