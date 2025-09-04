import { useSearchParams } from "react-router-dom";
import { loginVerificationEmail } from "../../api/authApi";
import DynamicSVGBrand from "../../components/ DynamicSVG/LogoSVG";
import { useUserContext } from "../../contexts/UserContext";
import {
  BrandContainer,
  BrandWrapper,
  Form,
  GlobalStyle,
  LoginContainer,
  LoginSection,
  MainContainer,
  NavbarContainer,
} from "../login/styles";
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
  const [searchParams] = useSearchParams();
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
        </LoginSection>
      </LoginContainer>
    </MainContainer>
  );
}

export default VerifyEmailPage;
