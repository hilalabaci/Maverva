import styled, { createGlobalStyle } from "styled-components";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const InputStyle = styled.input`
  background-color: ${(props) => props.theme.primary};
  border: none;
  color: ${(props) => props.theme.fontColour};
  font-family: "Inter";
  outline: none;
  letter-spacing: 0.05em;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Container = styled.form`
  border: 1px solid ${(props) => props.theme.fontColour};
  height: 45px;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: 0.7;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
    margin: 0;
    height: 30px;
  }
`;
export const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;
export const Okicon = styled(CheckCircleIcon)`
  color: ${(props) => props.theme.fontColour};
  opacity: 0.5;
  font-size: 18px !important;
  :hover {
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
export const GlobalStyle = createGlobalStyle`

`;
