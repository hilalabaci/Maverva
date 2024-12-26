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
export const MainContainer = styled.div`
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: rgba(255, 255, 255, 0.7);
  background-color: #181b1e;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const RegisterContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    align-items: start;
  }
`;
export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RegisterInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  @media only screen and (max-width: 768px) {
    width: max-content;
  }
`;
export const RegisterTitle = styled.h2`
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 2px;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
    padding: 10px 0;
  }
`;
