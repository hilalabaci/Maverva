import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

export const GlobalStyle = createGlobalStyle`
#root,
#root > div {
  height: 100vh;
}
body {
  
}
`;
export const NavbarContainer = styled.header`
  position: fixed;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #ffff;
  @media only screen and (max-width: 768px) {
  }
`;

export const BrandWrapper = styled.div`
  margin-left: 150px;
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const LoginContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  color: rgba(255, 255, 255, 0.7);
  font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  background: linear-gradient(135deg, #567c8d, #2f4156);
`;
export const LoginSection = styled.section`
  flex: 1;
`;
export const BrandContainer = styled.a`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
`;

export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  font-family: Inter;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const LoginInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  padding: 60px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  box-shadow: 0 24px 64px #26214a1a;
  border-radius: 15px;
  background: #ffffff;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    width: 85%;
    height: 100vh;
    padding: 160px 30px 0 30px;
    border-radius: 0;
    justify-content: flex-start;
  }
`;
export const FormTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #2f4156;
  text-align: center;
  padding-bottom: 15px;
  margin: 0;
  @media only screen and (max-width: 768px) {
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
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const MessageError = styled.p`
  color: #ed4956;
`;
export const RememberWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 15px;
`;
export const CheckBoxText = styled.span`
  color: #172b4d;
  font-size: 0.9rem;
  opacity: 0.7;
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
  font-family: "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
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
