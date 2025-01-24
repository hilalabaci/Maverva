import styled from "styled-components";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import AddIcon from "@mui/icons-material/Add";
import { CardStatus } from "../../types";

type FormProps = { $isSelected: boolean };
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 8px;
`;
export const HeaderDropBlog = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr 1fr 2fr 1fr;
`;
type BacklogHeaderProps = { $isSelected: boolean };
export const HeaderTitleContent = styled.div<BacklogHeaderProps>`
  display: flex;
  align-items: center;
  outline: ${({ $isSelected, theme }) =>
    $isSelected ? `${theme.activeBorder}` : `none`};
  padding: 4px 0;
  cursor: pointer;
`;
export const HeaderTitle = styled.div`
  color: ${(props) => props.theme.memberMenuFontColor};
  font-weight: 600;
  font-size: 14px;
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
      case CardStatus.Backlog || CardStatus.ToDo:
        return theme.statusColourGrey;
      case CardStatus.InProgress:
        return theme.statusColourBlue;
      case CardStatus.Done:
        return theme.statusColourGreen;
      default:
    }
  }};
  color: ${({ status, theme }) => {
    switch (status) {
      case 0:
        return !theme.primary; // red for status 1
      case 1:
        return theme.primary; // yellow for status 2
      default:
        return theme.primary; // default green color
    }
  }};
  cursor: default;
  border-radius: 50px;
  font-size: 12px;
  padding: 2px 7px;
  height: min-content;
`;
export const HeaderButtonWrapper = styled.div`
  justify-self: center;
  align-self: center;
`;
export const HeaderButton = styled.button`
  border: none;
  outline: none;
  font-size: 14px;
  color: ${(props) => props.theme.memberMenuFontColor};
  border-radius: 3px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  padding: 8px 10px;
  &:hover {
    background-color: ${(props) => props.theme.IconEditBGHover};
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
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.backlogBgHover};
  }
`;
export const CreateIssueButton = styled.span`
  color: ${(props) => props.theme.memberMenuFontColor};
  font-weight: 600;
`;
export const IconAdd = styled(AddIcon)`
  font-size: 19px !important;
`;

export const Form = styled.form<FormProps>`
  flex: 1;
  padding: 9px 0 9px 5px;
  border: ${({ $isSelected, theme }) =>
    $isSelected ? `${theme.activeBorder}` : `none`};
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

export const MoreIcon = styled(MoreHorizRoundedIcon)`
  justify-self: center;
  align-self: center;
  display: flex;
  opacity: 1;
  justify-content: flex-end;
  border-radius: 3px;
  background-color: #091e420f;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.IconEditBGHover};
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
