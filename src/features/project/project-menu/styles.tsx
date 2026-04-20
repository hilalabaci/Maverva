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
export const SidebarIco = styled.span`
  width: 16px;
  height: 16px;
  border: 1.3px solid currentColor;
  border-radius: 3.5px;
  opacity: 0.75;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
type CommonPropsType = {
  $hidden?: boolean;
};
export const Container = styled.div<CommonPropsType>`
  min-width: ${(props) => (props.$hidden ? "20px" : "240px")};
  max-width: ${(props) => (props.$hidden ? "20px" : "240px")};
  height: 100%;
  background: var(--app-panel);
  border-right: 1px solid var(--app-line);
  display: flex;
  flex-direction: column;
  padding: 14px 10px;
  gap: 2px;
  overflow: hidden;
  @media ${device.mobile} {
    width: ${(props) => (props.$hidden ? "20px" : "fit-content")};
  }
`;

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 2px;
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
  width: 100%;
  gap: 1px;
`;
export const SidebarSearch = styled.div<CommonPropsType>`
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  margin: 0 0 6px;
  background: var(--app-bg);
  border: 1px solid var(--app-line);
  border-radius: 5px;
  font-size: 12.5px;
  color: var(--app-ink-3);
  cursor: text;
  justify-content: space-between;
  span.k {
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 10.5px;
    border: 1px solid var(--app-line-2);
    padding: 0 5px;
    border-radius: 3px;
    color: var(--app-ink-3);
  }
`;
export const SidebarSectionHead = styled.div<CommonPropsType>`
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--app-ink-3);
  padding: 14px 10px 6px;
  span.plus {
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
    &:hover { color: var(--app-ink); }
  }
`;
export const SideFooter = styled.div<CommonPropsType>`
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  margin-top: auto;
  padding: 20px 10px;
  border-top: 1px solid var(--app-line);
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: var(--app-ink-3);
  .av {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: var(--app-accent);
    color: #fff;
    font-size: 11px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .who { flex: 1; min-width: 0; }
  .who b { display: block; color: var(--app-ink); font-weight: 500; font-size: 12.5px; }
  .who span { font-size: 11px; color: var(--app-ink-3); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: block; }
`;
export const UserInfo = styled.div<CommonPropsType>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  flex-direction: row;
  padding: 8px 10px 14px;
  border-bottom: 1px solid var(--app-line);
  margin-bottom: 10px;
`;
export const ProjectTitle = styled.span<CommonPropsType>`
  color: var(--app-ink);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  width: 100%;
`;
export const SideBarElementWrapper = styled.span<{ selected: boolean }>`
  display: flex;
  gap: 10px;
  font-size: 13px;
  font-weight: ${({ selected }) => (selected ? "500" : "400")};
  line-height: 1.4;
  padding: 6px 10px;
  align-items: center;
  border-radius: 5px;
  background: ${({ selected }) => (selected ? "var(--app-accent-soft)" : "transparent")};
  color: ${({ selected }) => (selected ? "var(--app-accent)" : "var(--app-ink-2)")};
  &:hover {
    cursor: pointer;
    background: var(--app-bg-2);
    color: var(--app-ink);
  }
`;
export const SideBarElementIcon = styled.span`
  display: flex;
  align-items: center;
  color: inherit;
  opacity: 0.75;
  flex-shrink: 0;
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
