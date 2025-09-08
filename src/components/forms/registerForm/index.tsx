import DynamicSVGGoogle from "../../ DynamicSVG/DynamicSVG";
import { useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import { useUserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import {
  Container,
  EmailHelpText,
  LineforGoogleWrapper,
  FirstLine,
  LastLine,
  GoogleSignWrapper,
  GoogleSignButton,
  GoogleSignButtonText,
  EmailWrapper,
  Form,
} from "./styles";
import { loginGoogle, loginVerificationEmail } from "../../../api/authApi";
import Input from "../../common/input/round";
import Button from "../../../components/common/button/actionButton";
import { validateEmail } from "../../../utils/validation";
interface FormData {
  email: string;
}
interface FormError {
  email?: string;
}
function RegisterForm() {
  const navigate = useNavigate();
  const { setUser, token, setToken } = useUserContext();
  const [googleVerifyEmail, setGoogleVerifyEmail] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [register, setRegister] = useState<FormData>({
    email: "",
  });
  const [errors, setErrors] = useState<FormError>({});

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const user = await loginGoogle(tokenResponse.access_token);
      setUser(user.data?.user);
      setToken(user.data?.token);
      setGoogleVerifyEmail(true);
      setTimeout(() => {
        navigate("/projects");
      }, 100);
    },
    onError: (tokenResponse) => console.error(tokenResponse),
  });

  useGoogleOneTapLogin({
    onSuccess: async (tokenResponse) => {
      const user = await loginGoogle(tokenResponse.credential!, true);
      setUser(user.data?.user);
      setToken(user.data?.token);
      setTimeout(() => {
        navigate("/projects");
      }, 100);
    },
    onError: () => console.error("error"),
  });

  function handleChange(value: string, name: string) {
    setRegister((prevValue) => ({ ...prevValue, [name]: value }));
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  }
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const emailError = validateEmail(register.email);
      if (emailError) {
        setErrors({ email: emailError });
        return;
      }
      if (!token) return;
      const { ok, data } = await loginVerificationEmail(
        register.email,
        token,
        "register"
      );
      if (ok && data) {
        setUser(data.data);
        localStorage.setItem("signupEmail", register.email);
        navigate(
          `/signup/verify-email/otp?${token}=${token}&email=${register.email}`
        );
      }
    } catch (error) {
      setErrors({
        email: "opps! somethings wrong, try again",
      });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={register.email}
          placeholder="you@company.com"
          type="email"
          name="email"
          label="Work email"
          error={errors.email || (verifyEmail ? "Invalid email" : null)}
          fontColour="Light"
        />
        <EmailHelpText $errorEmailDisplay={verifyEmail}>
          Find teammates, plus keep work and life separate by using your work
          email
        </EmailHelpText>
        <Button
          children="Sign up"
          type="submit"
          variant="warning"
          fontSize="lg"
        />
      </Form>
      <LineforGoogleWrapper>
        <FirstLine></FirstLine>Or continue with
        <LastLine></LastLine>
      </LineforGoogleWrapper>
      <GoogleSignWrapper>
        <GoogleSignButton onClick={() => login()}>
          <DynamicSVGGoogle />
          <GoogleSignButtonText>Google</GoogleSignButtonText>
        </GoogleSignButton>
      </GoogleSignWrapper>
    </Container>
  );
}
export default RegisterForm;
