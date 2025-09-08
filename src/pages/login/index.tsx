import { FormEvent, useEffect, useState } from "react";
import Button from "../../components/common/button/actionButton";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
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
} from "./styles";
import Input from "../../components/common/input/round";
import GoogleLoginButton from "../../components/common/button/googleLoginButton";
import { findUserByEmail, loginUser } from "../../api/authApi";
import CheckBoxComponent from "../../components/forms/checkBoxComponent";
import BoxLayout from "../../components/layout/boxLayout";
import { validateEmail } from "../../utils/validation";

interface FormError {
  email?: string;
  password?: string;
}
interface FormData {
  email: string;
  password: string;
}
type Step = "email" | "password";

function Login() {
  const navigate = useNavigate();
  const { setUser, token } = useUserContext();
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormError>({
    email: undefined,
  });
  const [step, setStep] = useState<Step>("email");
  const [loading, setLoading] = useState(false);

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
    if (!token) return;
    const response = await findUserByEmail(formData.email, token);
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
        navigate("/signup");
      }, 1500);
    }
  };

  const handlePasswordStep = async () => {
    if (!formData.password) {
      setErrors({ password: "Please enter your password" });
      return;
    }
    const response = await loginUser(formData.email, formData.password);
    if (response.ok) {
      setUser(response.data?.user);
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
    <BoxLayout>
      <GlobalStyle />
      <Form onSubmit={handleSubmit}>
        <LoginInputs>
          <FormTitle>Log in to continue</FormTitle>
          <Input
            type="email"
            placeholder="Enter your email "
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
            label="Email"
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
              <CheckBoxComponent />
            </>
          )}
          <Button type="submit" disabled={loading}>
            {step === "email" ? "Continue" : "Log in"}
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
    </BoxLayout>
  );
}
export default Login;
