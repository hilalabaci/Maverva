import styled, { createGlobalStyle } from "styled-components";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
interface ButtonforNotificationProps {
  $isNotificationModalOpen?: boolean; // Mark as optional
}

export const GlobalStyle = createGlobalStyle`
#root,
#root > div {
  min-height: 100vh;
}
`;

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.borderLineColour};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 6px,
    inset rgba(0, 0, 0, 0.23) 0px 1px 1px;
  padding: 10px;
  justify-content: space-between;
  color: ${(props) => props.theme.navbarFontColour};
  font-family: inherit;
`;
export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
export const Presentation = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const Projects = styled.div``;
export const ProjectsButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  color: ${(props) => props.theme.navbarFontColour};
  background-color: ${(props) => props.theme.primary};
  font-weight: 600;
  font-size: 15px;
  border-radius: 3px;
  padding: 7px;
  &:hover {
    background-color: #dddfe4;
  }

  :focus-visible {
    color: #0c66e4;
  }
`;
export const ProjectsSpan = styled(KeyboardArrowDownIcon)`
  font-size: 16px !important;
`;
export const CreateWrapper = styled.div``;
export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.primary};
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 12px;
  outline: none;
  border: none;
  border-radius: 3px;
  background-color: ${(props) => props.theme.navbarButtonBG};
  &:hover {
    background-color: ${(props) => props.theme.navbarButtonBGHover};
  }
`;

export const BrandContainer = styled.a`
  color: ${(props) => props.theme.fontColour};
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 39px;
  /* identical to box height */
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const BrandLogo = styled(DashboardRoundedIcon)`
  font-size: 20px !important;
  margin: 0px 5px;
  @media only screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0px 10px;
  }
`;

export const SearchUser = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 15px;
  padding: 0px 15px;
`;
export const UserWrapper = styled.div``;
export const SearchWrapper = styled.div``;

export const ButtonforNotification = styled.button<ButtonforNotificationProps>`
  outline: none;
  border: none;
  padding: 3px 4px;
  border-radius: 50px;
  //background-color: ${(props) => props.theme.primary};
  background-color: ${(props) =>
    props.$isNotificationModalOpen ? "#E9F2FF" : props.theme.primary};
  &:hover {
    background-color: #091e4224;
  }
`;
export const ButtonforTheme = styled.button`
  outline: none;
  border: none;
  padding: 3px 4px;
  background-color: ${(props) => props.theme.primary};

  &:hover {
    border-radius: 50px;
    background-color: #091e4224;
  }
`;
export const IconNotification = styled(
  NotificationsIcon
)<ButtonforNotificationProps>`
  color: ${(props) =>
    props.$isNotificationModalOpen ? "#0c66e4" : props.theme.fontColour};
  font-size: 23px !important;
`;
export const NotificationCount = styled.span`
  position: absolute;
  top: 11px;
  right: 66px;
  background: #c9372c;
  color: white;
  border-radius: 10px;
  padding: 0px 8px;
  font-size: 11px;
  font: var(
    --ds-font-body-UNSAFE_small,
    normal 400 12px/16px ui-sans-serif,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Ubuntu,
    system-ui,
    "Helvetica Neue",
    sans-serif
  );
`;
export const NotificationContainer = styled.div`
  background-color: ${(props) => props.theme.modalBg};
  box-shadow: 0 4px 8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
  border: ${(props) =>
    props.theme
      .borderforNotificationContainer}; /* İsteğe bağlı olarak bir border ekleyebilirsiniz */
  border-radius: 8px;
  width: 60%;
  //transform: translate3d(-142px, 51.5px, 0px);
`;
export const NotificationWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column-reverse;
`;
export const Title = styled.header`
  border-bottom: 2px solid rgba(225, 227, 231, 255);
  font-size: 24px;
  padding: 15px;
`;
