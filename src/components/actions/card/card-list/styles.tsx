import styled, { createGlobalStyle } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
export const GlobalStyle = createGlobalStyle`
.addIcon-button{
  margin-right: 10px;
}

`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  @media only screen and (max-width: 768px) {
    width: 200px;
    border-radius: 15px;
    padding: 15px;
  }
`;

export const CardWrapper = styled.div`
  overflow: scroll;
  min-height: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  -webkit-overflow-scrolling: touch;
  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;
export const AddCardButtonWrapper = styled.div`
  margin-top: 15px;
`;
export const AddCardButton = styled.button`
  background-color: ${(props) => props.theme.projectColour};
  width: 259px;
  height: 45px;
  outline: none;
  border: none;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.fontColour};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    opacity: 1;
    background-color: ${(props) => props.theme.cardBGHover};
    color: ${(props) => props.theme.memberMenuFontColor};
  }
  @media only screen and (max-width: 768px) {
    width: fit-content;
    height: fit-content;
    font-size: 10px;
    padding: 5px;
  }
`;
export const IconAdd = styled(AddIcon)`
  font-size: 18px !important;
  padding-right: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 10px !important;
  }
`;
