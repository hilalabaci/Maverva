import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
.addIcon-button{
  margin-right: 10px;
}
`;
export const Container = styled.div`
  width: fit-content;
  padding: 25px;
  background-color: #111315;
  border-radius: 5px;
  margin-right: 40px;
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
`;
export const CardWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
`;
