import { FormEvent, useState } from "react";
import {
  GoogleLogin,
  useGoogleLogin,
  useGoogleOneTapLogin,
} from "@react-oauth/google";
import Button from "../../components/tools/button";
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
} from "./styles";
import Input from "../../components/tools/input";
import DynamicSVGBrand from "../../components/ DynamicSVG/LogoSVG";
import {
  GoogleSignWrapper,
  GoogleSignButton,
  GoogleSignButtonText,
} from "../../components/tools/registerForm/styles";
import DynamicSVGGoogle from "../../components/ DynamicSVG/DynamicSVG";
import apiHelper from "../../api/apiHelper";
import CheckboxRadixUi from "../../components/tools/checkboxRadixUI";

interface FormError {
  email?: string;
  password?: string;
}
interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Login() {
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const [showErrorMessage, setShowErrowMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("tokenResponse", tokenResponse);
      const user = await apiHelper.loginGoogle(tokenResponse.access_token);
      setUser(user.data);
      navigate("/home");
    },
    onError: (tokenResponse) => console.error(tokenResponse),
  });

  const [login, setLogin] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<FormError>({
    email: undefined,
    password: undefined,
  });
  function handleChange(value: string, name: string) {
    setLogin((prevValue) => ({ ...prevValue, [name]: value }));

    if (error.password) {
      setError((prev) => ({ ...prev, password: undefined }));
    }
    if (error.email) {
      setError((prev) => ({ ...prev, email: undefined }));
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
    //setUser();
    navigate("/verification");
  };
  return (
    <MainContainer>
      <GlobalStyle />
      <NavbarContainer>
        <BrandWrapper>
          <BrandContainer>
            <DynamicSVGBrand />
          </BrandContainer>
        </BrandWrapper>
      </NavbarContainer>
      <LoginContainer>
        <LoginSection>
          <Form onSubmit={handleSubmit}>
            <LoginInputs>
              <FormTitle>Welcome back!</FormTitle>

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
                <CheckboxRadixUi />
                <CheckBoxText>Remember me</CheckBoxText>
              </RememberWrapper>
              <Button value="Continue" type="submit" />
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
                <CreateAccountListItemLink>
                  Can't log in?
                </CreateAccountListItemLink>
                <Point>.</Point>
                <CreateAccountListItemLink>
                  Create an account
                </CreateAccountListItemLink>
              </CreateAccountWrapper>
            </LoginInputs>
          </Form>
        </LoginSection>
      </LoginContainer>
    </MainContainer>
  );
}
export default Login;
