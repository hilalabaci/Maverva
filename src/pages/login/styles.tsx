import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
#root,
#root > div {
  min-height: 100vh;
}
body {
 
  box-shadow: inset 0px 1px 20px 20px rgba(0, 0, 0, 0.25);
}
`;

export const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: rgba(255, 255, 255, 0.7);
  background-color: #181b1e;
  font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;
export const BrandContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
`;
export const BrandTitle = styled.h1`
  font-size: 70px;
  margin-right: 50px;
  letter-spacing: 1px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    margin-right: 0;
  }
`;
export const BrandIcon = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 50px;
  @media only screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
`;
export const LoginInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  @media only screen and (max-width: 768px) {
    width: max-content;
  }
`;
export const FormTitle = styled.h2`
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 2px;
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
