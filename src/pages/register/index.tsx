import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import Button from "../../components/tools/button";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  RegisterContainer,
  Form,
  RegisterTitle,
  RegisterInputs,
  GlobalStyle,
} from "./styles";
import { StyledLink } from "../login/styles";
import Input from "../../components/tools/input";
import { UserType } from "../../types";

function Register() {
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const [approvedPasword, setApprovedPassword] = useState(false);

  interface RegisterState {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  interface ErrorState {
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }

  const [register, setRegister] = useState<RegisterState>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<ErrorState>({
    fullName: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  useEffect(() => {
    setApprovedPassword(
      register.fullName !== "" &&
        /^[a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)+$/.test(
          register.email
        ) === true &&
        error.email === undefined &&
        register.confirmPassword !== "" &&
        register.password.length >= 6 &&
        register.password === register.confirmPassword
    );
  }, [
    register.password,
    register.confirmPassword,
    register.email,
    register.fullName,
    error.email,
  ]);
  function handleChange(value: string, name: string) {
    setRegister((prevValue) => ({ ...prevValue, [name]: value }));

    if (error.password) {
      setError((prev) => ({ ...prev, password: undefined }));
    }
    if (error.email) {
      setError((prev) => ({ ...prev, email: undefined }));
    }
    if (error.fullName) {
      setError((prev) => ({ ...prev, fullName: undefined }));
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (register.fullName === "") {
      setError({
        fullName: "Please enter your full name",
      });
      return;
    }
    if (register.email === "") {
      setError({
        email: "E-mail is required",
      });
      return;
    }
    if (
      /^[a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)+$/.test(
        register.email
      ) === false
    ) {
      setError({
        password: undefined,
        email: "This is not vald email address.",
      });
      return;
    }

    if (register.password.length < 6) {
      setError({
        password: "Password must be at least 6 characters long.",
      });
      return;
    }
    if (register.password !== register.confirmPassword) {
      setError({
        confirmPassword:
          "The passwords you entered do not match. Please check and try again.",
      });
      return;
    }
    const { fullName, email, password } = register;
    const registerData = { fullName, email, password };
    const response = await fetch(process.env.REACT_APP_API_URL + "register", {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jsonResponse = (await response.json()) as UserType;
    if (response.status === 400) {
      setError(jsonResponse);
      return;
    }
    setUser(jsonResponse);
    navigate("/projects");
  };
  return (
    <MainContainer>
      <GlobalStyle />
      <RegisterContainer>
        <Form action="" method="post" onSubmit={handleSubmit}>
          <RegisterInputs>
            <RegisterTitle>Registration</RegisterTitle>
            <Input
              title="Full Name"
              type="text"
              placeholder="Enter your fullname "
              value={register.fullName}
              onChange={handleChange}
              name="fullName"
              error={error.fullName}
            />
            <Input
              title="Email Address"
              type="text"
              placeholder="Enter your email address "
              value={register.email}
              onChange={handleChange}
              name="email"
              error={error.email}
            />
            <Input
              title="Password"
              type="password"
              placeholder="Enter your password "
              value={register.password}
              onChange={handleChange}
              name="password"
              error={error.password}
              approved={approvedPasword}
            />
            <Input
              title="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={register.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              error={error.confirmPassword}
              approved={approvedPasword}
            />
            <Button value="JOIN NOW" type="submit" />

            <div>
              <StyledLink to="/login">
                Have already an account Login here
              </StyledLink>
            </div>
          </RegisterInputs>
        </Form>
      </RegisterContainer>
    </MainContainer>
  );
}
export default Register;
