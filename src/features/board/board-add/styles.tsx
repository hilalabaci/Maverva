import styled, { createGlobalStyle } from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { device } from "../../../styles/breakpoints";

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
  background-color: ${(props) => props.theme.colour.modal.background.default};
  border-radius: 5px;
  color: ${(props) => props.theme.colour.text.primary};
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

  @media ${device.mobile} {
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
  font-size: ${(props) => props.theme.fontSize.default};
  background-color: ${(props) => props.theme.colour.modal.background.default};
  width: 250px;
  border: none;
  outline: ${(props) => props.theme.colour.modal.border.default};
  border-radius: 3px;
  padding: 4px 7px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const InputforProjectDropDown = styled.input`
  font-size: ${(props) => props.theme.fontSize.default};
  font-weight: 14px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colour.text.primary};
  width: 100%;
  &:focus-visible {
    outline: ${(props) => props.theme.colour.border.active};
  }
  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSize.subtitle};
  }
`;
export const IconDown = styled(KeyboardArrowDownOutlinedIcon)`
  font-size: 16px !important;
  font-weight: 700 !important;
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
  font-size: ${(props) => props.theme.fontSize.subtitle};
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
  @media ${device.mobile} {
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
  font-size: ${(props) => props.theme.fontSize.subtitle};
  margin: 4px 0 0 0;
`;
export interface SubmitButtonStyledButton {
  $isFilled?: boolean;
}
export const SubmitButton = styled.button<SubmitButtonStyledButton>`
  font-size: ${(props) => props.theme.fontSize.default};
  padding: 9px;
  background-color: ${(props) => (props.$isFilled ? " #0c66e4" : "#091e4208")};
  color: ${(props) => (props.$isFilled ? "white" : "#091e424f")};
  transition: all 0.5s ease-out allow-discrete;
  outline: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.submitButtonHover};
  }
`;
