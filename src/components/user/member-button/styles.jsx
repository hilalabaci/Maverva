import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.fontColour};
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
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
  @media only screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
export const UserInitials = styled.h1`
  font-size: 15px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
