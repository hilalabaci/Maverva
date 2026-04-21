import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";
import { sendResetPasswordLink } from "../../../api/auth-api";
import { validateEmail } from "../../../utils/validation";
import AuthLayout from "../../../components/layout/authLayout";
import AuthField from "../../../components/forms/AuthField";
import AuthInput from "../../../components/forms/AuthInput";
import AuthButton from "../../../components/forms/AuthButton";
import SuccessBox from "../../../components/forms/SuccessBox";
import {
  StepLabel,
  StepBar,
  FormSub,
  FormHeading,
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
}
interface FormData {
  email: string;
}

function RecoveryLink() {
  const navigate = useNavigate();
  const { token } = useUserContext();
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
  const [errors, setErrors] = useState<FormError>({
    email: undefined,
  });
  const [loading, setLoading] = useState(false);

  function handleChange(value: string, name: string) {
    setFormData((prevValue) => ({ ...prevValue, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});
    setLoading(true);
    
    try {
      const emailError = validateEmail(formData.email);
      if (emailError) {
        setErrors({ email: emailError });
        return;
      }
      
      if (!token) return;
      
      const response = await sendResetPasswordLink(formData.email, token);
      if (response.ok) {
        setEmailSent(true);
      } else {
        setErrors({
          email:
            (response.data as { message?: string })?.message ||
            "Email not found. Please check your email or sign up.",
        });
      }
    } catch (error) {
      setErrors({ email: "Oops! Something went wrong, try again" });
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => {
    setEmailSent(false);
    setFormData({ email: "" });
    setErrors({});
  };
  return (
    <AuthLayout screen="reset">
      <StepLabel>
        <StepBar />
        {emailSent ? "Reset link sent" : "Step 01 / Recover account"}
      </StepLabel>

      <FormHeading>
        {emailSent ? (
          <>Check your <em>email.</em></>
        ) : (
          <>Can't <em>log in?</em></>
        )}
      </FormHeading>

      <FormSub>
        {emailSent
          ? "We've sent a password reset link to your email. Check your inbox and follow the instructions."
          : "Enter the email on your account. We'll send a one-time link to reset your password — the link expires in 30 minutes."}
      </FormSub>

      {emailSent ? (
        <>
          <SuccessBox
            title="Recovery link sent successfully"
            message={
              <>
                Check your email at <b>{formData.email}</b> for a link to reset your password.
                If it doesn't appear within a few minutes, check your spam folder.
              </>
            }
          />
          
          <AuthButton
            variant="primary"
            fullWidth
            size="lg"
            onClick={handleBackToLogin}
          >
            Send another link
          </AuthButton>
        </>
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormContainer>
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

            <AuthButton
              type="submit"
              variant="primary"
              fullWidth
              size="lg"
              disabled={loading}
              loading={loading}
              hasArrow
            >
              Send recovery link
            </AuthButton>
          </FormContainer>
        </Form>
      )}

      <FormFooter>
        <FooterLinks>
          <FooterLink onClick={() => navigate("/login")}>
            ← Return to log in
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
export default RecoveryLink;
