import styled, { createGlobalStyle } from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export const GlobalStyle = createGlobalStyle`

`;
export const OptionalContainer = styled.div``;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px 25px;
  min-width: 900px;
  min-height: 293px;
  background-color: ${(props) => props.theme.modalBg};
  border-radius: 5px;
  color: ${(props) => props.theme.fontColour};
  font: var(
    --ds-font-body,
    normal 400 14px / 1.42857142857143 -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    sans-serif
  );

  @media only screen and (max-width: 768px) {
    font-size: 10px;
    margin: 0;
    height: 30px;
  }
`;
export const GeneralWrapper = styled.form``;
export const FielsetWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  gap: 12px;
  padding: 0;
  color: ${(props) => props.theme.memberMenuFontColor};
  margin-top: 20px;
`;

export const WrapperforText = styled.div``;
export const InputWrapperwithIcon = styled.div`
  height: 20px;
  font-size: 14px;
  background-color: ${(props) => props.theme.modalInputBg};
  width: 250px;
  border: 1px solid;
  border-radius: 3px;
  padding: 4px 7px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
export const InputStyle = styled.input`
  height: 20px;
  font-size: 14px;
  font-weight: 14px;
  background-color: ${(props) => props.theme.modalInputBg};
  border: 1px solid;
  border-radius: 3px;
  padding: 4px 7px 5px;
  width: 250px;
  color: ${(props) => props.theme.fontColour};
  letter-spacing: 0.05em;
  &:focus-visible {
    outline: ${(props) => props.theme.activeBorder};
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const IconDown = styled(KeyboardArrowDownOutlinedIcon)`
  font-size: 16px !important;
  font-weight: 700 !important;
`;
export const InputforProjectLead = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  font-size: 14px;
  font-weight: 14px;
  background-color: ${(props) => props.theme.modalInputBg};
  border: 1px solid;
  border-radius: 3px;
  padding: 4px 7px 5px;
  width: 250px;
  color: ${(props) => props.theme.fontColour};
  outline: none;
  gap: 5px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const WrapperChild = styled.div``;
export const InfoTitle = styled.h2`
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => props.theme.memberMenuFontColor};
`;
export const TitleforProject = styled.label`
  font-size: 12px;
  font-weight: 600;
  &::after {
    content: "*";
    margin-left: 3px;
    position: relative;
    top: -2px;
    color: red;
  }
`;

export const DetailTitle = styled.h3``;

export const AddProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
export const DetailsInfo = styled.div``;
export const ProjectLeadInputWrapper = styled.div``;
export const DetailWrapper = styled.div`
  box-sizing: border-box;
  vertical-align: top;
  max-width: 450px;
`;
export const ProjectLeadWrapper = styled.div``;

// export const SubmitButton = styled.button`
//   background-color: transparent;
//   border: none;
//   outline: none;
// `;
export const Okicon = styled(CheckCircleIcon)`
  color: ${(props) => props.theme.fontColour};
  opacity: 0.5;
  font-size: 18px !important;
  &:hover {
    color: #14641c;
    border-radius: 50%;
    opacity: 1;
    border: none;
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    font-size: 18px !important;
  }
`;
export const Options = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin: 20px 0 0;
`;
export const CreateButton = styled.button``;
export const LinkforCancelButton = styled.a``;
export const Description = styled.div`
  font-size: 12px;
  margin: 4px 0 0 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;
export interface SubmitButtonStyledButton {
  $isFilled?: boolean;
}
export const SubmitButton = styled.button<SubmitButtonStyledButton>`
  font-size: 14px;
  padding: 9px;
  background-color: ${(props) => (props.$isFilled ? " #0c66e4" : "#091e4208")};
  color: ${(props) => (props.$isFilled ? "white" : "#091e424f")};
  transition: all 0.5s ease-out allow-discrete;
  outline: none;
  border: none;
  border-radius: 2px;
  &:hover {
    background-color: ${(props) => props.theme.submitButtonHover};
  }
`;
