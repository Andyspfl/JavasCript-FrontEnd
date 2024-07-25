import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // Estado para controlar si se ha iniciado sesión

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://hammerhead-app-h4qmk.ondigitalocean.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { access_token } = await response.json();
        localStorage.setItem('access_token', access_token);
        setLoggedIn(true); // Marcamos que se ha iniciado sesión con éxito
        setError(''); // Limpiamos cualquier error previo
      } else {
        const errorResponse = await response.json();
        setError(errorResponse.error);
        setLoggedIn(false); // Aseguramos que no esté marcado como iniciado sesión
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Error de red, por favor inténtalo de nuevo.');
      setLoggedIn(false); // Aseguramos que no esté marcado como iniciado sesión
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loggedIn && <p style={{ color: 'green' }}>¡Inicio de sesión exitoso!</p>}
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
