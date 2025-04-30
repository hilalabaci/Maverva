import styled from "styled-components";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { IssueStatus } from "../../types";

type FormProps = { $selected: boolean };
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colour.background.surface};
  border-radius: 5px;
  padding: 8px 8px;
`;
export const HeaderDropBlog = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 7fr 1fr 2fr 1fr; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
type BacklogHeaderProps = { $selected: boolean };
export const HeaderTitleContent = styled.div<BacklogHeaderProps>`
  display: flex;
  align-items: center;
  outline: ${({ $selected, theme }) =>
    $selected ? `${theme.activeBorder}` : `none`};
  padding: 4px 0;
  cursor: pointer;
  flex: 1;
`;
export const HeaderTitle = styled.div`
  color: ${(props) => props.theme.memberMenuFontColor};
  font-weight: 600;
  font-size: 14px;
`;
export const Duration = styled.div`
  color: ${(props) => props.theme.memberMenuFontColor};
  font-size: 12px;
  text-align: center;
  margin-left: 8px;
`;
export const HeaderIssue = styled.div`
  color: ${(props) => props.theme.searchPlaceHolderFontColour};
  font-size: 12px;
  text-align: center;
  margin-left: 8px;
`;
export const HeaderStatusWrapper = styled.div`
  display: flex;
  gap: 4px;
  justify-self: center;
  align-self: center;
`;
type StatusProps = {
  status: number;
};
export const HeaderStatus = styled.span<StatusProps>`
  background-color: ${({ status, theme }) => {
    switch (status) {
      case IssueStatus.ToDo || IssueStatus.ToDo:
        return theme.colour.progressColours.toDo.default.background;
      case IssueStatus.InProgress:
        return theme.colour.progressColours.inProgress.default.background;
      case IssueStatus.Done:
        return theme.colour.progressColours.done.default.background;
      default:
    }
  }};
  color: ${({ status, theme }) => {
    switch (status) {
      case IssueStatus.ToDo || IssueStatus.ToDo:
        return theme.colour.progressColours.toDo.default.text;
      case IssueStatus.InProgress:
        return theme.colour.progressColours.inProgress.default.text;
      case IssueStatus.Done:
        return theme.colour.progressColours.done.default.text;
      default:
    }
  }};
  cursor: default;
  border-radius: 50px;
  font-size: 12px;
  padding: 2px 7px;
  height: min-content;
  font-weight: 600;
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
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 3px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  padding: 8px 10px;
  background-color: ${(props) =>
    props.$isActive
      ? props.theme.colour.primary.button.secondary.background.default
      : props.theme.colour.primary.button.secondary.background.active};
  color: ${(props) =>
    props.$isActive ? props.theme.colour.text.primary : "white"};
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.button.secondary.background.active};
    color: ${(props) =>
      props.theme.colour.primary.button.secondary.text.active};
  }
`;
export const Accordion = styled.div`
  margin-top: 8px;
`;
export const BacklogCardList = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BacklogCardListItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: ${(props) => props.theme.borderforModal};
  padding: 5px 0;
  background-color: ${(props) => props.theme.colour.primary};
  &:hover {
    background-color: ${(props) => props.theme.backlogBgHover};
  }
`;
export const CardKey = styled.div`
  justify-self: center;
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
`;
export const MemberWrapper = styled.div`
  justify-self: center;
  align-self: center;
`;
export const EditSprintButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  background-color: ${(props) =>
    props.theme.colour.primary.button.secondary.background.default};
  padding-block: 0;
  width: fit-content;
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.button.secondary.background.hover};
  }
  ${BacklogCardList}:hover & {
    opacity: 1;
    background-color: ${(props) => props.theme.IconEditBGHover};
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px !important;
    opacity: 1;
  }
`;
export const MoreIcon = styled(MoreHorizRoundedIcon)`
  justify-self: center;
  align-self: center;
  display: flex;
  opacity: 1;
  justify-content: flex-end;
  cursor: pointer;
  color: ${(props) => props.theme.colour.text.primary};
  &:hover {
    background-color: ${(props) => props.theme.IconEditBGHover};
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

//   @media only screen and (max-width: 768px) {
//     font-size: 12px !important;
//     opacity: 1;
//   }
// `;
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
export const CheckboxWrapper = styled.div`
  justify-self: center;
  align-self: center;
  opacity: 1;
  width: 50px;
  ${BacklogCardListItems}:hover & {
    opacity: 1;
  }
`;
export const DisplayCreateWrapper = styled.div`
  justify-content: stretch;
  justify-self: center;
  align-self: center;
  display: flex;
  border-radius: 3px;
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.backlogBgHover};
  }
`;
export const CreateButtonWrapper = styled.button`
  justify-content: stretch;
  display: flex;
  padding: 9px 0 9px 5px;
  border-radius: 3px;
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  font-size: 14px;
  gap: 5px;
  color: ${(props) => props.theme.colour.text.inverted};
  margin-top: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.card.background.default};
  }
`;
export const CreateIssueButton = styled.span`
  color: ${(props) => props.theme.memberMenuFontColor};
  font-weight: 500;
`;
export const IconAdd = styled(AddIcon)`
  font-size: 19px !important;
`;

export const Form = styled.form<FormProps>`
  flex: 1;
  padding: 9px 0 9px 5px;
  border: ${({ $selected, theme }) =>
    $selected ? `${theme.activeBorder}` : `none`};
`;

export const TextCreate = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 14px;
  width: 100%;
`;
type CommonPropsType = {
  $hidden?: boolean;
};
export const ArrowIcon = styled.button<CommonPropsType>`
  border-radius: 100%;
  font-size: 18px !important;
  font-weight: 600 !important;
  color: ${(props) => props.theme.memberMenuFontColor};
  cursor: pointer;
  outline: 0px;
  &:hover {
  }
`;
