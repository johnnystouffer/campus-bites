import React from 'react';
import './Login.css'; // Make sure to create a separate CSS file

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Enter Username" name="username" required />
        <input type="password" placeholder="Enter Password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;