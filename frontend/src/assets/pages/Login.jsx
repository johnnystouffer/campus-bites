import React, { useState } from 'react';
import './Login.css';
import api from "../../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Login() {
  const navigate = useNavigate();

  // Set the username, password, and error state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // LOGGING IN
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      // get a response from the API
      const response = await api.post('users/token/', { username, password });

      // if there is no error in the response then we set the tokens
      localStorage.setItem(ACCESS_TOKEN, response.data.access);
      localStorage.setItem(REFRESH_TOKEN, response.data.refresh);

      console.log(ACCESS_TOKEN);
      console.log(REFRESH_TOKEN);

      // Redirect to the home page after successful login
      navigate('/');

    } catch (error) {
      console.error(error)
      alert("That username and password does not exist, please try again");
    }
  };

  return (
    <div className='overall-container'>
      <div className="login-container">
        <h2>Login</h2>
        <form className='form-container' onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
