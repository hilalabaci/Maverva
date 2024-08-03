import styled, { createGlobalStyle } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export const GlobalStyle = createGlobalStyle`

`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 304px;
  background: rgba(255, 255, 255, 0.17);
  border-radius: 2px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  font-family: "Inter";
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom: 0.5px solid;
  margin: 10px;
`;
export const Title = styled.span`
  flex: 1;
  text-align: center;
`;
export const Content = styled.div`
  padding: 6px 12px;
  text-align: start;
  line-height: 25px;
`;
export const BoardTitle = styled.span`
  font-weight: 800;
  text-transform: uppercase;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 8px 10px 12px;
`;
export const DeleteButton = styled.button`
  background: #f87462;
  border-radius: 2px;
  height: 38px;
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  :hover {
    background-color: #ff9c8f;
  }
`;
export const Close = styled(CloseIcon)`
  :hover {
    color: white;
  }
`;
