import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
import "./Register.css";

function Register() {
  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setRegister((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { fullName, email, password } = register;
    const registerData = { fullName, email, password };
    console.log(registerData);
    const response = await fetch("http://127.0.0.1:3001/register", {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jsonResponse = await response.json();
    if (response.status === 400) {
      console.log("Please check your details");
      return;
    }

    console.log(jsonResponse);
  };
  return (
    <div className="Register-container">
      <div className="brand-container">
        <img src="/icons/brand.png" alt="" />
        <h1>PROCESS</h1>
      </div>
      <div className="form-container">
        <form
          className="register-form"
          action=""
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="Register-inputs-container">
            <h2>Registration</h2>
            <Input
              title="Full Name"
              type="text"
              placeholder="Enter your fullname "
              value={register.fullName}
              onChange={handleChange}
              name="fullName"
            />
            <Input
              title="Email Address"
              type="text"
              placeholder="Enter your email address "
              value={register.email}
              onChange={handleChange}
              name="email"
            />
            <Input
              title="Password"
              type="password"
              placeholder="Enter your password "
              value={register.password}
              onChange={handleChange}
              name="password"
            />
            <Input
              title="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={register.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
            />
            <Button value="JOIN NOW" type="submit" />

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
