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
} from "./styles";
import DynamicSVGGoogle from "../../ DynamicSVG/DynamicSVG";
import {
  GoogleLogin,
  useGoogleLogin,
  useGoogleOneTapLogin,
} from "@react-oauth/google";
import apiHelper from "../../../api/apiHelper";
import { useUserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RegisterForm() {
  const { setUser } = useUserContext();
  const [verifyEmail, setVerifyEemail] = useState(false);
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("tokenResponse", tokenResponse);
      const user = await apiHelper.loginGoogle(tokenResponse.access_token);
      setUser(user.data);
      navigate("/projects");
    },
    onError: (tokenResponse) => console.error(tokenResponse),
  });

  useGoogleOneTapLogin({
    onSuccess: async (tokenResponse) => {
      const user = await apiHelper.loginGoogle(tokenResponse.credential!);
      setUser(user.data);
      navigate("/projects");
    },
    onError: () => console.error("error"),
  });
  return (
    <Container>
      <StyledRegisterForm>
        <RegisterFormWrapper>
          <EmailLabel>Work email</EmailLabel>
          <EmailWrapper>
            <AccoutCreatInput type="email" placeholder="you@company.com" />
            <CheckEmail $verifyEmail={verifyEmail} />
          </EmailWrapper>
          <EmailHelpText>
            Find teammates, plus keep work and life separate by using your work
            email.
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
