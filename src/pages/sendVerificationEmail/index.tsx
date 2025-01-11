import apiHelper from "../../api/apiHelper";
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

function SendVerificationEmail() {
  const { user } = useUserContext();
  async function handleSendVerify() {
    try {
      if (!user) return;
      const { ok, data } = await apiHelper.loginVerificationEmail(user.email);
      if (ok && data) {
      }
    } catch (error) {
      console.log("opps! somethings wrong, try again");
    }
  }
  return (
    <MainContainer>
      <GlobalStyle />
      <NavbarContainer>
        <BrandWrapper>
          <BrandContainer href="/">
            <DynamicSVGBrand />
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
                email we’ve sent to
                <EmailforLogin>{user?.email}</EmailforLogin>
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

export default SendVerificationEmail;
