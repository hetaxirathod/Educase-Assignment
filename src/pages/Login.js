import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function LoginScreen() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here (e.g., validation, API call)
    // For now, just redirect to profile page
    navigate('/profile');
  };

  return (
    <div className="login-container">
      <h2>Sign in to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <input type="email" placeholder="Enter email address" />
      <input type="password" placeholder="Enter password" />
      <button className="login-btn" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginScreen;

