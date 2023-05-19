import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 15px;
  height: 100vh;
`;
export const AddBoardWrapper = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  justify-content: space-around;
  color: rgba(255, 255, 255, 0.7);
  margin: 60px 0 10px 0;
`;
export const IconWrapper = styled.button`
  background-color: #181b1e;
  color: rgba(255, 255, 255, 0.7);
  border: none;
  outline: none;
  :hover{
     color: white;
  }
`;
export const ListWrapper=styled.div`
 margin-bottom: 5px;
`
