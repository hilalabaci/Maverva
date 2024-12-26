import {
  Container,
  EmailLabel,
  RegisterForm as StyledRegisterForm,
  RegisterFormWrapper,
  AccoutCreatInput,
  EmailHelpText,
  SubmitWrapper,
  SubmitButton,
  SubmitButtonText,
} from "./styles";

function RegisterForm() {
  return (
    <Container>
      <StyledRegisterForm>
        <RegisterFormWrapper>
          <EmailLabel>Work email</EmailLabel>
          <AccoutCreatInput type="email" placeholder="you@company.com" />
          <EmailHelpText>
            Find teammates, plus keep work and life separate by using your work
            email.
          </EmailHelpText>
        </RegisterFormWrapper>
        <SubmitWrapper></SubmitWrapper>
        <SubmitButton />
      </StyledRegisterForm>
    </Container>
  );
}
export default RegisterForm;
