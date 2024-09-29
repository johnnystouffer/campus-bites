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
        <h1>Register</h1>
        <form className="form-container" onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input 
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submit" id="register" type="submit">Onwards!</button>
        </form>
        </div>
    </div>
  );
}

export default Register;
