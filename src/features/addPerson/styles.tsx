import styled, { createGlobalStyle } from "styled-components";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
export const GlobalStyle = createGlobalStyle`

`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.fontColour2};
  background-color: ${(props) => props.theme.modalBg};
  border-radius: 5px;
  font-weight: 600;
`;
export const GenerelWrapper = styled.div`
  width: 400px;
`;
export const FielsetWrapper = styled.fieldset`
  border: none;
  max-width: 354px;
  margin: 0px auto;
`;
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0 24px 0;
`;
export const TitleWrapper = styled.legend``;
export const Title = styled.h3`
  font-size: 20px;
  margin-top: 24px;
`;
export const MailWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6px;
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
  background-color: ${(props) => props.theme.modalBg};
  border: none;
  outline: none;
  font-size: 14px;
  padding: 5px;
  border-radius: 2px;
  padding: 9px;
  &:hover {
    background-color: ${(props) => props.theme.modalInputBg};
  }
`;
export const SubmitButton = styled.button`
  font-size: 14px;
  padding: 9px;
  background-color: #0c66e4;
  color: white;
  outline: none;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.submitButtonHover};
  }
`;
export const WarningMessage = styled.span`
  font-size: 12px;
  color: #c9372c;
  font-weight: 500;
`;
export const AddProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
export const IconDown = styled(KeyboardArrowDownOutlinedIcon)`
  font-size: 16px !important;
  font-weight: 700 !important;
`;
export const InputforProjectDropDown = styled.input`
  font-size: 14px;
  font-weight: 14px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.theme.fontColour};
  width: 100%;
  &:focus-visible {
    outline: ${(props) => props.theme.activeBorder};
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const InputWrapperwithIcon = styled.div`
  height: 20px;
  font-size: 14px;
  background-color: ${(props) => props.theme.modalInputBg};
  border: 1px solid;
  border-radius: 3px;
  padding: 4px 7px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TitleforProject = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColourSoft};
  &::after {
    content: "*";
    margin-left: 3px;
    position: relative;
    top: -2px;
    color: red;
  }
`;
