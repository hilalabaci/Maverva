import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

`;

export const Container = styled.div`
  display: flex;
  height: 75px;
  width: -webkit-fill-available;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: 50px;
    align-items: start;
  }
`;

export const BoardTitle = styled.h1`
  font-size: 17px;
  margin: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColour};
  font-family: "Inter";
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  overflow: hidden;
  max-width: 600px;
  :hover {
    background-color: ${(props) => props.theme.boardBG};
  }
  @media only screen and (max-width: 768px) {
    font-size: 11px;
    margin: 10px;
  }
`;

export const TitleContainer = styled.div`
  background-color: ${(props) => props.theme.boardColour};
  border-radius: 5px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: 35px;
    margin-top: 5px;
  }
`;

export const EditBoardTitle = styled.input`
  background-color: ${(props) => props.theme.boardColour};
  border: 2px solid #007bff;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColour};
  font-family: "Inter";
  letter-spacing: 1px;
  text-align: center;
  vertical-align: center;
  text-transform: uppercase;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
