import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 75px;
  width: -webkit-fill-available;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: 50px;
  }
`;

export const BoardTitle = styled.h1`
  font-size: 17px;
  margin: 15px;
  font-weight: 600;
  color: #ffffff;
  
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  overflow: hidden;
  max-width: 600px;
  &:hover {
    background-color: #535353;
  }
 
`;

export const TitleContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.16);
  border-radius: 2px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EditBoardTitle = styled.input`
  background-color: rgba(0, 0, 0, 0.003);
  border: 2px solid #007bff;

  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 1px;
  text-align: center;
  vertical-align: center;
  text-transform: uppercase;
`;
