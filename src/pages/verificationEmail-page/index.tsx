import { loginVerificationEmail } from "../../api/authApi";
import { useUserContext } from "../../contexts/UserContext";
import { Form, GlobalStyle, LoginContainer } from "../login/styles";
import {
  ButtonText,
  ButtonWrapper,
  ContainerSendEmail,
  EmailforLogin,
  ExplainTitle,
  IllusSendEmail,
  ImgWrapper,
  Title,
} from "./styles";

function VerifyEmailPage() {
  const { user, token } = useUserContext();
  async function handleSendVerify() {
    try {
      if (!user || !token) return;
      const { ok, data } = await loginVerificationEmail(
        user.Email,
        token,
        "login"
      );
      if (ok && data) {
      }
    } catch (error) {}
  }
  return (
    <LoginContainer>
      <GlobalStyle />
      <Form>
        <ContainerSendEmail>
          <Title> Check your inbox to log in</Title>
          <ImgWrapper>
            <IllusSendEmail src="/email/sendEmail.png" />
          </ImgWrapper>
          <ExplainTitle>
            To complete setup and log in, click the verification link in the
            email we’ve sent tos
            <EmailforLogin>{user?.Email}</EmailforLogin>
          </ExplainTitle>
          <ButtonWrapper onClick={handleSendVerify}>
            <ButtonText>Resend verification email</ButtonText>
          </ButtonWrapper>
        </ContainerSendEmail>
      </Form>
    </LoginContainer>
  );
}

export default VerifyEmailPage;
