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

interface FormError {
  password?: string;
}
interface FormData {
  password: string;
}

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const continueUrl = searchParams.get("continue");
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
              <FormTitle>Can't log in?</FormTitle>
              <Input
                type="password"
                placeholder="Enter your email "
                value={password}
                onChange={handleChange}
                name="password"
                error={error}
                label="Password"
              />
              <Button children="Send recovery link" type="submit" />
              <CreateAccountWrapper>
                <CreateAccountListItemLink href="/login">
                  Return to log in
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
export default ResetPassword;
