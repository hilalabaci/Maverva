import { Link } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styled, { css } from "styled-components";
import { device } from "../../../styles/breakpoints";

const navIconStyle = css`
  font-size: 1rem !important;
  color: inherit;
`;
type CommonPropsType = {
  $hidden?: boolean;
};
export const Container = styled.div<CommonPropsType>`
  //display: ${(props) => (props.$hidden ? "none" : "flex")};
  min-width: ${(props) => (props.$hidden ? "20px" : "240px")};
  height: 100vh;
  background-color: ${(props) => props.theme.BorderMenuBG};
  @media ${device.mobile} {
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
  padding: 5px;
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
  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSize.subtitle};
  }
`;
export const SideBarItem = styled.div`
  display: flex;
  gap: 7px;
  margin: 0 8px;
  flex-direction: column;
`;
export const SideBarWrapper = styled.div`
  border-radius: 5px;
`;
export const SideBarListWrapper = styled.div<CommonPropsType>`
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  flex-direction: column;
  padding: 8px 0;
  width: 100%;
`;
export const UserInfo = styled.div<CommonPropsType>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  flex-direction: row;
  margin-left: 8px;
  padding: 8px;
  padding-block-start: 24px;
  /* border-bottom: ${(props) =>
    props.$hidden ? "none" : "1px solid rgba(255, 255, 255, 0.13);"}; */
  //padding: ${(props) => (props.$hidden ? "0" : "0")};
  @media ${device.mobile} {
  }
`;
export const ProjectTitle = styled.span<CommonPropsType>`
  color: ${(props) => props.theme.fontColour};
  font-size: ${(props) => props.theme.fontSize.default};
  font-weight: bold;
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSize.default};
  }
`;
export const BoardWrapper = styled.div`
  padding: 4px;
  border-radius: 5px;
`;
export const GetBoardsContainer = styled.div`
  background-color: ${(props) => props.theme.colour.background.default};
  box-sizing: border-box;
  max-width: 220px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  color: ${(props) => props.theme.colour.text.inverted};
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
export const GetBoardsListItem = styled.div<{ selected: boolean }>`
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
  border-radius: 3px;
  gap: 7px;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ selected, theme }) =>
    selected ? theme.colour.text.link : theme.colour.text.inverted};
  background: ${({ selected, theme }) =>
    selected ? theme.colour.primary.button.secondary.background.active + "22" : "none"};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colour.primary.button.secondary.background.default};
  }
`;
export const SideBarElement = styled(Link)`
  text-decoration: none;
`;
export const SideBarElementWrapper = styled.span<{ selected: boolean }>`
  display: flex;
  gap: 8px;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, sans-serif;
  font-weight: 500;
  line-height: 20px;
  padding: 6px 8px;
  align-items: center;
  border-radius: 3px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colour.primary.button.secondary.background.active + "22" : "transparent"};
  color: ${({ selected, theme }) =>
    selected ? theme.colour.text.link : theme.colour.text.primary};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colour.primary.button.secondary.background.default};
  }
`;
export const SideBarElementIcon = styled.span`
  display: flex;
  align-items: center;
  color: inherit;
`;
export const SideBarElementChevron = styled.span`
  display: flex;
  align-items: center;
  margin-left: auto;
  color: inherit;
  opacity: 0.6;
`;
export const IconForYou = styled(PersonOutlinedIcon)`${navIconStyle}`;
export const IconRecent = styled(AccessTimeOutlinedIcon)`${navIconStyle}`;
export const IconStarred = styled(StarBorderOutlinedIcon)`${navIconStyle}`;
export const IconChevronRight = styled(ChevronRightIcon)`${navIconStyle}`;
