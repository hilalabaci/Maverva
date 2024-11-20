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
`;
export const NavbarWrapper = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProjectMenuAndSideBar = styled.div`
  display: flex;
  flex-direction: row;
`;

type MenuPropsType = {
  $hidden?: boolean;
};
export const Menu = styled.div<MenuPropsType>`
  display: flex;
  width: ${(props) => (props.$hidden ? "50px" : "")};
`;
export const Main = styled.div``;
export const ActiveSprintWrapper = styled.div`
  margin-right: 100px;
  margin-bottom: 100px;
`;
export const BacklogWrapper = styled.div`
  margin-right: 40px;

`;
export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    margin-left: 7px;
    overflow-x: scroll;
  }
`;
export const MainTitle = styled.div`
  width: 264px;
`;
