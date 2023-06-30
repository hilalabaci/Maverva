import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 100px 25px;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    padding: 0;
    width: fit-content;
  }
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
  margin: 10px 0;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const IconWrapper = styled.button`
  background-color: #181b1e;
  color: rgba(255, 255, 255, 0.7);
  border: none;
  outline: none;
  :hover {
    color: white;
  }
`;
export const ListWrapper = styled.div`
  padding: 20px 5px;
`;
