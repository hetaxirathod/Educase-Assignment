import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="content">
        <h2 className="heading">Welcome to PopX</h2>
        <p className="subText">
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit.
        </p>
        <button className="createBtn" onClick={() => navigate('/Signup')}>
          Create Account
        </button>
        <button className="loginBtn" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
