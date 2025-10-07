import { loginVerificationEmail } from "../../../api/auth-api";
import { useUserContext } from "../../../contexts/UserContext";
import { Form, GlobalStyle, LoginContainer } from "../LoginPage/styled";
import {
  ButtonText,
  ButtonWrapper,
  ContainerSendEmail,
  EmailforLogin,
  ExplainTitle,
  IllusSendEmail,
  ImgWrapper,
  Title,
} from "./styled";

function VerifyEmailPage() {
  const { user } = useUserContext();
  async function handleSendVerify() {
    try {
      if (!user) return;
      const { ok, data } = await loginVerificationEmail(user.Email, "login");
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
