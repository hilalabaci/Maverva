import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 23pc;
`;
export const RegisterForm = styled.form``;
export const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const EmailLabel = styled.label`
  font-weight: 500;
  font-size: 0.857143em;
`;
export const AccoutCreatInput = styled.input`
  height: 2.57em;
  padding-inline-start: 1.25rem;
  border-radius: 15px;
  outline: none;
  border: 0px;
  font-size: 1rem;
  font-family: "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
`;
export const EmailHelpText = styled.div`
  font-size: 0.75rem;
  margin-block-start: 6px;
  color: #44546f;
`;
export const SubmitWrapper = styled.div``;
export const SubmitButton = styled.input`
  align-items: center;
  display: flex;
  font-weight: 500;
  height: 40px;
`;
export const SubmitButtonText = styled.span``;
