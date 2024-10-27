import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonIcon from "@mui/icons-material/Person";
export const GlobalStyle = createGlobalStyle`

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  @media only screen and (max-width: 768px) {
    height: 50px;
    align-items: start;
  }
`;
export const PathInfo = styled.nav`
  font-family: var(
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
  color: #44546f;
  font-size: 14px;
`;
export const PathList = styled.ol`
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
  display: flex;
  color: #44546f;
  font-size: 14px;
  padding: 10px 0 0;
`;
export const Pathitem = styled.li`
  padding-left: 5px;
`;
export const PathLink = styled(Link)`
  text-decoration: none;
  color: #44546f;
  &:hover {
    text-decoration: underline;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  //background-color: ${(props) => props.theme.projectColour};
  border-radius: 2px;
  display: flex;
  @media only screen and (max-width: 768px) {
    height: 35px;
    margin-top: 5px;
  }
`;

export const ProjectTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.memberMenuFontColor};
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  max-width: 600px;
  &:hover {
    background-color: ${(props) => props.theme.projectBG};
  }
  @media only screen and (max-width: 768px) {
    font-size: 11px;
    margin: 10px;
  }
`;

export const EditProjectTitle = styled.input`
  background-color: ${(props) => props.theme.projectColour};
  border: 2px solid #007bff;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColour};
  letter-spacing: 1px;
  text-align: center;
  vertical-align: center;
  text-transform: uppercase;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const SearchAndAssignMemberContainer = styled.div`
  display: flex;
  padding: 10px 0;
  gap: 20px;
`;
export const AssignMemberContainer = styled.div`
  display: flex;
`;
export const HostMemberContainer = styled.div``;
export const ButtonStylesforIconPerson = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0;
  background: none;
  border-radius: 50px;
  font-family: Inter;
  border: 2px solid ${(props) => props.theme.primary};
  &:hover {
    z-index: 1;
  }
`;
export const ButtonStylesforPersonAdd = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  margin-left: 10px;
  border-radius: 50px;
  font-family: Inter;
  width: 40px;
  height: 40px;
  background-color: #a1bdd914;
  color: #b6c2cf;
  cursor: pointer;
  &:hover {
    background-color: #a6c5e229;
  }
`;

export const IconPersonAdd = styled(PersonAddAlt1Icon)`
  width: 25px !important;
  height: 25px !important;
  color: ${(props) => props.theme.fontColour};
`;
export const IconPerson = styled(PersonIcon)`
  width: 25px !important;
  height: 25px !important;
  color: #1d2125;
`;
