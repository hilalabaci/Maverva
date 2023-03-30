import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import "./styles.css";

function Login() {
  const [login, setLogin] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    email: undefined,
    password: undefined,
  });
  function handleChange(event) {
    const { value, name } = event.target;
    setLogin((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (login.fullName === "") {
      setError({
        password: undefined,
        email: "Please enter your email",
      });
      return;
    }
    const { email, password } = login;
    const registerData = { email, password };
    const response = await fetch("http://127.0.0.1:3001/login", {
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
            <h2>Sign in</h2>
            <Input
              title="Email Address"
              type="text"
              placeholder="Enter your email address "
              value={login.email}
              onChange={handleChange}
              name="email"
              error={error.email}
            />
            <Input
              title="Password"
              type="password"
              placeholder="Enter your password "
              value={login.password}
              onChange={handleChange}
              name="password"
              error={error.password}
            />
            <Button value="SIGN IN" type="submit" />

            <div>
              <p>Have already an account Login here</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
