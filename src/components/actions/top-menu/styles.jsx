import styled, { createGlobalStyle } from "styled-components";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonIcon from "@mui/icons-material/Person";
export const GlobalStyle = createGlobalStyle`

`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
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
  //background-color: ${(props) => props.theme.boardColour};
  border-radius: 2px;
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
export const AssignMemberContainer = styled.div`
  display: flex;
`;
export const ButtonStylesforIconPerson = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  margin-left: -10px;
  border-radius: 50px;
  font-family: Inter;
  width: 40px;
  height: 40px;
  background-color: #b6c2cf;
  border: 2px solid  ${(props) => props.theme.primary};
  :hover {
    z-index: 1;
  }
`;
export const ButtonStylesforPersonAdd = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  margin-left: 10px;
  border-radius: 50px;
  font-family: Inter;
  width: 40px;
  height: 40px;
  background-color: #a1bdd914;
  color: #b6c2cf;
  :hover {
    background-color: #a6c5e229;
  }
`;

export const IconPersonAdd = styled(PersonAddAlt1Icon)`
  width: 25px !important;
  height: 25px !important;
  color: ${(props) => props.theme.fontColour};
`;
export const IconPerson = styled(PersonIcon)`
  width: 25px !important;
  height: 25px !important;
  color: #1d2125;
`;
