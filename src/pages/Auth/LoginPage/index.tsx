import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useUserContext } from "../../../contexts/UserContext";
import { findUserByEmail, loginUser, loginGoogle } from "../../../api/auth-api";
import { validateEmail } from "../../../utils/validation";
import AuthLayout from "../../../components/layout/authLayout";
import AuthField from "../../../components/forms/AuthField";
import AuthInput from "../../../components/forms/AuthInput";
import AuthButton from "../../../components/forms/AuthButton";
import AuthCheckbox from "../../../components/forms/AuthCheckbox";
import {
  StepLabel,
  StepBar,
  FormSub,
  FormHeading,
  AuthDivider,
  SocialGrid,
  SecBadge,
} from "../../../components/layout/authLayout/styles";
import {
  Form,
  FormContainer,
  FormFooter,
  FooterLinks,
  FooterLink,
  Point,
} from "./styled";

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

  // Google OAuth login
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await loginGoogle(tokenResponse.access_token);
        if (response.ok && response.data) {
          setUser(response.data.user);
          setToken(response.data.token);
          navigate("/projects");
        } else {
          setErrors({ email: "Google login failed. Please try again." });
        }
      } catch (error) {
        setErrors({ email: "Google login failed. Please try again." });
      }
    },
    onError: (error) => {
      console.error("Google login error:", error);
      setErrors({ email: "Google login failed. Please try again." });
    },
  });

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
      <StepLabel>
        <StepBar />
        {step === "email" ? "Step 01 / Log in" : "Step 02 / Password"}
      </StepLabel>

      <FormHeading>
        {step === "email" ? (
          <>Welcome <em>back.</em></>
        ) : (
          <>Hi, <em>{formData.email.split("@")[0]}.</em></>
        )}
      </FormHeading>

      <FormSub>
        {step === "email"
          ? "Log in to pick up where you left off. We'll remember this device for 30 days."
          : "Enter your password to continue. We'll remember this device for 30 days."}
      </FormSub>

      <Form onSubmit={handleSubmit}>
        <FormContainer>
          {step === "email" && (
            <AuthField label="Work email">
              <AuthInput
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                name="email"
                error={errors.email}
                autoComplete="email"
              />
            </AuthField>
          )}

          {step === "password" && (
            <>
              <AuthField 
                label="Work email"
                labelAction={{
                  text: "Edit",
                  onClick: () => {
                    setVerifiedEmail(false);
                    setStep("email");
                  }
                }}
              >
                <AuthInput
                  type="email"
                  value={formData.email}
                  onChange={() => {}} // Read-only
                  name="email"
                  readOnly={true}
                />
              </AuthField>

              <AuthField 
                label="Password"
                labelAction={{
                  text: "Forgot your password?",
                  onClick: () => navigate("/login/reset-password")
                }}
              >
                <AuthInput
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                  error={errors.password}
                  autoComplete="current-password"
                />
              </AuthField>

              <AuthCheckbox
                checked={formData.rememberMe}
                onChange={(checked) => setFormData(prev => ({...prev, rememberMe: checked}))}
              >
                Remember me on this device for 30 days.
              </AuthCheckbox>
            </>
          )}

          <AuthButton
            type="submit"
            variant="primary"
            fullWidth
            size="lg"
            disabled={loading}
            loading={loading}
            hasArrow
          >
            {step === "email" ? "Continue" : "Log in"}
          </AuthButton>

          <AuthDivider>Or continue with</AuthDivider>

          <SocialGrid>
            <AuthButton 
              variant="social" 
              icon="G"
              onClick={() => handleGoogleLogin()}
            >
              Google
            </AuthButton>
            <AuthButton variant="social" icon="⌘">
              SSO / SAML
            </AuthButton>
          </SocialGrid>
        </FormContainer>
      </Form>

      <FormFooter>
        <FooterLinks>
          <FooterLink onClick={() => navigate("/login/reset-password")}>
            Can't log in?
          </FooterLink>
          <Point> · </Point>
          <FooterLink onClick={() => navigate("/register")}>
            Create an account
          </FooterLink>
        </FooterLinks>
        <SecBadge>SOC 2 · ISO 27001</SecBadge>
      </FormFooter>
    </AuthLayout>
  );
}
export default Login;
