import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/common/button/actionButton";
import { useNavigate } from "react-router-dom";
import {
  BrandContainer,
  Form,
  FormTitle,
  GlobalStyle,
  LoginContainer,
  LoginInputs,
  MainContainer,
  NavbarContainer,
  BrandWrapper,
  LoginSection,
  CreateAccountWrapper,
  CreateAccountListItemLink,
  Point,
} from "./styles";
import Input from "../../components/common/input/round";
import DynamicSVGBrand from "../../components/ DynamicSVG/LogoSVG";

interface FormError {
  password?: string;
}
interface FormData {
  password: string;
}

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<FormError>({ password: undefined });
  const [success, setSuccess] = useState(false);

  const [displayPassword, setDisplayPassword] = useState(false);

  function handleChange(value: string) {
    setPassword(value);
    if (error.password) {
      setError((prev) => ({ ...prev, email: undefined }));
    }
  }
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {};
  // async function verifyToken(token: string) {
  //   try {
  //     const res = await fetch(`/api/verify-token?token=${token}`);
  //     if (!res.ok) return false;
  //     const data = await res.json();
  //     return data.ok;
  //   } catch (err) {
  //     return false;
  //   }
  // }

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setError({});
  //   try {
  //     if (login.password === "") {
  //       setError({
  //         password: "Please enter your email",
  //       });
  //       return;
  //     }
  //     if (
  //       /^[a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)+$/.test(
  //         login.password
  //       ) === false
  //     ) {
  //       setError({
  //         password: "This is not valid email address.",
  //       });
  //       return;
  //     }
  //     if (!token) return;
  //     const response = await resetPassword(login.password, token);
  //     console.log(response);
  //     if (response.ok) {
  //       setDisplayPassword(true);
  //     } else {
  //       setError({
  //         password:
  //           (response.data as { message?: string })?.message ||
  //           "Please sign up to continue",
  //       });
  //       setTimeout(() => {
  //         const continueUrl = encodeURIComponent(
  //           "https://local300/gateway/api/start/authredirect"
  //         );
  //         navigate(
  //           `/login/resetpassword/continue?link=${continueUrl}&email=${encodeURIComponent(
  //             login.password
  //           )}`
  //         );
  //       }, 1500);
  //     }
  //   } catch (error) {
  //     setError({ password: "opps! somethings wrong, try again" });
  //   }
  // };

  // useEffect(() => {
  //   if (token && continueUrl) {
  //     // Token backend'de doğrulandıktan sonra kullanıcıyı yönlendir
  //     verifyToken(token).then((ok) => {
  //       if (ok) {
  //         window.location.href = continueUrl;
  //       } else {
  //         alert("Token invalid or expired");
  //       }
  //     });
  //   }
  // }, [token, continueUrl]);
  return (
    <MainContainer>
      <GlobalStyle />
      <NavbarContainer>
        <BrandWrapper>
          <BrandContainer href="/">
            <DynamicSVGBrand width="150" height="40" />
          </BrandContainer>
        </BrandWrapper>
      </NavbarContainer>
      <LoginContainer>
        <LoginSection>
          <Form onSubmit={handleSubmit}>
            <LoginInputs>
              <FormTitle>Can't log in?</FormTitle>
              <Input
                type="password"
                placeholder="Enter your email "
                value={password}
                onChange={handleChange}
                name="password"
                error={error.password}
                label="Password"
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
        </LoginSection>
      </LoginContainer>
    </MainContainer>
  );
}
export default ResetPassword;
