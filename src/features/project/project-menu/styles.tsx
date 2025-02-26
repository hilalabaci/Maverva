import { Link } from "react-router-dom";
import { LayoutIcon, ListBulletIcon } from "@radix-ui/react-icons";
import FormatAlignRightOutlinedIcon from "@mui/icons-material/FormatAlignRightOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
type CommonPropsType = {
  $hidden?: boolean;
};
export const Container = styled.div<CommonPropsType>`
  //display: ${(props) => (props.$hidden ? "none" : "flex")};
  min-width: ${(props) => (props.$hidden ? "20px" : "300px")};
  height: 100vh;
  background-color: ${(props) => props.theme.BorderMenuBG};
  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.$hidden ? "20px" : "fit-content")};
  }
  &:hover {
  }
  /* ::after pseudo-element */
  &::after {
    display: inline-block;
    width: var(240px, 0px);
    content: "";
  }
`;

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
`;
export const AddProjectWrapper = styled.div<CommonPropsType>`
  font-style: normal;
  width: 100%;
  font-weight: 600;
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  justify-content: center;
  flex-direction: column;
  letter-spacing: 0.05em;
  justify-content: space-around;
  gap: 20px;
  color: ${(props) => props.theme.fontColour};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const SideBarItem = styled.div`
  display: flex;
  gap: 7px;
  flex-direction: column;
`;
export const SideBarWrapper = styled.div`
  background: linear-gradient(
    135deg,
    rgba(113, 183, 230, 0.3),
    rgba(155, 89, 182, 0.3)
  );
  border-radius: 5px;
`;
export const SideBarListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 0;
`;
export const UserInfo = styled.div<CommonPropsType>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  flex-direction: row;
  border-bottom: ${(props) =>
    props.$hidden ? "none" : "1px solid rgba(255, 255, 255, 0.13);"};
  //padding: ${(props) => (props.$hidden ? "0" : "0")};
  @media only screen and (max-width: 768px) {
  }
`;
export const Title = styled.div`
  text-transform: uppercase;
  font-size: 12px;
`;

export const ProjectTitle = styled.span<CommonPropsType>`
  text-transform: uppercase;
  color: ${(props) => props.theme.fontColour};
  font-size: 14px;
  font-weight: bold;
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ProjectIcon = styled.div<CommonPropsType>`
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 10px;
  font-weight: 500;
  border-radius: 5px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
  //background-color: #de835d;
  position: relative;
  color: white;
  text-transform: uppercase;
`;

export const SelectedBoard = styled.span`
  font-size: 12px;
  color: #0c66e4;
  font-weight: 400;
`;
export const BoardWrapper = styled.div`
  padding: 4px;
  border-radius: 5px;
`;
export const ProjectBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 16px;
  &:hover {
    cursor: pointer;
  }
`;
export const ProjectBoardTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ProjectBoardTitle = styled.span`
  color: #0c66e4;
  font-size: 13px;
  font-weight: 450;
`;

export const ArrowIcon = styled.button<CommonPropsType>`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  font-size: 20px !important;
  color: #0c66e4;
  //box-shadow: rgba(9, 30, 66, 0.08) 0px 0px 0px 1px,
  // rgba(9, 30, 66, 0.08) 0px 2px 4px 1px;
  cursor: pointer;
  outline: 0px;
  transition: background-color 100ms linear, color 100ms linear,
    opacity 350ms cubic-bezier(0.2, 0, 0, 1);

  //color: ${(props) => props.theme.fontColour};
  // margin: ${(props) => (props.$hidden ? "25px 0 0 0" : "0")};
  //background-color: ${(props) => props.theme.BorderMenu};

  &:hover {
    /* background-color: #0c66e4;
    color: white; */
  }
`;
export const GetBoardsContainer = styled.div`
  box-shadow: var(
    --ds-shadow-overlay,
    0 0 0 1px rgba(9, 30, 66, 0.13),
    0 4px 11px rgba(9, 30, 66, 0.13)
  );
  background-color: white;
  box-sizing: border-box;
  max-width: 200px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  color: ${(props) => props.theme.memberMenuFontColor};
`;
export const CreateBoardinBoards = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  border-top: 2px solid #091e4224;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 10px;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    background-color: #091e420f;
  }
`;
export const IconPlus = styled(AddIcon)`
  font-size: 19px !important;
`;
export const TitleGetBoards = styled.div`
  font-size: 11px;
  color: #626f86;
  font-weight: 700;
  padding: 8px 16px;
`;
export const GetBoardsList = styled.div`
  list-style-type: none;
  padding-inline-start: 0;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 3px;
`;
export const GetBoardsListItemLink = styled(Link)`
  text-decoration: none;
`;
export const GetBoardsListItem = styled(Link)<{ selected: boolean }>`
  padding: 8px 16px;
  display: flex;
  font: var(
    --ds-font-body,
    normal 400 14px / 20px ui-sans-serif,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Ubuntu,
    system-ui,
    "Helvetica Neue",
    sans-serif
  );
  font-size: 13px;
  gap: 7px;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ selected, theme }) =>
    selected ? `#0c66e4` : `${theme.memberMenuFontColor}`};
  background: ${({ selected }) =>
    selected
      ? `linear-gradient(135deg, rgba(113, 183, 230, 0.7), rgba(155, 89, 182, 0.7))`
      : "none"};
  &:hover {
    cursor: pointer;
    background-color: #091e420f;
  }
  &:hover ${GetBoardsListItemLink} {
    color: #0c66e4;
  }
`;
export const SideBarElement = styled(Link)`
  text-decoration: none;
  padding: 1px 3px;
`;
export const SideBarElementWrapper = styled.span<{ selected: boolean }>`
  color: ${(props) => props.theme.sideBarFontColour};
  display: flex;
  gap: 15px;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 8px 8px 14px;
  align-items: center;
  background: ${({ selected }) =>
    selected
      ? `linear-gradient(135deg, rgba(113, 183, 230, 0.7), rgba(155, 89, 182, 0.7))`
      : "none"};
  color: ${({ selected, theme }) =>
    selected ? `#0c66e4` : `${theme.memberMenuFontColor}`};
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: linear-gradient(
      135deg,
      rgba(113, 183, 230, 0.7),
      rgba(155, 89, 182, 0.7)
    );
  }
`;
export const SideBarElementIcon = styled.span``;
export const IconCalendarViewWeek = styled(CalendarViewWeekIcon)`
  font-size: 1.3rem !important;
`;
export const IconLayout = styled(LayoutIcon)`
  font-size: 1.3rem !important;
`;
export const IconListBullet = styled(FormatListBulletedOutlinedIcon)`
  font-size: 1.3rem !important;
`;
