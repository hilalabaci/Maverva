import DynamicSVGBrand from "../../components/ DynamicSVG/LogoSVG";
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
type SendVerificationEmailPropsType = {
  loginEmail: string;
};

function SendVerificationEmail({ loginEmail }: SendVerificationEmailPropsType) {
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
                <EmailforLogin>hilalabaci55@gmail.com</EmailforLogin>
              </ExplainTitle>
              <ButtonWrapper>
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
