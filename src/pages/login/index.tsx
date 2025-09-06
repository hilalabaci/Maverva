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
import { findUserByEmail, loginUser } from "../../api/authApi";
import CheckBoxComponent from "../../components/forms/checkBoxComponent";

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
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<FormError>({
    email: undefined,
  });
  const [stage, setStage] = useState<"email" | "password">("email");
  const [loading, setLoading] = useState(false);

  function handleChange(value: string, name: string) {
    setFormData((prevValue) => ({ ...prevValue, [name]: value }));
    setError((prev) => ({ ...prev, [name]: undefined }));
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError({});
    setLoading(true);
    console.log(stage);
    try {
      if (stage === "email") {
        if (formData.email === "") {
          setError({ email: "Please enter your email" });
          return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setError({
            email: "This is not valid email address.",
          });
          return;
        }
        if (!token) return;
        const response = await findUserByEmail(formData.email, token);
        if (response.ok) {
          setStage("password");
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
      } else if (stage === "password") {
        if (!formData.password) {
          setError({ password: "Please enter your password" });
          return;
        }
        const response = await loginUser(formData.email, formData.password);
        if (response.ok) {
          setUser(response.data?.user); 
          navigate("/projects");
        } else {
          setError({ password: "Invalid password, try again" });
        }
      }
    } catch (error) {
      setError({ email: "opps! somethings wrong, try again" });
    } finally {
      setLoading(false);
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
                value={formData.email}
                onChange={handleChange}
                name="email"
                error={error.email}
              />
              {displayPassword && (
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                  error={error.password}
                />
              )}
              <CheckBoxComponent />
              <Button type="submit" disabled={loading}>
                {stage === "email" ? "Continue" : "Log in"}
              </Button>
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
