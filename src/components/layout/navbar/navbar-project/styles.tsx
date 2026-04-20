import styled, { createGlobalStyle } from "styled-components";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { device } from "../../../../styles/breakpoints";
interface ModalsToggleProps {
  $isNotificationModalOpen?: boolean; // Mark as optional
  $isMemberButtonOpen?: boolean;
}

export const GlobalStyle = createGlobalStyle`
#root,
#root > div {
  min-height: 100vh;
}
`;

export const HeaderContainer = styled.header`
  background: var(--app-bg);
  display: flex;
  border-bottom: 1px solid var(--app-line);
  padding: 0 16px;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  color: var(--app-ink);
  flex-shrink: 0;
`;
export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  @media ${device.mobile} {
    gap: 5px;
  }
`;
export const Presentation = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ProjectsLink = styled(Link)`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  color: var(--app-ink-2);
  font-weight: 500;
  font-size: 13px;
  border-radius: 5px;
  padding: 6px 8px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: var(--app-bg-2);
    color: var(--app-ink);
  }
  :focus-visible {
    color: var(--app-accent);
  }
`;
export const ProjectsSpan = styled(KeyboardArrowDownIcon)`
  font-size: 16px !important;
`;
export const CreateWrapper = styled.div`
  @media ${device.mobile} {
    //display: none;
  }
`;
export const CreateButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid var(--app-line);
  outline: none;
  color: var(--app-ink);
  background: var(--app-card);
  font-size: 12.5px;
  border-radius: 5px;
  padding: 6px 10px;
  gap: 6px;
  &:hover {
    border-color: var(--app-line-2);
    color: var(--app-ink);
  }
`;

export const BrandContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: var(--app-ink);
  letter-spacing: -0.01em;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const BrandMark = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  flex-shrink: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 1.5px solid var(--app-ink);
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border: 1.5px solid transparent;
    border-top-color: var(--app-ink);
    border-left-color: var(--app-ink);
    border-radius: 50%;
    transform: rotate(45deg);
  }
`;

export const BrandDot = styled.span`
  position: absolute;
  width: 5px;
  height: 5px;
  background: var(--app-ink);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const BrandLogo = styled(DashboardRoundedIcon)`
  font-size: 20px !important;
  margin: 0px 5px;
  @media ${device.mobile} {
    width: 20px;
    height: 20px;
    margin: 0px 10px;
  }
`;

export const NavbarLeftSideWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  padding: 0 6px;
`;
export const UserWrapper = styled.div``;
export const SearchWrapper = styled.div``;

export const ButtonforNotification = styled.button<ModalsToggleProps>`
  cursor: pointer;
  outline: none;
  border: none;
  padding: 4px 5px;
  border-radius: 6px;
  position: relative;
  background: ${(props) =>
    props.$isNotificationModalOpen ? "var(--app-bg-2)" : "transparent"};
  color: var(--app-ink-3);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: var(--app-bg-2);
    color: var(--app-ink);
  }
`;
export const ButtonforTheme = styled.button`
  outline: none;
  border: none;
  padding: 3px 4px;
  background-color: ${(props) =>
    props.theme.colour.primary.button.primary.background.default};

  &:hover {
    border-radius: 50px;
    background-color: #091e4224;
  }
`;
export const IconNotification = styled(NotificationsIcon)<ModalsToggleProps>`
  color: ${(props) =>
    props.$isNotificationModalOpen ? "var(--app-ink)" : "var(--app-ink-3)"};
  font-size: 20px !important;
`;
export const NotificationCount = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  background: var(--app-warn);
  color: white;
  border-radius: 50%;
  width: 6px;
  height: 6px;
  border: 1.5px solid var(--app-bg);
  font-size: 0;
`;
export const NotificationContainer = styled.div`
  background-color: ${(props) => props.theme.colour.modal.background.default};
  box-shadow: 0 8px 16px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
  border: ${(props) => props.theme.colour.borderforNotificationContainer};
  color: ${(props) => props.theme.colour.text.primary};
  border-radius: 8px;
  width: 380px;
  max-height: 520px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colour.modal.background.default};
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colour.iconButton.hover.background};
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.colour.iconButton.active.background};
  }
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.colour.iconButton.hover.background} ${(props) => props.theme.colour.modal.background.default};
`;
export const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
`;
export const Title = styled.header`
  border-bottom: 1px solid ${(props) => props.theme.colour.divider.border.default.replace('1px solid ', '') || 'rgba(9,30,66,0.14)'};
  font-size: 20px;
  padding: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colour.text.primary};
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colour.modal.background.default};
  z-index: 1;
  border-radius: 8px 8px 0 0;
`;

export const MemberButtonWrapper = styled.div<ModalsToggleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$isMemberButtonOpen
      ? "var(--app-bg-2)"
      : "transparent"};

  &:hover {
    background-color: var(--app-bg-2);
  }
`;

export const NavbarCrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--app-ink-3);
  min-width: 0;
  flex: 1;
  b { color: var(--app-ink); font-weight: 500; }
  .sep { color: var(--app-ink-4); }
`;

export const TopbarPrimaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 10px;
  border: 1px solid var(--app-ink);
  background: var(--app-ink);
  border-radius: 5px;
  font-size: 12.5px;
  color: var(--app-bg);
  cursor: pointer;
  &:hover {
    background: var(--app-accent);
    border-color: var(--app-accent);
  }
`;
