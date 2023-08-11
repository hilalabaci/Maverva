import styled, { createGlobalStyle } from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const GlobalStyle = createGlobalStyle`

`;

export const MoreIcon = styled(MoreHorizIcon)`
  opacity: 0;
  display: flex;
  @media only screen and (max-width: 768px) {
    font-size: 12px !important;
    opacity: 1;
  }
`;
export const Container = styled.div`
  background-color: ${(props) => props.theme.cardBG};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 10px 5px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.cardBG};
  :hover {
    background-color: ${(props) => props.theme.cardBGHover};
  }
  :hover ${MoreIcon} {
    opacity: 1;
  }
  @media only screen and (max-width: 768px) {
    padding: 15px;
    border-radius: 15px;
    height: 60px;
  }
`;
export const NoteWrapper = styled.div`
  flex: 1;
  display: flex;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 0.065em;
  color: ${(props) => props.theme.fontColour};
  resize: none;
  outline: none;
  border: none;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
    overflow: scroll;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  padding-top: 10px;
`;
export const iconButton = styled;
