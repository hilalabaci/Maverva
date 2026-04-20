import styled from "styled-components";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import EditIcon from "@mui/icons-material/Edit";
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
  gap: 12px;
  min-width: 0;
  outline: ${({ $selected }) =>
    $selected ? `2px solid var(--app-accent)` : `none`};
  cursor: pointer;
`;
export const HeaderTitle = styled.h3`
  margin: 0;
  font-family: 'Geist', sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--app-ink);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Duration = styled.div`
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--app-ink-3);
  white-space: nowrap;
`;
export const HeaderIssue = styled.div`
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--app-ink-3);
  white-space: nowrap;
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
  cursor: pointer;
`;

type HeaderButtonPropsType = {
  $isActive: boolean;
};
export const HeaderButton = styled.button<HeaderButtonPropsType>`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 10px;
  border: 1px solid var(--app-line);
  background: ${({ $isActive }) => $isActive ? 'var(--app-ink)' : 'var(--app-card)'};
  color: ${({ $isActive }) => $isActive ? 'var(--app-bg)' : 'var(--app-ink-2)'};
  border-color: ${({ $isActive }) => $isActive ? 'var(--app-ink)' : 'var(--app-line)'};
  border-radius: 5px;
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: ${({ $isActive }) => $isActive ? 'var(--app-accent)' : 'var(--app-bg-2)'};
    border-color: ${({ $isActive }) => $isActive ? 'var(--app-accent)' : 'var(--app-line-2)'};
    color: ${({ $isActive }) => $isActive ? '#fff' : 'var(--app-ink)'};
  }
`;
export const Accordion = styled.div``;
export const BacklogCardList = styled.div`
  display: flex;
  flex-direction: column;
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
export const BacklogCardListItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 5px 0;
  background: var(--app-card);
  &:hover {
    background: var(--app-bg-2);
  }
`;
export const CardKey = styled.div`
  justify-self: center;
  align-self: center;
  font-size: ${(props) => props.theme.fontSize.subtitle};
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
  font-size: ${(props) => props.theme.fontSize.default};
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
`;
export const MemberWrapper = styled.div`
  justify-self: center;
  align-self: center;
`;
export const EditSprintButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 5px;
  color: var(--app-ink-3);
  cursor: pointer;
  background: none;
  border: none;
  &:hover {
    background: var(--app-bg-2);
    color: var(--app-ink);
  }
`;
export const MoreIcon = styled(MoreHorizRoundedIcon)`
  font-size: 18px !important;
  color: inherit;
`;
// export const IconEditSprit = styled(EditIcon)`
//   text-align: center;
//   justify-self: center;
//   align-self: center;
//   align-content: center;
//   padding-left: 10px;
//   font-size: 14px !important;
//   opacity: 1;
//   border-radius: 3px;
//   background-color: ${(props) => props.theme.IconEditBg};
//   &:hover {
//     background-color: ${(props) => props.theme.IconEditBGHover};
//   }
//   ${BacklogCardListItems}:hover & {
//     opacity: 1;
//   }

//  @media ${device.mobile} {
//     font-size: ${(props) => props.theme.fontSize.subtitle}; !important;
//     opacity: 1;
//   }
// `;
export const IconEdit = styled(EditIcon)`
  text-align: center;
  justify-self: center;
  align-self: center;
  align-content: center;
  padding-left: 10px;
  font-size: ${(props) => props.theme.fontSize.default}!important;
  opacity: 0;
  border-radius: 3px;
  background-color: ${(props) => props.theme.IconEditBg};
  &:hover {
    background-color: ${(props) => props.theme.IconEditBGHover};
  }
  ${BacklogCardListItems}:hover & {
    opacity: 1;
  }

  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSize.subtitle} !important;
    opacity: 1;
  }
`;
export const CheckboxWrapper = styled.div`
  color: var(--app-ink-3);
  font-size: 10px;
  transition: transform 0.15s;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const DisplayCreateWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const CreateButtonWrapper = styled.button`
  display: flex;
  padding: 10px 18px;
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  font-size: 12.5px;
  gap: 6px;
  color: var(--app-ink-3);
  cursor: pointer;
  align-items: center;
  &:hover {
    background: var(--app-bg-2);
    color: var(--app-ink);
  }
`;
export const CreateIssueButton = styled.span`
  color: inherit;
  font-weight: 400;
`;
export const IconAdd = styled(AddIcon)`
  font-size: 16px !important;
  opacity: 0.7;
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
  font-family: inherit;
  font-size: 13.5px;
  width: 100%;
  color: var(--app-ink);
  &::placeholder { color: var(--app-ink-3); }
`;
type CommonPropsType = {
  $hidden?: boolean;
};
export const ArrowIcon = styled.button<CommonPropsType>`
  border-radius: 100%;
  font-size: 18px !important;
  font-weight: 600 !important;
  color: var(--app-ink-3);
  cursor: pointer;
  outline: 0px;
`;
