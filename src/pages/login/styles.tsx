import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { device } from "../../styles/breakpoints";

export const GlobalStyle = createGlobalStyle`
#root,
#root > div {
  height: 100vh;
}
body {
  
}
`;

export const LoginContainer = styled.div``;

export const MainContainer = styled.div`
  flex: 1;
  display: flex;
 @media ${device.mobile} {
    flex-direction: column;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 @media ${device.mobile} {
    width: 100%;
    justify-content: flex-start;
  }
`;
export const LoginInputs = styled.div`
  display: flex;
  flex-direction: column;
justify-content: flex-start;
  padding: 60px 0;
  gap: 20px;
  width: 100%;
 @media ${device.mobile} {
    width: 86%;
    height: 100vh;
    padding: 160px 30px 0 30px;
    border-radius: 0;
    justify-content: flex-start;
  }
`;
export const FormTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #2f4156;
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
    font-size: 14px;
  }
`;
export const LineforGoogleWrapper = styled.div`
  font-size: 13px;
  line-height: 0.25px;
  font-weight: 500;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #2f4156;
  opacity: 0.6;
`;
export const FirstLine = styled.div`
  border-style: solid;
  margin-right: 1rem;
  margin-left: 1rem;
  opacity: 0.25;
  border-width: 0.125px;
  flex-grow: 1;
`;
export const LastLine = styled.div`
  border-style: solid;
  opacity: 0.25;
  border-width: 0.125px;
  margin-left: 1rem;
  margin-right: 1rem;
  flex-grow: 1;
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
  font-size: 1rem;
  font-weight: 400;
  background-color: #ffffff;
`;
export const AccoutCreatInput = styled.input`
  border: none;
  font-size: 1rem;
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

export const Point = styled.p`
  color: #44546f;
  margin: 0 8px;
  text-align: center;
  font-size: 1.5rem;
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
