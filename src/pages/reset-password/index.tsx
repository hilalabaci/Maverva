import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/common/button/actionButton";
import { useNavigate } from "react-router-dom";
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
  CreateAccountWrapper,
  CreateAccountListItemLink,
  Point,
} from "./styles";
import Input from "../../components/common/input/round";
import DynamicSVGBrand from "../../components/ DynamicSVG/LogoSVG";
import { resetPassword } from "../../api/authApi";

interface FormError {
  password?: string;
}
interface FormData {
  password: string;
}

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const redirectUrl = searchParams.get("redirect");
  const email = searchParams.get("email");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleChange(value: string) {}

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    if (!token) {
      setError(`invalid url`);
      return;
    }
    if (password.length < 8) {
      setError("Password must have at least 8 characters");
      return;
    }
    try {
      if (!email || password || token) return;
      const response = await resetPassword(email, password, token);
      if (response.ok) {
        navigate("/projects");
      } else {
        setError("We could't update your password");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
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
              <FormTitle>Choose a new password</FormTitle>
              <Input
                type="password"
                placeholder="Enter your email "
                value={password}
                onChange={handleChange}
                name="password"
                error={error}
                label="Password"
                infoMessage="Password must have at least 8 characters"
              />
              <Button children="Continue" type="submit" />
              <CreateAccountWrapper>
                <CreateAccountListItemLink href="/login">
                  Still having trouble logging in?
                </CreateAccountListItemLink>
              </CreateAccountWrapper>
            </LoginInputs>
          </Form>
        </LoginSection>
      </LoginContainer>
    </MainContainer>
  );
}
export default ResetPassword;
