import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './SignUp.css';

function SignUp() {
  const [inputs, setInputs] = useState({ username: '', password: '', email: '', role: 'user' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      });
      const data = await response.json();
      if (response.ok) {
        alert('Registration successful! Proceeding to Login ');
        navigate('/login'); // Redirect to Login after successful registration
      } else {
        throw new Error(data.message || 'Server error');
      }
    } catch (error) {
      alert('Registration failed: ' + error.message);
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
            value={inputs.username} 
            onChange={handleChange} 
            required 
            autoComplete="username"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={inputs.email} 
            onChange={handleChange} 
            required 
            autoComplete="email"
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={inputs.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <select name="role" value={inputs.role} onChange={handleChange} autoComplete="role">
            <option value="user">User</option>
            <option value="farmer">Farmer</option>
          </select>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;