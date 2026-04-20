import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../../components/ui/Button/BaseButton";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormTitle,
  GlobalStyle,
  LoginContainer,
  LoginInputs,
  CreateAccountWrapper,
  CreateAccountListItemLink,
} from "./styled";
import {
  StepLabel,
  StepBar,
  FormSub,
  SecBadge,
} from "../../../components/layout/authLayout/styles";
import Input from "../../../components/ui/Input/round";
import { resetPassword } from "../../../api/auth-api";
import { useUserContext } from "../../../contexts/UserContext";
import AuthLayout from "../../../components/layout/authLayout";
interface FormData {
  password: string;
}

function ResetPassword() {
  const { setUser } = useUserContext();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const navigate = useNavigate();

  const [login, setLogin] = useState<FormData>({
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  function handleChange(value: string, name: string) {
    setLogin((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setError(null);
      if (!token) {
        setError(`invalid url`);
        return;
      }
      if (login.password.length < 8) {
        setError("Password must have at least 8 characters");
        return;
      }
      if (!email || !login.password || !token) return;
      const response = await resetPassword(email, login.password, token);

      if (response.ok && response.data) {
        setUser(response.data.user);
        navigate("/projects");
      } else {
        setError("We could't update your password");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <AuthLayout screen="reset">
      <GlobalStyle />
      <LoginContainer>
        <StepLabel>
          <StepBar />
          Step 02 / New password
        </StepLabel>
        <FormTitle>
          Choose a <em>new password.</em>
        </FormTitle>
        <FormSub>
          Pick a strong password with at least 8 characters.
        </FormSub>
        <Form onSubmit={handleSubmit}>
          <LoginInputs>
            <Input
              type="password"
              placeholder="New password"
              value={login.password}
              onChange={handleChange}
              name="password"
              error={error}
              label="New password"
              infoMessage="Password must have at least 8 characters"
            />
            <Button children="Set new password →" type="submit" size="lg" borderRadius="lg" />
          </LoginInputs>
        </Form>
        <CreateAccountWrapper>
          <div>
            <CreateAccountListItemLink href="/login">
              ← Return to log in
            </CreateAccountListItemLink>
          </div>
          <SecBadge>SOC 2 · ISO 27001</SecBadge>
        </CreateAccountWrapper>
      </LoginContainer>
    </AuthLayout>
  );
}
export default ResetPassword;
