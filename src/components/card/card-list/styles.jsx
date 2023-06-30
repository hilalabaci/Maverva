import styled, { createGlobalStyle } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
export const GlobalStyle = createGlobalStyle`
.addIcon-button{
  margin-right: 10px;
}

`;
export const Container = styled.div`
  width: 270px;
  padding: 25px;
  background-color: #111315;
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
  gap: 15px;
`;
export const Title = styled.title`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: rgba(255, 255, 255, 0.7);
  display: inline-block;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const CardWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1;
  -webkit-overflow-scrolling: touch;
`;
export const AddCardButtonWrapper = styled.div`
  margin-top: 30px;
`;
export const AddCardButton = styled.button`
  background-color: #181b1e;
  width: 259px;
  height: 45px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-family: "Inter";
  font-size: 19px;
  color: rgba(255, 255, 255, 0.7);
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
    font-size: 15px;
    padding: 5px;
  }
`;
export const IconAdd = styled(AddIcon)`
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
