import { FormEvent, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../../../api/auth-api";
import { useUserContext } from "../../../contexts/UserContext";
import AuthLayout from "../../../components/layout/authLayout";
import AuthField from "../../../components/forms/AuthField";
import AuthInput from "../../../components/forms/AuthInput";
import AuthButton from "../../../components/forms/AuthButton";
import PasswordStrength from "../../../components/forms/PasswordStrength";
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
} from "./styled";
interface FormData {
  password: string;
  confirmPassword: string;
}

interface FormError {
  password?: string;
  confirmPassword?: string;
}

function ResetPassword() {
  const { setUser, setToken } = useUserContext();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormError>({});

  function handleChange(value: string, name: string) {
    setFormData((prevValue) => ({ ...prevValue, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  const validatePassword = (password: string): string | undefined => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    return undefined;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      if (!token) {
        setErrors({ password: "Invalid reset link. Please request a new one." });
        return;
      }

      const passwordError = validatePassword(formData.password);
      const confirmError = formData.password !== formData.confirmPassword 
        ? "Passwords don't match" 
        : undefined;

      if (passwordError || confirmError) {
        setErrors({
          password: passwordError,
          confirmPassword: confirmError,
        });
        return;
      }

      if (!email || !formData.password || !token) return;

      const response = await resetPassword(email, formData.password, token);

      if (response.ok && response.data) {
        setUser(response.data.user);
        setToken(response.data.token);
        setSuccess(true);
        setTimeout(() => navigate("/projects"), 2000);
      } else {
        setErrors({ password: "We couldn't update your password. Please try again." });
      }
    } catch (error) {
      setErrors({ password: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout screen="reset">
      <StepLabel>
        <StepBar />
        {success ? "Password updated" : "Step 02 / New password"}
      </StepLabel>

      <FormHeading>
        {success ? (
          <>All <em>set!</em></>
        ) : (
          <>Choose a <em>new password.</em></>
        )}
      </FormHeading>

      <FormSub>
        {success
          ? "Your password has been updated successfully. You'll be redirected to your workspace in a moment."
          : "Pick a strong password with at least 8 characters. We recommend using a mix of letters, numbers, and symbols."}
      </FormSub>

      {success ? (
        <>
          <SuccessBox
            title="Password updated successfully"
            message="You can now log in with your new password. You'll be redirected to your workspace automatically."
          />
          
          <AuthButton
            variant="primary"
            fullWidth
            size="lg"
            onClick={() => navigate("/projects")}
            hasArrow
          >
            Continue to workspace
          </AuthButton>
        </>
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormContainer>
            <AuthField label="New password">
              <AuthInput
                type="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                error={errors.password}
                autoComplete="new-password"
              />
              <PasswordStrength password={formData.password} />
            </AuthField>

            <AuthField label="Confirm password">
              <AuthInput
                type="password"
                placeholder="Confirm your new password"
                value={formData.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                error={errors.confirmPassword}
                autoComplete="new-password"
              />
            </AuthField>

            <AuthButton
              type="submit"
              variant="primary"
              fullWidth
              size="lg"
              disabled={loading || !formData.password || !formData.confirmPassword}
              loading={loading}
              hasArrow
            >
              Set new password
            </AuthButton>
          </FormContainer>
        </Form>
      )}

      <FormFooter>
        <FooterLinks>
          <FooterLink onClick={() => navigate("/login")}>
            ← Return to log in
          </FooterLink>
        </FooterLinks>
        <SecBadge>SOC 2 · ISO 27001</SecBadge>
      </FormFooter>
    </AuthLayout>
  );
}
export default ResetPassword;
