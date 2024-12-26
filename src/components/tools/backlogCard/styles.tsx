import styled, { DefaultTheme } from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import { CardStatus } from "../../../types";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import DoneIcon from "@mui/icons-material/Done";

export const BacklogCardListItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 10fr 2fr 1fr 1fr;
  justify-content: stretch;
  border: ${(props) => props.theme.borderforModal};
  padding: 5px 0;
  &:hover {
    background-color: ${(props) => props.theme.backlogBgHover};
  }
`;
export const CheckboxWrapper = styled.div`
  justify-self: center;
  align-self: center;
  opacity: 1;
  ${BacklogCardListItems}:hover & {
    opacity: 1;
  }
`;
export const CardKey = styled.div`
  justify-self: start;
  align-self: center;
  font-size: 12px;
  color: ${(props) => props.theme.sideBarFontColour};
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: ${(props) => props.theme.navbarActiveFontColour};
  }
`;
export const ContentWrapper = styled.div`
  justify-self: start;
  align-self: center;
  justify-items: stretch;
  width: 100%;
`;
export const Content = styled.div`
  max-width: 570px;
  justify-items: stretch;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.memberMenuFontColor};
  &:hover {
    text-decoration: underline;
  }
`;
export const ContentText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
`;

export const NoteEdit = styled.button`
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
`;
export const IconEdit = styled(EditIcon)`
  text-align: center;
  justify-self: center;
  align-self: center;
  align-content: center;
  padding: 5px 10px;
  font-size: 14px !important;
  margin: 0 5px;
  opacity: 0;
  border-radius: 3px;
  background-color: ${(props) => props.theme.IconEditBg};
  &:hover {
    background-color: ${(props) => props.theme.IconEditBGHover};
  }
  ${BacklogCardListItems}:hover & {
    opacity: 1;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px !important;
    opacity: 1;
  }
`;
type StatusPropsType = {
  status: number;
};

const handleColorType = (status: number, theme: DefaultTheme) => {
  switch (status) {
    case CardStatus.Backlog:
      return {
        backgroundColor: theme.IconEditBg,
        color: theme.fontColourDark,
      };
    case CardStatus.ToDo:
      return { backgroundColor: "#f5a142", color: "#000" };
    case CardStatus.InProgress:
      return { backgroundColor: "#e9f2ff", color: "#275fa0" };
    case CardStatus.Done:
      return { backgroundColor: "#dcfff1", color: "#206e4e" };
    default:
      return { backgroundColor: "#fff", color: "#000" };
  }
};
export const Status = styled.div<StatusPropsType>`
  justify-self: start;
  align-self: center;
  background-color: ${({ status, theme }) =>
    handleColorType(status, theme).backgroundColor};
  color: ${({ status, theme }) => handleColorType(status, theme).color};
  text-transform: uppercase;
  border-radius: 3px;
  font-size: 12px;
  padding: 3px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #d0d4dc;
  }
`;

export const MemberWrapper = styled.div`
  justify-self: center;
  align-self: center;
`;

export const MoreIcon = styled(MoreHorizRoundedIcon)`
  justify-self: center;
  align-self: center;
  display: flex;
  opacity: 0;
  justify-content: flex-end;
  border-radius: 3px;
  background-color: ${(props) => props.theme.IconEditBg};
  &:hover {
  }
  ${BacklogCardListItems}:hover & {
    opacity: 1;
    background-color: ${(props) => props.theme.IconEditBGHover};
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px !important;
    opacity: 1;
  }
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
