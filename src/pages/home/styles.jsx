import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #root,
  #root > div {
    min-height: 100vh;
  }
  body {
    background-color: #181b1e;
    margin: 10px;
  }
`;

export const Container = styled.div`
  flex: 1;
`;
export const NavbarWrapper = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 89%;
`;
export const Menu = styled.div`
  flex: 1;
  max-width: 20vw;
  border-right: 1px solid rgba(255, 255, 255, 0.13);
`;
export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: 30px;

`;
export const MainContainer=styled.div`
margin-left: 40px;
`
export const MainTitle=styled.div`
  width: 264px;
`
