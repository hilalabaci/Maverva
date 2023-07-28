import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import {
  BrandContainer,
  BrandIcon,
  BrandTitle,
  MessageError,
  Form,
  FormTitle,
  GlobalStyle,
  LoginContainer,
  LoginInputs,
  MainContainer,
  StyledLink,
} from "./styles";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const [showErrorMessage, setShowErrowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

    if (error.password) {
      setError((prev) => ({ ...prev, password: undefined }));
    }
    if (error.email) {
      setError((prev) => ({ ...prev, email: undefined }));
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(login);

    if (login.email === "") {
      setError({
        password: undefined,
        email: "Please enter your email",
      });
      setErrorMessage("Please enter your email");
      return;
    }

    if (
      /^[a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)+$/.test(
        login.email
      ) === false
    ) {
      setError({
        password: undefined,
        email: "This is not vald email address.",
      });
      return;
    }
    if (login.password === "") {
      setError({
        password: "Please enter your password",
      });
      return;
    }

    const { email, password } = login;
    const registerData = { email, password };
    const response = await fetch(process.env.REACT_APP_API_URL + "login", {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jsonResponse = await response.json();
    if (response.status === 400) {
      console.log("Please check your details");
      setShowErrowMessage(true);
      setErrorMessage(
        "Sorry, your e-mail or password was incorrect. Please double-check."
      );
      return;
    }
    console.log(jsonResponse);
    setUser(jsonResponse);
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
            {showErrorMessage && <MessageError>{errorMessage}</MessageError>}
            <Button value="SIGN IN" type="submit" />
            <div>
              <StyledLink to="/register">
                Don't have an account, register here
              </StyledLink>
            </div>
          </LoginInputs>
        </Form>
      </LoginContainer>
    </MainContainer>
  );
}
export default Login;
