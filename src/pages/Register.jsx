import React from "react";
import Input from "../components/input";
import Button from "../components/button";
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
            <Input
              title="Full Name"
              type="text"
              placeholder="Enter your fullname "
            />
            <Input
              title="Email Address"
              type="text"
              placeholder="Enter your email address "
            />
            <Input
              title="Password"
              type="text"
              placeholder="Enter your password "
            />
            <Input
              title="Confirm Password"
              type="text"
              placeholder="Confirm your password"
            />
            <Button value="JOIN NOW" />

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
