import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

`;

export const Container = styled.div`
  display: flex;
  height: 75px;
  width: -webkit-fill-available;
  align-items: center;
`;

export const BoardTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  font-family: "Inter";
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  :hover {
    background-color: #535353;
  }
`;

export const TitleContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.16);
  border-radius: 5px;
  width: 264px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditBoardTitle = styled.input`
  background-color: rgba(0, 0, 0, 0.003);
  border: 2px solid #007bff;
  outline: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  font-family: "Inter";
  letter-spacing: 1px;
  text-align: center;
  vertical-align: center;
  width: fit-content;
  text-transform: uppercase;
`;
