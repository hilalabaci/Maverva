import DynamicSVGGoogle from "../../ DynamicSVG/DynamicSVG";
import { useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import { useUserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  EmailLabel,
  RegisterForm as StyledRegisterForm,
  RegisterFormWrapper,
  AccoutCreatInput,
  EmailHelpText,
  SubmitWrapper,
  SubmitButton,
  SubmitButtonText,
  LineforGoogleWrapper,
  FirstLine,
  LastLine,
  GoogleSignWrapper,
  GoogleSignButton,
  GoogleSignButtonText,
  CheckEmail,
  EmailWrapper,
  ErrorText,
  IconError,
} from "./styles";
import { loginGoogle } from "../../../api/authApi";

function RegisterForm() {
  const { setUser, setToken } = useUserContext();
  const [googleVerifyEmail, setGoogleVerifyEmail] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [manuelRegisterEmail, setManuelRegisterEmail] = useState("");
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const user = await loginGoogle(tokenResponse.access_token);
      setUser(user.data?.user);
      setToken(user.data?.token);
      navigate("/projects");
    },
    onError: (tokenResponse) => console.error(tokenResponse),
  });

  useGoogleOneTapLogin({
    onSuccess: async (tokenResponse) => {
      const user = await loginGoogle(tokenResponse.credential!, true);
      setUser(user.data?.user);
      setToken(user.data?.token);
      navigate("/projects");
    },
    onError: () => console.error("error"),
  });
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setManuelRegisterEmail(value);
  }

  function handleBlur() {
    if (
      !/^[a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)+$/.test(
        manuelRegisterEmail
      )
    ) {
      setVerifyEmail(true);
    } else {
      setVerifyEmail(false);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleBlur();
    }
  }

  return (
    <Container>
      <StyledRegisterForm>
        <RegisterFormWrapper
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <EmailLabel>Work email</EmailLabel>
          <EmailWrapper $errorEmailDisplay={!verifyEmail}>
            <AccoutCreatInput
              type="email"
              placeholder="you@company.com"
              title="email"
              value={manuelRegisterEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              name="email"
            />
            <IconError $errorEmailDisplay={!verifyEmail} />
            <CheckEmail $googleVerifyEmail={googleVerifyEmail} />
          </EmailWrapper>
          <ErrorText $errorEmailDisplay={!verifyEmail}>
            Please enter a valid email address.
          </ErrorText>
          <EmailHelpText $errorEmailDisplay={verifyEmail}>
            Find teammates, plus keep work and life separate by using your work
            email
          </EmailHelpText>
        </RegisterFormWrapper>
        <SubmitWrapper>
          <SubmitButton>
            <SubmitButtonText>Sign up</SubmitButtonText>
          </SubmitButton>
        </SubmitWrapper>
      </StyledRegisterForm>
      <LineforGoogleWrapper>
        <FirstLine></FirstLine>Or continue with
        <LastLine></LastLine>
      </LineforGoogleWrapper>
      <GoogleSignWrapper>
        <GoogleSignButton onClick={() => login()}>
          <DynamicSVGGoogle />
          <GoogleSignButtonText>Google</GoogleSignButtonText>
        </GoogleSignButton>
      </GoogleSignWrapper>
    </Container>
  );
}
export default RegisterForm;
