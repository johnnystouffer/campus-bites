import React, { useState } from 'react';
import './Register.css';

function Register() {
  // State variables to store form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();


    // Implement your registration logic here


    // Clear form fields after submission
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='overall-container'>
    <div className="register-container">
        <h2>Register</h2>
        <form className="form-container" onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Enter Username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input 
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>
        </div>
    </div>
  );
}

export default Register;
