import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
.iconClose{
  color:rgba(255, 255, 255, 0.7);

}
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.cardBG};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  padding: 10px;
  @media only screen and (max-width: 768px) {
    border-radius: 15px;
    padding: 10px;
    height: 70px;
  }
`;
export const Textarea = styled.textarea`
  background-color: ${(props) => props.theme.cardBG};
  outline: none;
  border: none;
  color: white;
  opacity: 0.7;
  text-align: left;
  resize: none;
  font-size: 14px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;
export const Button = styled.button`
  font-size: 13px;
  background-color: #579dff;
  border: none;
  color: ${(props) => props.theme.primary};
  border-radius: 5px;
  opacity: 0.6;
  padding: 7px;
  :hover {
    background-color: #a8ccff;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 4px;
  }
`;
