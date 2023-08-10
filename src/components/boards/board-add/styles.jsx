import styled, { createGlobalStyle } from "styled-components";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const InputStyle = styled.input`
  background-color: #181b1e;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-family: "Inter";
  outline: none;
  letter-spacing: 0.05em;
  padding: 0;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Container = styled.form`
  border: 1px solid rgba(255, 255, 255, 0.7);
  height: 45px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  opacity: 0.7;
  font-size: 20px;
  margin: 0 30px;
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
  padding: 0;
`;
export const Okicon = styled(CheckCircleOutlineIcon)`
  color: white;
  opacity: 0.2;
  :hover {
    background-color: #14641c;
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
