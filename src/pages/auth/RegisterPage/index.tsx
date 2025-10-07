import { FormEvent, useState } from "react";
import Button from "../../../components/ui/Button/BaseButton";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";
import {
  MessageError,
  Form,
  FormTitle,
  GlobalStyle,
  LoginContainer,
  LoginInputs,
  LineforGoogleWrapper,
  FirstLine,
  LastLine,
  RememberWrapper,
  CheckBoxText,
  CreateAccountWrapper,
  CreateAccountListItemLink,
  CheckBoxTextLink,
} from "./styled";
import Input from "../../../components/ui/Input/round";
import { GoogleSignWrapper } from "../../../components/forms/register-form/styles";
import {
  loginVerificationEmail,
  loginGoogle as loginGoogleApi,
} from "../../../api/auth-api";
import BoxLayout from "../../../components/layout/boxLayout";
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
  const [showErrorMessage, setShowErrowMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
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
          `/signup/verify-email/otp?${token}=${token}&email=${login.email}`
        );
      }
    } catch (error) {
      setError({
        email: "opps! somethings wrong, try again",
      });
    }
  };
  return (
    <BoxLayout>
      <LoginContainer>
        <GlobalStyle />
        <Form onSubmit={handleSubmit}>
          <LoginInputs>
            <FormTitle>Sign up to continue</FormTitle>
            <Input
              type="email"
              placeholder="Enter your email "
              value={login.email}
              onChange={handleChange}
              name="email"
              error={error.email}
            />
            {showErrorMessage && <MessageError>{errorMessage}</MessageError>}
            <RememberWrapper>
              <CheckBoxText>
                By signing up, I accept the Maverva
                <CheckBoxTextLink> Cloud Terms of Service </CheckBoxTextLink>
                and acknowledge the
                <CheckBoxTextLink> Privacy Policy.</CheckBoxTextLink>
              </CheckBoxText>
            </RememberWrapper>
            <Button children="Sign up" type="submit" size="lg" borderRadius="lg" />
            <LineforGoogleWrapper>
              <FirstLine></FirstLine>Or continue with
              <LastLine></LastLine>
            </LineforGoogleWrapper>
            <GoogleSignWrapper> 
              <GoogleAuthButton borderRadius="lg" />
            </GoogleSignWrapper>
            <CreateAccountWrapper>
              <CreateAccountListItemLink href="/login">
                Already have an Maverva account? Log in
              </CreateAccountListItemLink>
            </CreateAccountWrapper>
          </LoginInputs>
        </Form>
      </LoginContainer>
    </BoxLayout>
  );
}
export default Register;
