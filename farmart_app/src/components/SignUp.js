import React, { useState } from 'react';
import { toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './SignUp.css';

function SignUp() {
  const [credentials, setCredentials] = useState({ username: '', password: '', email: '', role: 'user' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://farmart-backend-3.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      if (response.ok) {
        toast.success('Registration successful!🎉 Proceeding to Login', {position:"top-center"});
        navigate('/login');
      } else {
        throw new Error(data.message || 'Server error');
      }
    } catch (error) {
      toast.error('Registration failed  🚩', {position:"top-center"});
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="background-image">
      <div className="signup-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h1>Sign Up</h1>
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
            type="email" 
            name="email" 
            placeholder="Email" 
            value={credentials.email} 
            onChange={handleChange} 
            required 
            autoComplete="email"
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <select name="role" value={credentials.role} onChange={handleChange} autoComplete="role">
            <option value="user">User</option>
            <option value="farmer">Farmer</option>
          </select>
          <button type="submit">Sign Up</button>
          <p className="login-link">Already have an account? <span className="login-link-text" onClick={() => navigate('/login')}>Log in</span></p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
