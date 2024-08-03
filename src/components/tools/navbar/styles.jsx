import styled, { createGlobalStyle } from "styled-components";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const GlobalStyle = createGlobalStyle`
#root,
#root > div {
  min-height: 100vh;
}
`;

export const NavbarContainer = styled.nav`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.borderLineColour};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 6px,
    inset rgba(0, 0, 0, 0.23) 0px 1px 1px;
  padding: 10px;
  justify-content: space-between;
`;
export const BrandContainer = styled.a`
  color: ${(props) => props.theme.fontColour};
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 39px;
  /* identical to box height */
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const BrandLogo = styled(DashboardRoundedIcon)`
  font-size: 30px !important;
  margin: 0px 20px;
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
`;
export const UserWrapper = styled.div``;
export const SearchWrapper = styled.div``;

export const LightMode = styled(LightModeIcon)`
  color: ${(props) => props.theme.fontColour};
  font-size: 23px !important;
`;
export const DarkMode = styled(DarkModeIcon)`
  color: ${(props) => props.theme.fontColour};
  font-size: 23px !important;
`;
export const ButtonNotification = styled.button`
  outline: none;
  border: none;
  background-color:  ${(props) => props.theme.primary};;
`;
export const IconNotification = styled(NotificationsIcon)`
  color: ${(props) => props.theme.fontColour};
  font-size: 23px !important;
`;
