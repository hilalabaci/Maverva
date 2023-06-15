import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

`;
export const Container = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  :hover {
    position: relative;
    background-color: #fff;
    color: #4351e8;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: example;
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
export const UserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100px;
`;
