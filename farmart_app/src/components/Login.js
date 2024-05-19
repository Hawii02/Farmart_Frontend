import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '', role: 'user' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.access_token); // Save the token
        if (credentials.role === 'farmer') {
          navigate('/farmer-dashboard'); // Redirect to the farmer dashboard
        } else {
          navigate('/home'); // Redirect to the home page
        }
      } else {
        throw new Error(data.message || 'Server error');
      }
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className="background-image">
      <div className="auth-container">
        <form onSubmit={handleSubmit} className="auth-form">
          <h1>Login</h1>
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={credentials.username} 
            onChange={handleChange} 
            required 
            autoComplete="username" 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={credentials.password} 
            onChange={handleChange} 
            required 
            autoComplete="current-password" 
          />
          <select name="role" value={credentials.role} onChange={handleChange} autoComplete="role">
            <option value="user">User</option>
            <option value="farmer">Farmer</option>
          </select>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;