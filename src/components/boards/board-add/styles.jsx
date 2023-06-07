import styled, { createGlobalStyle } from "styled-components";

export const InputStyle = styled.input`
  background-color: #181b1e;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-family: "Inter";
  outline: none;
  letter-spacing: 0.05em;
  padding: 0;
`;
export const Container = styled.form`
  border: 1px solid rgba(255, 255, 255, 0.7);
  height: 45px;
  border-radius:10px;
  display: flex;
  flex-direction: row;
  padding: 0px 20px;
  justify-content: space-between;
  opacity: 0.7;
  font-size: 20px;
`;
export const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
`;
export const GlobalStyle = createGlobalStyle`
   .okicon{
    color: white;
    opacity: 0.2;
   }
   .okicon:hover{
    background-color: #14641C;
    border-radius: 50%;
    opacity: 1;
    border: none;
    outline: none;
   }
`;
