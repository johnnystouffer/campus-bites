import React, { useState } from 'react';
import './Register.css';
import api from '../../api'
import { useNavigate } from 'react-router-dom';

function Register() {
  // State variables to store form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear form fields after submission
    setUsername('');
    setPassword('');

    try {
      const response = api.post('users/register/', { username, password });
      console.log(response);
      alert("Successfully added user, please log in now");
      navigate('/login');
    } catch {
      alert("This user already exists");
    }
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
