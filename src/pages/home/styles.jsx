import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #root,
  #root > div {
    height: 100vh;
    overflow: hidden;
  }
  body {
   
  }
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.fontColour};
  flex: 1;
`;
export const NavbarWrapper = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Menu = styled.div`
display: flex;
  width: ${(props) => (props.$hidden ? "50px" : "250px")};
`;
export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
`;
export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 35px;
  @media only screen and (max-width: 768px) {
    margin-left: 10px;
    overflow-x: scroll;
  }
`;
export const MainTitle = styled.div`
  width: 264px;
`;
