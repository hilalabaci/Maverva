import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

`;

export const Container = styled.div`
  display: flex;
  height: 56px;
  background-color: #0000003b;
  width: -webkit-fill-available;
  padding: 0 55px;
  align-items: center;
`;

export const BoardTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  font-family: "Inter";
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  padding-left:4px;

  /* text-transform: uppercase; */
  :hover {
    background-color: #535353;
  }
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
  text-align: start;
  vertical-align:center;
  width: fit-content;
`;
