import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

`;
export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 100px;
  //border: 1px solid ${(props) => props.theme.fontColour};
  //background: linear-gradient(135deg, #71b7e6, #9b59b6);
  background-color: #de835d;
  position: relative;
  &:hover {
    animation-duration: 4s;
    ::before {
      content: "";
      position: absolute;
      z-index: -1;
      inset: -2px;
      border-radius: 100px;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
export const UserInitials = styled.h1`
  font-size: 10px;
  text-transform: uppercase;
  color: #182a4e;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
