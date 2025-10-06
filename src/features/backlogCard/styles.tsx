import styled, { DefaultTheme } from "styled-components";
import EditIcon from "@mui/icons-material/Edit";

import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import DoneIcon from "@mui/icons-material/Done";
import { IssueStatus } from "../../types/user.types";
import { device } from "../../styles/breakpoints";

export const BacklogCardListItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 10fr 2fr 1fr 1fr;
  justify-content: stretch;
  background-color: ${(props) =>
    props.theme.colour.primary.card.background.default};
  padding: 5px 0;
  outline: ${(props) => props.theme.colour.primary.card.border.default};
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.card.background.hover};
  }
`;
export const CheckboxWrapper = styled.div`
  justify-self: center;
  align-self: center;
  opacity: 0;
  ${BacklogCardListItems}:hover & {
    opacity: 1;
  }
`;
export const CardKey = styled.div`
  justify-self: start;
  align-self: center;
  font-size: ${(props) => props.theme.fontSize.subtitle};
  color: ${(props) => props.theme.colour.text.inverted};
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
  font-size: ${(props) => props.theme.fontSize.default};
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colour.text.inverted};
  &:hover {
    text-decoration: underline;
  }
`;
export const ContentText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${(props) => props.theme.fontSize.default};
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
  font-size: ${(props) => props.theme.fontSize.default}!important;
  margin: 0 5px;
  opacity: 0;
  border-radius: 3px;
  color: ${(props) => props.theme.colour.text.inverted};
  background-color: ${(props) => props.theme.IconEditBg};
  &:hover {
    background-color: ${(props) => props.theme.IconEditBGHover};
  }
  ${BacklogCardListItems}:hover & {
    opacity: 1;
  }

  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSize.subtitle}!important;
    opacity: 1;
  }
`;
type StatusPropsType = {
  $status: number;
};

const handleColorType = (status: number, theme: DefaultTheme) => {
  switch (status) {
    case IssueStatus.ToDo:
      return {
        default: {
          backgroundColor: theme.colour.progressColours.toDo.default.background,
          color: theme.colour.progressColours.toDo.default.text,
        },
        hover: {
          backgroundColor: theme.colour.progressColours.toDo.hover.background,
          color: theme.colour.progressColours.toDo.hover.text,
        },
      };
    case IssueStatus.InProgress:
      return {
        default: {
          backgroundColor:
            theme.colour.progressColours.inProgress.default.background,
          color: theme.colour.progressColours.inProgress.default.text,
        },
        hover: {
          backgroundColor:
            theme.colour.progressColours.inProgress.hover.background,
          color: theme.colour.progressColours.inProgress.hover.text,
        },
      };
    case IssueStatus.Done:
      return {
        default: {
          backgroundColor: theme.colour.progressColours.done.default.background,
          color: theme.colour.progressColours.done.default.text,
        },
        hover: {
          backgroundColor: theme.colour.progressColours.done.hover.background,
          color: theme.colour.progressColours.done.hover.text,
        },
      };
    default:
      return {
        default: { backgroundColor: "#fff", color: "#000" },
        hover: { backgroundColor: "#ddd", color: "#000" },
      };
  }
};

export const Status = styled.div<StatusPropsType>`
  justify-self: start;
  align-self: center;
  background-color: ${({ $status, theme }) =>
    handleColorType($status, theme).default.backgroundColor};
  color: ${({ $status, theme }) =>
    handleColorType($status, theme).default.color};
  text-transform: uppercase;
  border-radius: 3px;
  font-size: ${(props) => props.theme.fontSize.subtitle};
  padding: 3px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: ${({ $status, theme }) =>
      handleColorType($status, theme).hover.backgroundColor};
    color: ${({ $status, theme }) =>
      handleColorType($status, theme).hover.color};
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
  cursor: pointer;
  background-color: ${(props) =>
    props.theme.colour.primary.button.secondary.background.default};
  &:hover {
  }
  ${BacklogCardListItems}:hover & {
    opacity: 1;
    background-color: ${(props) =>
      props.theme.colour.primary.button.secondary.background.hover};
  }
  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSize.subtitle}!important;
    opacity: 1;
  }
`;
export const EditWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
`;
export const EditTextArea = styled.textarea`
  resize: none;
  outline: none;
  border-radius: 3px;
  border: none;
  outline: ${(props) => props.theme.colour.primary.card.border.active};
  background-color: ${(props) => props.theme.colour.background.surface};
  color: ${(props) => props.theme.colour.text.inverted};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 90%;
  height: auto;
  padding-inline-start: 5px;
`;
export const DoneButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 4px 5px;
  background: ${(props) =>
    props.theme.colour.primary.button.secondary.background.default};
  color: ${(props) => props.theme.colour.primary.button.secondary.text.default};
  outline: ${(props) => props.theme.colour.primary.card.border.default};
  &:hover {
    background: ${(props) =>
      props.theme.colour.primary.button.secondary.background.active};
    color: ${(props) =>
      props.theme.colour.primary.button.secondary.text.active};
  }
`;
export const IconDone = styled(DoneIcon)`
  font-size: ${(props) => props.theme.fontSize.default}!important;
`;
