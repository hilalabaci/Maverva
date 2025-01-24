import styled, { createGlobalStyle } from "styled-components";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DoneIcon from "@mui/icons-material/Done";
//--ds-shadow-raised:  0px 1px 1px #091E4240, 0px 0px 1px #091E424F;

export const GlobalStyle = createGlobalStyle`

`;

type DisplayTextProps = {
  displayEditText: boolean;
};
export const EditContentIcon = styled(ModeEditIcon)`
  opacity: 0;
  padding: 2px;
  &:hover {
    background-color: ${(props) => props.theme.IconEditBGHover};
  }
`;
export const EditIcon = styled(MoreHorizRoundedIcon)`
  opacity: 0;
  padding: 1px !important;
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
  padding: 0.75rem;
  border-radius: 3px;
  //max-width: 270px;
  /* box-shadow: 0px 1px 1px #091e4240, 0px 0px 1px #091e424f, 0 1px 1px #172b4d00,
    0 0 1px #172b4d33;
  box-shadow: inset 0px 0px 1px #091e4240, 0px 0px 1px #091e424f,
    0 1px 1px #172b4d00, 0 0 1px #172b4d33; */
  box-shadow: inset 0px 0px 1px #091e4240, 0px 0px 1px #091e424f,
    0px 0px 1px #172b4d00, 0 0 1px #172b4d33;

  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.cardBGHover};
    color: var(--ds-text, #172b4d);
  }
  &:hover ${EditIcon} {
    justify-content: flex-end;
    padding: 1px !important;
    border-radius: 3px !important;
    background-color: ${(props) => props.theme.IconEditBg};
    opacity: 1;
  }
  &:hover ${EditContentIcon} {
    width: 17px !important;
    height: 14px !important;
    justify-content: flex-end;
    border-radius: 3px;
    opacity: 1;
    padding: 2px;
  }
  @media only screen and (max-width: 768px) {
    padding: 15px;
    border-radius: 3px;
    height: 60px;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  gap: 5px;
`;
export const NoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
    overflow: scroll;
  }
`;
export const Note = styled.div`
  font-style: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.memberMenuFontColor};
  resize: none;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const NoteEdit = styled.button`
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
`;
export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
  width: 100%;
`;
export const EditTextArea = styled.textarea`
  resize: none;
  outline: none;
  border-radius: 3px;
  border: ${(props) => props.theme.activeBorder};
  width: 100%;
  font-size: 14px;
`;
export const DoneButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 4px 5px;
  background: white;
  box-shadow: inset 0px 0px 1px #091e4240, 0px 0px 1px #091e424f,
    0px 0px 1px #172b4d00, 0 0 1px #172b4d33;
`;
export const IconDone = styled(DoneIcon)`
  font-size: 14px !important;
`;
export const ButtomWrapper = styled.div`
  display: flex;
`;
export const CardButtomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardKeyWrapper = styled.div`
  font-size: 11px;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
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
