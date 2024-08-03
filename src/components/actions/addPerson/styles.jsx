import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vh;
`;
export const GenerelWrapper = styled.div`
  width: 354px;
  background-color: #282e32;
  color: ${(props) => props.theme.fontColour};
  font-weight: 600;
  font-family: Inter;
  border-radius: 2px;
  padding: 10px;
`;
export const FielsetWrapper = styled.fieldset`
  border: none;
`;
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TitleWrapper = styled.legend``;
export const Title = styled.h1`
  font-size: 20px;
`;
export const MailWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const LabelTitle = styled.label`
  font-size: 12px;
  color: rgba(136, 151, 165, 255);
`;
export const MailInput = styled.input`
  background-color: #22272b;
  padding: 10px;
  border: 1px solid rgba(55, 64, 73, 255);
  border-radius: 2px;
  color: ${(props) => props.theme.fontColour};
  :focus-visible {
    border: ${(props) => props.theme.activeBorder};
    outline: none;
  }
`;

export const RoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const RoleCheckbox = styled.input`
  background-color: #22272b;
  padding: 10px;
  border: 1px solid rgba(55, 64, 73, 255);
  border-radius: 2px;
  color: ${(props) => props.theme.fontColour};
  :focus-visible {
    border: ${(props) => props.theme.activeBorder};
    outline: none;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;
export const CancelButton = styled.button`
  color: ${(props) => props.theme.fontColour};
  background-color: #282e32;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 5px;
  border-radius: 2px;
  padding: 9px;
  :hover {
    background-color: rgba(50, 57, 64, 255);
  }
`;
export const SubmitButton = styled.button`
  font-size: 14px;
  padding: 9px;
  background-color: #579dff;
  outline: none;
  border: none;
  border-radius: 2px;
  :hover {
    background-color: rgba(143, 180, 230, 255);
  }
`;
