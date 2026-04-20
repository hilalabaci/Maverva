import { FormEvent, useState } from "react";
import Button from "../../../components/ui/Button/BaseButton";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";
import {
  MessageError,
  Form,
  FormTitle,
  GlobalStyle,
  LoginInputs,
  LineforGoogleWrapper,
  FirstLine,
  LastLine,
  TermsText,
  TermsLink,
  CreateAccountWrapper,
  CreateAccountListItemLink,
} from "./styled";
import {
  StepLabel,
  StepBar,
  FormSub,
  SocialGrid,
  SocialButton,
  SecBadge,
} from "../../../components/layout/authLayout/styles";
import Input from "../../../components/ui/Input/round";
import {
  loginVerificationEmail,
} from "../../../api/auth-api";
import AuthLayout from "../../../components/layout/authLayout";
import { validateEmail } from "../../../utils/validation";
import GoogleAuthButton from "../../../components/ui/Button/GoogleAuthButton";
interface FormError {
  email?: string;
}
interface FormData {
  email: string;
}

function Register() {
  const navigate = useNavigate();
  const { setUser, token } = useUserContext();
  const [showErrorMessage] = useState<boolean>(false);
  const [errorMessage] = useState<string>("");
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
    try {
      const emailError = validateEmail(login.email);
      if (emailError) {
        setError({ email: emailError });
        return;
      }
      if (!token) return;
      const { ok, data } = await loginVerificationEmail(
        login.email,
        "register"
      );
      if (ok && data) {
        setUser(data.data);
        localStorage.setItem("signupEmail", login.email);
        navigate(
          `/register/verify-email/otp?${token}=${token}&email=${login.email}`
        );
      }
    } catch (error) {
      setError({
        email: "opps! somethings wrong, try again",
      });
    }
  };
  return (
    <AuthLayout screen="register">
      <GlobalStyle />
      <StepLabel>
        <StepBar />
        Step 01 / Create account
      </StepLabel>
      <FormTitle>
        Start in <em>two minutes.</em>
      </FormTitle>
      <FormSub>
        Enter your email to create a Maverva account — no credit card required.
      </FormSub>
      <Form onSubmit={handleSubmit}>
        <LoginInputs>
          <Input
            type="email"
            placeholder="you@company.com"
            value={login.email}
            onChange={handleChange}
            name="email"
            error={error.email}
            label="Work email"
          />
          {showErrorMessage && <MessageError>{errorMessage}</MessageError>}
          <TermsText>
            By signing up, you accept the Maverva Cloud{" "}
            <TermsLink href="#">Terms of Service</TermsLink> and acknowledge
            the <TermsLink href="#">Privacy Policy</TermsLink>.
          </TermsText>
          <Button children="Sign up →" type="submit" size="lg" borderRadius="lg" />
          <LineforGoogleWrapper>
            <FirstLine />
            Or sign up with
            <LastLine />
          </LineforGoogleWrapper>
          <SocialGrid>
            <GoogleAuthButton borderRadius="lg" />
            <SocialButton type="button">
              <span className="ic">⌘</span>SSO / SAML
            </SocialButton>
          </SocialGrid>
        </LoginInputs>
      </Form>
      <CreateAccountWrapper>
        <span>
          Already have an account?{" "}
          <CreateAccountListItemLink href="/login">Log in</CreateAccountListItemLink>
        </span>
        <SecBadge>SOC 2 · ISO 27001</SecBadge>
      </CreateAccountWrapper>
    </AuthLayout>
  );
}
export default Register;
