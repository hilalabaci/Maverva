import styled, { createGlobalStyle } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
export const GlobalStyle = createGlobalStyle`
.addIcon-button{
  margin-right: 10px;
}

`;
export const Container = styled.div`
  width: 250px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.boardColour};
  border-radius: 2px;
  margin-right: 40px;
  @media only screen and (max-width: 768px) {
    width: 200px;
    border-radius: 15px;
    padding: 15px;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const Title = styled.title`
  
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 29px;
  color: ${(props) => props.theme.fontColour};
  display: inline-block;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const CardWrapper = styled.div`
  overflow: scroll;
  max-height:480px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1;
  -webkit-overflow-scrolling: touch;
  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;
export const AddCardButtonWrapper = styled.div`
  margin-top: 15px;
`;
export const AddCardButton = styled.button`
  background-color: ${(props) => props.theme.boardColour};
  width: 259px;
  height: 45px;
  outline: none;
  border: none;
  border-radius: 2px;
  font-size: 13px;
  color: ${(props) => props.theme.fontColour};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  opacity: 0.5;
  :hover {
    opacity: 1;
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
