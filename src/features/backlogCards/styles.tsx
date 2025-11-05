import styled from "styled-components";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import AddIcon from "@mui/icons-material/Add";
import { device } from "../../styles/breakpoints";
import { IssueStatus } from "../../types/user.types";

type FormProps = { $selected: boolean };
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 8px;
  background-color: ${(props) => props.theme.colour.background.columnBG};
`;
export const HeaderDropBlog = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr 1fr 2fr 1fr;
`;
type BacklogHeaderProps = { $selected: boolean };
export const HeaderTitleContent = styled.div<BacklogHeaderProps>`
  display: flex;
  align-items: center;
  outline: ${({ $selected, theme }) =>
    $selected ? `${theme.activeBorder}` : `none`};
  padding: 4px 0;
  cursor: pointer;
`;
export const HeaderTitle = styled.div`
  color: ${(props) => props.theme.memberMenuFontColor};
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSize.default};
`;
export const HeaderIssue = styled.div`
  color: ${(props) => props.theme.searchPlaceHolderFontColour};
  font-size: ${(props) => props.theme.fontSize.subtitle};
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
  font-size: 13px;
  padding: 2px 7px;
  height: min-content;
  font-weight: 600;
`;
export const HeaderButtonWrapper = styled.div`
  justify-self: center;
  align-self: center;
`;
export const HeaderButton = styled.button`
  color: ${(props) => props.theme.colour.primary.button.secondary.text.default};
  background-color: ${(props) =>
    props.theme.colour.primary.button.secondary.background.default};
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.fontSize.default};
  border-radius: 3px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  padding: 8px 10px;
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
  font-size: ${(props) => props.theme.fontSize.default};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.card.background.hover};
  }
`;
export const CreateButtonWrapper = styled.button`
  display: flex;
  padding: 9px 0 9px 5px;
  border-radius: 3px;
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  font-size: ${(props) => props.theme.fontSize.default};
  gap: 5px;
  margin-top: 5px;
  color: ${(props) => props.theme.colour.text.inverted};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.card.background.default};
  }
`;
export const CreateIssueButton = styled.span`
  color: ${(props) => props.theme.colour.text.inverted};
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize.default};
  display: flex;
  align-items: center;
`;
export const IconAdd = styled(AddIcon)`
  font-size: 19px !important;
  color: ${(props) => props.theme.colour.text.inverted};
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
  font-size: ${(props) => props.theme.fontSize.default};
  width: 100%;
  color: ${(props)=>props.theme.colour.text.primary};
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
export const EditSprintButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  border-radius: 3px;
  width: fit-content;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme.colour.primary.button.secondary.background.default};
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.button.secondary.background.hover};
  }
  ${BacklogCardList}:hover& {
    background-color: ${(props) =>
      props.theme.colour.primary.button.secondary.background.default};
    background-color: yellow;
  }
  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSize.subtitle}!important;
    opacity: 1;
  }
`;
export const MoreIcon = styled(MoreHorizRoundedIcon)`
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: flex-end;
  color: ${(props) => props.theme.colour.primary.button.secondary.text.default};
  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSize.subtitle}!important;
  }
`;
export const CheckboxWrapper = styled.div`
  justify-self: center;
  align-self: center;
`;
