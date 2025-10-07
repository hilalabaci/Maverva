import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { device } from "../../../styles/breakpoints";

export const GlobalStyle = createGlobalStyle`
#root,
#root > div {
  height: 100vh;
}
body {
  
}
`;

export const LoginContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  color: rgba(255, 255, 255, 0.7);
  background: linear-gradient(135deg, #567c8d, #2f4156);
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 30px;
 @media ${device.mobile} {
    width: 100%;
    justify-content: flex-start;
  }
`;
export const LoginInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  padding: 60px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  box-shadow: 0 24px 64px #26214a1a;
  border-radius: 3px;
  background: #ffffff;
  gap: 20px;
 @media ${device.mobile} {
    width: 86%;
    height: 100vh;
    padding: 160px 30px 0 30px;
    border-radius: 0;
    justify-content: flex-start;
  }
`;
export const FormTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colour.text.inverted};
  text-align: center;
  padding-bottom: 15px;
  margin: 0;
 @media ${device.mobile} {
    font-size: 20px;
  }
`;
export const StyledLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  opacity: 0.5;
  &:hover {
    color: #007bff;
    opacity: 1;
  }
 @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSize.default};
  }
`;
export const EmailIcon = styled(MailOutlinedIcon)`
  color: #091e4240;
`;
export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5em;
  padding-inline-start: 1.25rem;
  border-radius: 2rem;
  outline: none;
  box-shadow: 0 1px 1px 0 #091e4240, 0 0 1px 0 #091e424f;
font-size: ${(props) => props.theme.fontSize.default};
  font-weight: 400;
  background-color: #ffffff;
`;
export const AccoutCreatInput = styled.input`
  border: none;
  font-size: ${(props) => props.theme.fontSize.default};
  outline: none;
  font-weight: 400;
  flex: 1;
  color: navy;
`;
export const CreateAccountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const CreateAccountListItemLink = styled.a`
  color: #0c66e4;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
