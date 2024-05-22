import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '', role: 'user' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://farmart-backend-6.onrender.com/login', {
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
          navigate('/farmers'); // Redirect to the farmer dashboard
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <div className="password-container">
            <input 
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required 
              autoComplete="current-password"
            />
            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <select name="role" value={credentials.role} onChange={handleChange} autoComplete="role">
            <option value="user">User</option>
            <option value="farmer">Farmer</option>
          </select>
          <button type="submit">Login</button>
          <p className="signup-link">Don't have an account? <span onClick={() => navigate('/')}>Sign up</span></p>
        </form>
      </div>
    </div>
  );
}

export default Login;


