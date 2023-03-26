import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="Register-container">
      <div className="brand-container">
        <img src="/icons/brand.png" alt="" />
        <h1>PROCESS</h1>
      </div>
      <div className="form-container">
        <form className="register-form" action="" method="post">
          <div className="Register-inputs-container">
            <h2>Registration</h2>
            <span>Full Name</span>
            <input
              className="inputs"
              type="text"
              placeholder="Enter your fullname"
            />
            <span>Email Address</span>
            <input
              className="inputs"
              type="email"
              placeholder="Enter your email address"
            />
            <span>Password</span>
            <input
              className="inputs"
              type="password"
              placeholder="Enter your password"
            />
            <span>Confirm Password</span>
            <input
              className="inputs"
              type="password"
              placeholder="Confirm your password"
            />
            <input className="inputs-button" type="button" value="JOIN NOW" />
            <div>
              <p>Have already an account Login here</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
