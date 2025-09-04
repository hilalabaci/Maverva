import { FormEvent, useState } from "react";
import Button from "../../components/common/button/actionButton";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import {
  BrandContainer,
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
  CreateAccountWrapper,
  CreateAccountListItemLink,
  Point,
} from "./styles";
import Input from "../../components/common/input/round";
import DynamicSVGBrand from "../../components/ DynamicSVG/LogoSVG";
import GoogleLoginButton from "../../components/common/button/googleLoginButton";
import { findUserByEmail, loginVerificationEmail } from "../../api/authApi";
import CheckBox from "../../components/forms/checkBox";

interface FormError {
  email?: string;
  password?: string;
}
interface FormData {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const { setUser, token } = useUserContext();
  const [displayPassword, setDisplayPassword] = useState(false);
  const [login, setLogin] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<FormError>({
    email: undefined,
  });

  function handleChange(value: string, name: string) {
    setLogin((prevValue) => ({ ...prevValue, [name]: value }));
    setError((prev) => ({ ...prev, [name]: undefined }));
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError({});
    try {
      if (login.email === "") {
        setError({ email: "Please enter your email" });
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login.email)) {
        setError({
          email: "This is not valid email address.",
        });
        return;
      }
      if (!token) return;
      console.log(`hereee`);
      const response = await findUserByEmail(login.email, token);
      console.log(`response: ${response}`);
      if (response.ok) {
        setDisplayPassword(true);
      } else {
        setError({
          email:
            (response.data as { message?: string })?.message ||
            "Please sign up to continue",
        });
        setTimeout(() => {
          navigate("/signup");
        }, 1500);
      }
    } catch (error) {
      setError({ email: "opps! somethings wrong, try again" });
    }
  };
  return (
    <MainContainer>
      <GlobalStyle />
      <NavbarContainer>
        <BrandWrapper>
          <BrandContainer href="/">
            <DynamicSVGBrand width="150" height="40" />
          </BrandContainer>
        </BrandWrapper>
      </NavbarContainer>
      <LoginContainer>
        <LoginSection>
          <Form onSubmit={handleSubmit}>
            <LoginInputs>
              <FormTitle>Log in to continue</FormTitle>
              <Input
                type="email"
                placeholder="Enter your email "
                value={login.email}
                onChange={handleChange}
                name="email"
                error={error.email}
              />
              {displayPassword && (
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={login.password}
                  onChange={handleChange}
                  name="password"
                  error={error.password}
                />
              )}
              <CheckBox />
              <Button children="Continue" type="submit" />
              <LineforGoogleWrapper>
                <FirstLine></FirstLine>Or continue with
                <LastLine></LastLine>
              </LineforGoogleWrapper>
              <GoogleLoginButton />
              <CreateAccountWrapper>
                <CreateAccountListItemLink href="login/reset-password">
                  Can't log in?
                </CreateAccountListItemLink>
                <Point>.</Point>
                <CreateAccountListItemLink href="/signup">
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
