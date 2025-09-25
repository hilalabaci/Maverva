import styled, { createGlobalStyle } from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { device } from "../../../styles/breakpoints";

export const GlobalStyle = createGlobalStyle`

`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  background-color: ${(props) => props.theme.colour.modal.background.default};
  //border: 1px solid ${(props) => props.theme.fontColour};
  //height: 45px;
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
    height: 100vh;
    width: fit-content;
  }
`;
export const GeneralWrapper = styled.form`
  padding: 40px 30px;
  @media ${device.mobile} {
    background: ${(props) => props.theme.colour.background.default};
    height: 100vh;
  }
`;
export const FielsetWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  gap: 12px;
  padding: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${device.mobile} {
    flex-direction: column;
    gap: 24px;
  }
`;
export const WrapperChild = styled.div``;
export const InfoTitle = styled.h2`
  box-sizing: border-box;
  font-weight: 500;
  @media ${device.mobile} {
    font-size: 20px;
  }
`;

export const DetailTitle = styled.h3`
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const AddProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
export const DetailsInfo = styled.div`
  font-weight: 400;
  color: ${(props) => props.theme.colour.text.subtitle};
  @media ${device.mobile} {
    font-size: 14px;
  }
`;
export const DetailWrapper = styled.div`
  box-sizing: border-box;
  vertical-align: top;
  font-size: 14px;
  max-width: 450px;

  @media ${device.mobile} {
    width: fit-content;
    font-size: 14px;
  }
`;
export const ProjectLeadWrapper = styled.div``;

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
export interface SubmitButtonStyledButton {
  $isFilled?: boolean;
}
export const SubmitButton = styled.button<SubmitButtonStyledButton>`
  font-size: 14px;
  padding: 9px;
  background-color: ${(props) =>
    props.$isFilled
      ? `${props.theme.colour.primary.button.primary.background.default}`
      : `${props.theme.colour.primary.button.secondary.background.default}`};
  color: ${(props) =>
    props.$isFilled
      ? `${props.theme.colour.primary.button.primary.text.default}`
      : `${props.theme.colour.modal.text.default}`};
  outline: none;
  border: none;
  border-radius: 2px;
  transition: all 0.5s ease-out allow-discrete;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.button.primary.background.default};
    color: ${(props) => props.theme.colour.primary.button.primary.text.default};
  }
`;
