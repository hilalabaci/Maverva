import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
.iconClose{
  color:rgba(255, 255, 255, 0.7);

}
`;

export const Container = styled.div`
  background-color: #181b1e;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  padding: 10px;
`;
export const Textarea = styled.textarea`
  background-color: #181b1e;
  outline: none;
  border: none;
  color: white;
  opacity: 0.7;
  text-align: left;
  resize: none;
  font-size: 16px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button`
  font-size: 16px;
  background-color: #579dff;
  border: none;
  color: #111315;
  border-radius: 5px;
  opacity: 0.6;
  padding: 8px;
  :hover {
    background-color: #a8ccff;
  }
`;
