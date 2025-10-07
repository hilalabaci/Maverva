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
import Input from "../../../components/ui/Input/round";
import { resetPassword } from "../../../api/auth-api";
import { useUserContext } from "../../../contexts/UserContext";
import BoxLayout from "../../../components/layout/boxLayout";
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
    <BoxLayout>
      <GlobalStyle />
      <LoginContainer>
        <Form onSubmit={handleSubmit}>
          <LoginInputs>
            <FormTitle>Choose a new password</FormTitle>
            <Input
              type="password"
              placeholder="Enter your email "
              value={login.password}
              onChange={handleChange}
              name="password"
              error={error}
              label="Password"
              infoMessage="Password must have at least 8 characters"
            />
            <Button children="Continue" type="submit" />
            <CreateAccountWrapper>
              <CreateAccountListItemLink href="/login">
                Still having trouble logging in?
              </CreateAccountListItemLink>
            </CreateAccountWrapper>
          </LoginInputs>
        </Form>
      </LoginContainer>
    </BoxLayout>
  );
}
export default ResetPassword;
