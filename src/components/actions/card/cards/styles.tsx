import styled, { createGlobalStyle } from "styled-components";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

export const GlobalStyle = createGlobalStyle`

`;
export const EditIcon = styled(MoreHorizRoundedIcon)`
  opacity: 0;
  display: flex;
  justify-content: flex-end;
  padding: 4px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.IconEditBg};
  &:hover {
    background-color: ${(props) => props.theme.IconEditBGHover};
  }
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
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: var(--ds-shadow-raised, 0 1px 1px #172b4d33, 0 0 1px #172b4d33);
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.cardBGHover};
    color: var(--ds-text, #172b4d);
  }
  &:hover ${EditIcon} {
    opacity: 1;
  }
  @media only screen and (max-width: 768px) {
    padding: 15px;
    border-radius: 15px;
    height: 60px;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const NoteWrapper = styled.div`
  flex: 1;
  display: flex;
  font-style: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 14px;
  max-height: 40px;
  line-height: 21px;
  letter-spacing: 0.065em;
  color: ${(props) => props.theme.memberMenuFontColor};
  resize: none;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
    overflow: scroll;
  }
`;
export const ButtomWrapper = styled.div``;
export const CardButtomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardKeyWrapper = styled.div`
  font-size: 11px;
  font-weight: 600;
`;

export const ContainerUser = styled.div`
  font-size: 1px !important;
  width: 20px !important;
  height: 20px !important;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
`;
