import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
.editicon {
  color: rgba(255, 255, 255, 0.7);
  opacity: 0.5;
}
.editicon:hover {
  opacity: 1;
}
`;

export const Wrapper = styled.div`
  height: 45px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.16);
  :hover {
    background-color:rgba(255, 255, 255, 0.427) ;
  }
`;
export const Label = styled.label`
  text-transform: uppercase;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 17px;
  font-family: "Inter";
  outline: none;
  letter-spacing: 0.05em;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
`;
