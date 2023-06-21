import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 100px;
  background-color: #fff;
  position: relative;
  :hover {
    animation-duration: 4s;
    ::before {
      content: "";
      position: absolute;
      z-index: -1;
      inset: -2px;
      border-radius: 100px;
      background: linear-gradient(220.94deg, #3d80ff 30%, #903bf5 70%);
    }
  }
`;
export const UserInitials = styled.h1`
  text-transform: uppercase;
`;
