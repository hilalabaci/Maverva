import { FormEvent, useState } from "react";
import {
  GoogleLogin,
  useGoogleLogin,
  useGoogleOneTapLogin,
} from "@react-oauth/google";
import Button from "../../components/common/button";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import {
  BrandContainer,
  MessageError,
  Form,
  FormTitle,
  GlobalStyle,
  LoginContainer,
  LoginInputs,
  MainContainer,
  NavbarContainer,
  BrandWrapper,
  LoginSection,
  LineforGoogleWrapper,
  FirstLine,
  LastLine,
  RememberWrapper,
  CheckBoxText,
  CreateAccountWrapper,
  CreateAccountListItemLink,
  Point,
  CheckBoxTextLink,
} from "./styles";
import Input from "../../components/common/input";
import DynamicSVGBrand from "../../components/ DynamicSVG/LogoSVG";
import {
  GoogleSignWrapper,
  GoogleSignButton,
  GoogleSignButtonText,
} from "../../components/forms/registerForm/styles";
import DynamicSVGGoogle from "../../components/ DynamicSVG/DynamicSVG";
import apiHelper from "../../api/apiHelper";
import CheckboxRadixUi from "../../components/common/checkboxRadixUI";
import { UserType } from "../../types";

interface FormError {
  email?: string;
}
interface FormData {
  email: string;
}

function Register() {
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const [showErrorMessage, setShowErrowMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("tokenResponse", tokenResponse);
      const user = await apiHelper.loginGoogle(tokenResponse.access_token);
      setUser(user.data);
      navigate("/projects");
    },
    onError: (tokenResponse) => console.error(tokenResponse),
  });

  const [login, setLogin] = useState<FormData>({
    email: "",
  });
  const [error, setError] = useState<FormError>({
    email: undefined,
  });
  function handleChange(value: string, name: string) {
    setLogin((prevValue) => ({ ...prevValue, [name]: value }));

    if (error.email) {
      setError((prev) => ({ ...prev, email: undefined }));
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (login.email === "") {
      setError({
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
        email: "This is not valid email address.",
      });
      return;
    }
    try {
      const { ok, data } = await apiHelper.loginVerificationEmail(login.email);
      if (ok && data) {
        setUser(data as UserType);
      }
    } catch (error) {
      setError({
        email: "opps! somethings wrong, try again",
      });
    }
    navigate("/verification");
  };
  return (
    <MainContainer>
      <GlobalStyle />
      <NavbarContainer>
        <BrandWrapper>
          <BrandContainer href="/">
            <DynamicSVGBrand />
          </BrandContainer>
        </BrandWrapper>
      </NavbarContainer>
      <LoginContainer>
        <LoginSection>
          <Form onSubmit={handleSubmit}>
            <LoginInputs>
              <FormTitle>Sign up to continue</FormTitle>

              <Input
                title="Email Address"
                type="email"
                placeholder="Enter your email "
                value={login.email}
                onChange={handleChange}
                name="email"
                error={error.email}
              />
              {showErrorMessage && <MessageError>{errorMessage}</MessageError>}
              <RememberWrapper>
                <CheckBoxText>
                  By signing up, I accept the Maverva
                  <CheckBoxTextLink> Cloud Terms of Service </CheckBoxTextLink>
                  and acknowledge the
                  <CheckBoxTextLink> Privacy Policy.</CheckBoxTextLink>
                </CheckBoxText>
              </RememberWrapper>
              <Button value="Sign up" type="submit" />
              <LineforGoogleWrapper>
                <FirstLine></FirstLine>Or continue with
                <LastLine></LastLine>
              </LineforGoogleWrapper>
              <GoogleSignWrapper>
                <GoogleSignButton onClick={() => loginGoogle()}>
                  <DynamicSVGGoogle />
                  <GoogleSignButtonText>
                    Continue with Google
                  </GoogleSignButtonText>
                </GoogleSignButton>
              </GoogleSignWrapper>
              <CreateAccountWrapper>
                <CreateAccountListItemLink href="/login">
                  Already have an Atlassian account? Log in
                </CreateAccountListItemLink>
              </CreateAccountWrapper>
            </LoginInputs>
          </Form>
        </LoginSection>
      </LoginContainer>
    </MainContainer>
  );
}
export default Register;
