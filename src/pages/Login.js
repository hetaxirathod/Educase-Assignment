// src/pages/LoginScreen.js
import React from 'react';
import './Login.css';

function LoginScreen() {
  return (
    <div className="login-container">
      <h2>Sign in to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.</p>
      <input type="email" placeholder="Enter email address" />
      <input type="password" placeholder="Enter password" />
      <button className="login-btn">Login</button>
    </div>
  );
}

export default LoginScreen;

