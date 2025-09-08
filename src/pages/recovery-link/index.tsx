import { FormEvent, useState } from "react";
import Button from "../../components/common/button/actionButton";
import { useUserContext } from "../../contexts/UserContext";
import {
  Form,
  FormTitle,
  GlobalStyle,
  LoginContainer,
  LoginInputs,
  CreateAccountWrapper,
  CreateAccountListItemLink,
  Point,
} from "./styles";
import Input from "../../components/common/input/round";
import { sendResetPasswordLink } from "../../api/authApi";
import VerifyEmailPage from "../verificationEmail-page";
import BoxLayout from "../../components/layout/boxLayout";

interface FormError {
  email?: string;
}
interface FormData {
  email: string;
}

function RecoveryLink() {
  const { token } = useUserContext();
  const [emailSent, setEmailSent] = useState(false);
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
    setError({});
    try {
      if (login.email === "") {
        setError({
          email: "Please enter your email",
        });
        return;
      }
      if (
        /^[a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)+$/.test(
          login.email
        ) === false
      ) {
        setError({
          email: "This is not valid email address.",
        });
        return;
      }
      if (!token) return;
      const response = await sendResetPasswordLink(login.email, token);
      if (response.ok) {
        setEmailSent(true);
      } else {
        setError({
          email:
            (response.data as { message?: string })?.message ||
            "Please sign up to continue",
        });
      }
    } catch (error) {
      setError({ email: "opps! somethings wrong, try again" });
    }
  };
  return (
    <BoxLayout>
      <GlobalStyle />
      {emailSent ? (
        <VerifyEmailPage />
      ) : (
        <LoginContainer>
          <Form onSubmit={handleSubmit}>
            <LoginInputs>
              <FormTitle>Can't log in?</FormTitle>
              <Input
                type="email"
                placeholder="Enter your email "
                value={login.email}
                onChange={handleChange}
                name="email"
                error={error.email}
                label="We'll send a recovery link to"
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
        </LoginContainer>
      )}
    </BoxLayout>
  );
}
export default RecoveryLink;
