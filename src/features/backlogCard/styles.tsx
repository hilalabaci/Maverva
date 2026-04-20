import styled, { DefaultTheme } from "styled-components";
import EditIcon from "@mui/icons-material/Edit";

import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import DoneIcon from "@mui/icons-material/Done";
import { IssueStatus } from "../../types/user.types";
import { device } from "../../styles/breakpoints";

export const BacklogCardListItems = styled.div`
  display: grid;
  grid-template-columns: 32px 80px 1fr 120px 140px 100px 100px 40px;
  gap: 14px;
  align-items: center;
  padding: 0 18px;
  height: var(--app-row-h, 44px);
  border-bottom: 1px solid var(--app-line);
  font-size: 13.5px;
  cursor: pointer;
  background: var(--app-card);
  &:last-child {
    border-bottom: 0;
  }
  &:hover {
    background: var(--app-bg-2);
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

type TypeBadgeProps = { $kind: 'story' | 'task' | 'bug' | 'chore' | 'epic' };
export const TypeBadge = styled.span<TypeBadgeProps>`
  justify-self: center;
  align-self: center;
  width: 16px;
  height: 16px;
  border-radius: 3.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 9.5px;
  color: #fff;
  font-weight: 600;
  font-family: 'Geist Mono', ui-monospace, monospace;
  flex-shrink: 0;
  background: ${({ $kind }) => {
    switch ($kind) {
      case 'story': return '#15803D';
      case 'task': return '#1E40AF';
      case 'bug': return '#B91C1C';
      case 'epic': return '#7C3AED';
      default: return '#6B7280';
    }
  }};
`;

type PriorityCellProps = { $tone: 'danger' | 'warn' | 'med' | 'lo' };
export const PriorityCell = styled.div<PriorityCellProps>`
  justify-self: start;
  align-self: center;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ $tone }) => {
    switch ($tone) {
      case 'danger': return 'var(--app-danger)';
      case 'warn': return 'var(--app-warn)';
      case 'med': return '#B45309';
      default: return 'var(--app-ink-3)';
    }
  }};
  b {
    font-weight: 500;
    font-size: 10.5px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

export const EstimateCell = styled.div`
  justify-self: start;
  align-self: center;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--app-ink-3);
  b {
    color: var(--app-ink-2);
    font-weight: 500;
  }
`;
export const CardKey = styled.div`
  justify-self: start;
  align-self: center;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11.5px;
  color: var(--app-ink-2);
  cursor: pointer;
  font-weight: 500;
  &:hover {
    color: var(--app-accent);
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
  font-size: 13.5px;
  color: var(--app-ink);
  letter-spacing: -0.005em;
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
  font-size: 16px !important;
  margin: 0 5px;
  opacity: 0;
  border-radius: 3px;
  color: var(--app-ink-3);
  background-color: transparent;
  &:hover {
    background-color: var(--app-bg-2);
    color: var(--app-ink);
  }
  ${BacklogCardListItems}:hover & {
    opacity: 1;
  }

  @media ${device.mobile} {
    font-size: 14px !important;
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
        default: {
          backgroundColor: theme.colour.progressColours.toDo.default.background,
          color: theme.colour.progressColours.toDo.default.text,
        },
        hover: {
          backgroundColor: theme.colour.progressColours.toDo.hover.background,
          color: theme.colour.progressColours.toDo.hover.text,
        },
      };
  }
};

export const Status = styled.div<StatusPropsType>`
  justify-self: start;
  align-self: center;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 10.5px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  color: ${({ $status }) => {
    switch ($status) {
      case IssueStatus.ToDo: return 'var(--app-ink-3)';
      case IssueStatus.InProgress: return 'var(--app-info)';
      case IssueStatus.Done: return 'var(--app-ok)';
      default: return 'var(--app-ink-3)';
    }
  }};
  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    flex-shrink: 0;
  }
`;

export const MemberWrapper = styled.div`
  justify-self: start;
  align-self: center;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  color: var(--app-ink-2);
  min-width: 0;
  overflow: hidden;
`;

export const AssigneeName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12.5px;
  color: var(--app-ink-2);
`;

export const MoreIcon = styled(MoreHorizRoundedIcon)`
  justify-self: center;
  align-self: center;
  display: flex;
  opacity: 0;
  justify-content: flex-end;
  border-radius: 3px;
  cursor: pointer;
  color: var(--app-ink-3);
  &:hover {
    color: var(--app-ink);
    background: var(--app-bg-2);
  }
  ${BacklogCardListItems}:hover & {
    opacity: 1;
  }
  @media ${device.mobile} {
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
