import styled, { createGlobalStyle } from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const GlobalStyle = createGlobalStyle`

`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  background-color: ${(props) => props.theme.modalBg};
  //border: 1px solid ${(props) => props.theme.fontColour};
  //height: 45px;
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
export const GeneralWrapper = styled.form`
  padding: 40px 30px;
`;
export const FielsetWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  gap: 12px;
  padding: 0;
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
  outline: none;
  letter-spacing: 0.05em;
  :focus-visible {
    border: ${(props) => props.theme.activeBorder};
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
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
`;
export const TitleforBoard = styled.label`
  font-size: 12px;
  font-weight: 600;
  padding: 5px 0 0;
  ::after {
    content: "*";
    margin-left: 3px;
    position: relative;
    top: -2px;
    color: red;
  }
`;

export const DetailTitle = styled.h3``;

export const AddBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DetailsInfo = styled.div``;
export const ProjectLeadInputWrapper = styled.div``;
export const DetailWrapper = styled.div`
  box-sizing: border-box;
  vertical-align: top;
  max-width: 450px;
`;
export const ProjectLeadWrapper = styled.div``;

export const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;
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
