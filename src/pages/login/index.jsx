import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import {
  BrandContainer,
  BrandIcon,
  BrandTitle,
  Form,
  FormTitle,
  GlobalStyle,
  LoginContainer,
  LoginInputs,
  MainContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
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
    console.log(login);
    if (login.email === "") {
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
    navigate("/");
  };
  return (
    <MainContainer>
      <GlobalStyle />
      <BrandContainer>
        <BrandIcon src="/icons/brand.png" alt="" />
        <BrandTitle>PROCESS</BrandTitle>
      </BrandContainer>
      <LoginContainer>
        <Form onSubmit={handleSubmit}>
          <LoginInputs>
            <FormTitle>Sign in</FormTitle>
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
          </LoginInputs>
        </Form>
      </LoginContainer>
    </MainContainer>
  );
}
export default Login;
