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
  background-color: ${(props) => props.theme.projectColour};
  border-radius: 5px;
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
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 29px;
  color: ${(props) => props.theme.fontColour};
  display: inline-block;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const CardWrapper = styled.div`
  overflow: scroll;
  max-height: 480px;
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
  opacity: 0.5;
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
