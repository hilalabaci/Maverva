import { signUpVerificationCode } from "../../../api/auth-api";
import { useUserContext } from "../../../contexts/UserContext";
import { Form, GlobalStyle } from "../LoginPage/styles";
import {
  ButtonText,
  ButtonWrapper,
  ContainerSendEmail,
  EmailforLogin,
  ErrorMessage,
  ExplainTitle,
  IllusSendEmail,
  ImgWrapper,
  Title,
  VerifyCodeWrapper,
} from "./styles";
import VerifyCodeInput from "../../../components/ui/VerifyCodeInput";
import ActionButton from "../../../components/ui/Button/BaseButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorSVG from "../../../assets/icons/error-svg";
import BoxLayout from "../../../components/layout/boxLayout";

function VerifyCodePage({ reSendCode }: { reSendCode?: () => void }) {
  const { setUser, token } = useUserContext();
  const [code, setCode] = useState<number | "">("");
  const [error, setError] = useState<string | null>(null);
  const [email] = useState<string>(localStorage.getItem("signupEmail") || "");
  const navigate = useNavigate();

  async function handleSendVerify() {
    try {
      if (!code || !token || !email) return;
      const response = await signUpVerificationCode(email, code, token);
      if (response.ok && response.data) {
        localStorage.removeItem("signupEmail");
        setUser(response.data.user);
        navigate("/projects");
      }
    } catch (error: any) {
      setError(
        error?.response?.data?.message ||
          error?.message ||
          "An error occurred during verification."
      );
    }
  }
  return (
    <BoxLayout>
      <GlobalStyle />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendVerify();
        }}
      >
        <ContainerSendEmail>
          <Title> Check your inbox to register in</Title>
          <ImgWrapper>
            <IllusSendEmail src="/email/sendEmail.png" />
          </ImgWrapper>
          <ExplainTitle>
            To complete setup and sign up, click the verification code in the
            email we’ve sent toxw
            <EmailforLogin>{email}</EmailforLogin>
          </ExplainTitle>
          <VerifyCodeWrapper>
            <VerifyCodeInput onChange={(newCode) => setCode(newCode)} />
            {error && (
              <ErrorMessage>
                <ErrorSVG /> {error}
              </ErrorMessage>
            )}
            <ActionButton children="Verify" size="lg" />
          </VerifyCodeWrapper>
          <ButtonWrapper type="submit">
            <ButtonText>Resend verification code</ButtonText>
          </ButtonWrapper>
        </ContainerSendEmail>
      </Form>
    </BoxLayout>
  );
}

export default VerifyCodePage;
