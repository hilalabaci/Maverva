import styled, { DefaultTheme } from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import { CardStatus } from "../../../types";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

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
`;
export const Content = styled.div`
  justify-self: start;
  align-self: center;
  justify-items: stretch;
  font-size: 14px;
  display: flex;
  color: ${(props) => props.theme.memberMenuFontColor};
  &:hover {
    text-decoration: underline;
  }
`;
export const ContentText = styled.div`
  max-width: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
`;
export const IconEdit = styled(EditIcon)`
  text-align: center;
  justify-self: center;
  align-self: center;
  align-content: center;
  padding-left: 10px;
  font-size: 14px !important;
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
