import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignupScreen.css";

function SignupScreen() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    navigate("/profile"); // redirect to Profile page
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create your <br />PopX account</h2>

        {/* 🔧 Make sure to include onSubmit here */}
        <form className="signup-form" onSubmit={handleSubmit}>
          <label>
            Full Name*
            <input type="text" placeholder="Marry Doe" required />
          </label>

          <label>
            Phone Number*
            <input type="tel" placeholder="9876543210" required />
          </label>

          <label>
            Email address*
            <input type="email" placeholder="marry@gmail.com" required />
          </label>

          <label>
            Password*
            <input type="password" placeholder="Enter password" required />
          </label>

          <label>
            Company name
            <input type="text" placeholder="Company Inc." />
          </label>

          <div className="agency-check">
            <p>Are you an Agency?*</p>
            <label><input type="radio" name="agency" value="yes" required /> Yes</label>
            <label><input type="radio" name="agency" value="no" required /> No</label>
          </div>

          <button type="submit" className="signup-btn">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default SignupScreen;
