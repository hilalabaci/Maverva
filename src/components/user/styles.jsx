import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

`;

export const Container = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  :hover {
    border: 2px solid #007bff;
    transition: border-top-color 0.15s linear,
      // Stagger border appearances
      border-right-color 0.15s linear 0.1s,
      border-bottom-color 0.15s linear 0.2s;
  }
`;
export const UserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100px;
`;
