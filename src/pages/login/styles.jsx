import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
#root,
#root > div {
  min-height: 100vh;
}
body {
  overflow: hidden;
  box-shadow: inset 0px 1px 20px 20px rgba(0, 0, 0, 0.25);
}
`;

export const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: rgba(255, 255, 255, 0.7);
  font-family: "Inter";
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
`;
export const BrandIcon = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 50px;
`;
export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-family: Inter;
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
`;
export const FormTitle = styled.h2`
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 2px;
`;
