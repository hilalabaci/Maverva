import styled from "styled-components";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import AddIcon from "@mui/icons-material/Add";
import { device } from "../../styles/breakpoints";
import { IssueStatus } from "../../types/user.types";

type FormProps = { $selected: boolean };
export const Container = styled.div`
  background: var(--app-card);
  border: 1px solid var(--app-line);
  border-radius: 8px;
  margin-top: 18px;
  overflow: hidden;
`;
export const HeaderDropBlog = styled.div`
  padding: 14px 18px;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 16px;
  align-items: center;
  border-bottom: 1px solid var(--app-line);
`;
type BacklogHeaderProps = { $selected: boolean };
export const HeaderTitleContent = styled.div<BacklogHeaderProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  outline: ${({ $selected }) => ($selected ? `2px solid var(--app-accent)` : `none`)};
  cursor: pointer;
  border-radius: 3px;
  min-width: 0;
`;
export const HeaderTitle = styled.div`
  color: var(--app-ink);
  font-family: 'Geist', sans-serif;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.01em;
`;
export const HeaderIssue = styled.div`
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11px;
  font-weight: 500;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: var(--app-bg-2);
  color: var(--app-ink-3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;
export const HeaderStatusWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11px;
`;
type StatusProps = {
  status: number;
};
export const HeaderStatus = styled.span<StatusProps>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11px;
  font-weight: 500;
  cursor: default;
  color: var(--app-ink-3);
  b {
    font-weight: 500;
    color: ${({ status }) => {
      switch (status) {
        case IssueStatus.ToDo: return 'var(--app-ink-3)';
        case IssueStatus.InProgress: return 'var(--app-info)';
        case IssueStatus.Done: return 'var(--app-ok)';
        default: return 'var(--app-ink-3)';
      }
    }};
  }
`;
export const HeaderButtonWrapper = styled.div`
  justify-self: center;
  align-self: center;
`;
export const HeaderButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 10px;
  border: 1px solid var(--app-line);
  background: var(--app-card);
  color: var(--app-ink-2);
  border-radius: 5px;
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: var(--app-bg-2);
    border-color: var(--app-line-2);
    color: var(--app-ink);
  }
`;
export const Accordion = styled.div``;
export const BacklogCardList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const DisplayCreateWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const CreateButtonWrapper = styled.button`
  display: flex;
  padding: 8px 18px;
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  font-size: 13px;
  gap: 6px;
  color: var(--app-ink-3);
  cursor: pointer;
  align-items: center;
  border-top: 1px solid var(--app-line);
  &:hover {
    background: var(--app-bg-2);
    color: var(--app-ink);
  }
`;
export const CreateIssueButton = styled.span`
  color: var(--app-ink-3);
  font-weight: 400;
  font-size: 13px;
  display: flex;
  align-items: center;
`;
export const IconAdd = styled(AddIcon)`
  font-size: 16px !important;
  color: var(--app-ink-3);
`;

export const Form = styled.form<FormProps>`
  flex: 1;
  padding: 9px 18px;
  border: ${({ $selected }) =>
    $selected ? `2px solid var(--app-accent)` : `1px solid var(--app-line)`};
`;

export const TextCreate = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 13.5px;
  width: 100%;
  color: var(--app-ink);
`;
type CommonPropsType = {
  $hidden?: boolean;
};
export const ArrowIcon = styled.button<CommonPropsType>`
  border-radius: 5px;
  font-size: 16px !important;
  font-weight: 500 !important;
  color: var(--app-ink-3);
  cursor: pointer;
  outline: 0px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: var(--app-ink);
    background: var(--app-bg-2);
  }
`;
export const EditSprintButton = styled.button`
  border: 1px solid var(--app-line);
  outline: none;
  cursor: pointer;
  margin: 0;
  border-radius: 5px;
  width: fit-content;
  background: var(--app-card);
  padding: 3px 6px;
  &:hover {
    background: var(--app-bg-2);
  }
  @media ${device.mobile} {
    opacity: 1;
  }
`;
export const MoreIcon = styled(MoreHorizRoundedIcon)`
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: flex-end;
  color: var(--app-ink-3);
  @media ${device.mobile} {
    font-size: 16px !important;
  }
`;
export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--app-ink-3);
  font-size: 10px;
  cursor: pointer;
`;
export const RowHead = styled.div`
  display: grid;
  grid-template-columns: 32px 80px 1fr 120px 140px 100px 100px 40px;
  gap: 14px;
  align-items: center;
  padding: 8px 18px;
  border-bottom: 1px solid var(--app-line);
  background: var(--app-bg);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--app-ink-3);
  font-weight: 500;
`;
