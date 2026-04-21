import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useUserContext } from "../../../contexts/UserContext";
import { loginVerificationEmail, loginGoogle } from "../../../api/auth-api";
import { validateEmail } from "../../../utils/validation";
import AuthLayout from "../../../components/layout/authLayout";
import AuthField from "../../../components/forms/AuthField";
import AuthInput from "../../../components/forms/AuthInput";
import AuthButton from "../../../components/forms/AuthButton";
import AuthCheckbox from "../../../components/forms/AuthCheckbox";
import PasswordStrength from "../../../components/forms/PasswordStrength";
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
  TermsText,
} from "./styled";
interface FormError {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  acceptTerms: boolean;
}

function Register() {
  const navigate = useNavigate();
  const { setUser, setToken, token } = useUserContext();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<FormError>({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
  });
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
          setErrors({ email: "Google signup failed. Please try again." });
        }
      } catch (error) {
        setErrors({ email: "Google signup failed. Please try again." });
      }
    },
    onError: (error) => {
      console.error("Google signup error:", error);
      setErrors({ email: "Google signup failed. Please try again." });
    },
  });

  function handleChange(value: string, name: string) {
    setFormData((prevValue) => ({ ...prevValue, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});
    setLoading(true);
    
    try {
      // Validate required fields
      const newErrors: FormError = {};
      
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required";
      }
      
      const emailError = validateEmail(formData.email);
      if (emailError) {
        newErrors.email = emailError;
      }
      
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
      
      if (!formData.acceptTerms) {
        // We'll handle this in the UI
      }
      
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      
      if (!token) return;
      
      const { ok, data } = await loginVerificationEmail(
        formData.email,
        "register"
      );
      if (ok && data) {
        setUser(data.data);
        localStorage.setItem("signupEmail", formData.email);
        navigate(
          `/register/verify-email/otp?${token}=${token}&email=${formData.email}`
        );
      }
    } catch (error) {
      setErrors({
        email: "Oops! Something went wrong, try again",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthLayout screen="register">
      <StepLabel>
        <StepBar />
        Step 01 / Create account
      </StepLabel>

      <FormHeading>
        Start in <em>two minutes.</em>
      </FormHeading>

      <FormSub>
        Enter your details to create a Maverva account — no credit card required.
      </FormSub>

      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <AuthField label="First name">
            <AuthInput
              type="name"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              name="firstName"
              error={errors.firstName}
              autoComplete="given-name"
            />
          </AuthField>

          <AuthField label="Last name">
            <AuthInput
              type="name"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              name="lastName"
              error={errors.lastName}
              autoComplete="family-name"
            />
          </AuthField>

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

          <AuthField label="Password">
            <AuthInput
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              error={errors.password}
              autoComplete="new-password"
            />
            <PasswordStrength password={formData.password} />
          </AuthField>

          <AuthCheckbox
            checked={formData.acceptTerms}
            onChange={(checked) => setFormData(prev => ({...prev, acceptTerms: checked}))}
          >
            <TermsText>
              By signing up, you accept the Maverva Cloud{" "}
              <a href="/" target="_blank" rel="noopener noreferrer">Terms of Service</a>{" "}
              and acknowledge the <a href="/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
            </TermsText>
          </AuthCheckbox>

          <AuthButton
            type="submit"
            variant="primary"
            fullWidth
            size="lg"
            disabled={loading || !formData.acceptTerms}
            loading={loading}
            hasArrow
          >
            Sign up
          </AuthButton>

          <AuthDivider>Or sign up with</AuthDivider>

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
          <span>Already have an account?</span>
          <FooterLink onClick={() => navigate("/login")}>
            Log in
          </FooterLink>
        </FooterLinks>
        <SecBadge>SOC 2 · ISO 27001</SecBadge>
      </FormFooter>
    </AuthLayout>
  );
}
export default Register;
