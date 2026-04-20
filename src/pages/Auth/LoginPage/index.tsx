import { FormEvent, useEffect, useState } from "react";
import Button from "../../../components/ui/Button/BaseButton";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";
import {
  Form,
  FormTitle,
  GlobalStyle,
  LoginInputs,
  LineforGoogleWrapper,
  FirstLine,
  LastLine,
  CreateAccountWrapper,
  CreateAccountListItemLink,
  Point,
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
import { findUserByEmail, loginUser } from "../../../api/auth-api";
import CheckBoxComponent from "../../../components/forms/checkbox-component";
import AuthLayout from "../../../components/layout/authLayout";
import { validateEmail } from "../../../utils/validation";
import GoogleAuthButton from "../../../components/ui/Button/GoogleAuthButton";

interface FormError {
  email?: string;
  password?: string;
}
interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}
type Step = "email" | "password";

function Login() {
  const navigate = useNavigate();
  const { setUser, setToken } = useUserContext();
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<FormError>({
    email: undefined,
  });
  const [step, setStep] = useState<Step>("email");
  const [loading, setLoading] = useState(false);
  const [, setRememberMe] = useState(false);

  function handleChange(value: string, name: string) {
    setFormData((prevValue) => ({ ...prevValue, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  const handleEmailStep = async () => {
    const emailError = validateEmail(formData.email);
    if (emailError) {
      setErrors({ email: emailError });
      return;
    }
    const response = await findUserByEmail(formData.email);
    if (response.ok) {
      setVerifiedEmail(true);
      setStep("password");
    } else {
      setErrors({
        email:
          (response.data as { message?: string })?.message ||
          "Please sign up to continue",
      });
      setTimeout(() => {
        navigate("/register");
      }, 1500);
    }
  };

  const handlePasswordStep = async () => {
    if (!formData.password) {
      setErrors({ password: "Please enter your password" });
      return;
    }
    const response = await loginUser(
      formData.email,
      formData.password,
      formData.rememberMe
    );
    if (response.ok) {
      setUser(response.data?.user);
      setToken(response.data?.token);
      navigate("/projects");
    } else {
      setErrors({ password: "Invalid password, try again" });
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});
    setLoading(true);
    try {
      step === "email" ? await handleEmailStep() : await handlePasswordStep();
    } catch (error) {
      setErrors({ email: "Oops! Something went wrong, try again." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verifiedEmail && setStep("password");
  }, [verifiedEmail, setStep]);

  return (
    <AuthLayout screen="login">
      <GlobalStyle />
      <StepLabel>
        <StepBar />
        {step === "email" ? "Step 01 / Log in" : "Step 02 / Password"}
      </StepLabel>
      <FormTitle>
        {step === "email" ? (
          <>Welcome <em>back.</em></>
        ) : (
          <>Hi, <em>{formData.email.split("@")[0]}.</em></>
        )}
      </FormTitle>
      <FormSub>
        {step === "email"
          ? "Log in to pick up where you left off. We'll remember this device for 30 days."
          : "Enter your password to continue."}
      </FormSub>
      <Form onSubmit={handleSubmit}>
        <LoginInputs>
          <Input
            type="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={(value: string, name: string) => {
              handleChange(value, name);
            }}
            name="email"
            onEditClick={() => {
              setVerifiedEmail(false);
              setStep("email");
            }}
            error={errors.email}
            filled={verifiedEmail}
            label="Work email"
          />
          {step === "password" && (
            <>
              <Input
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                error={errors.password}
                label="Password"
              />
              <CheckBoxComponent
                text="Remember me on this device for 30 days."
                onCheckedChange={setRememberMe}
              />
            </>
          )}
          <Button type="submit" disabled={loading} size="lg" borderRadius="lg">
            {step === "email" ? "Continue →" : "Log in →"}
          </Button>
          <LineforGoogleWrapper>
            <FirstLine />
            Or continue with
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
        <div>
          <CreateAccountListItemLink href="login/reset-password">
            Can't log in?
          </CreateAccountListItemLink>
          <Point> · </Point>
          <CreateAccountListItemLink href="/register">
            Create an account
          </CreateAccountListItemLink>
        </div>
        <SecBadge>SOC 2 · ISO 27001</SecBadge>
      </CreateAccountWrapper>
    </AuthLayout>
  );
}
export default Login;
