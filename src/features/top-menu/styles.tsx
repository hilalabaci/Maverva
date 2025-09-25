import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { device } from "../../styles/breakpoints";

export const GlobalStyle = createGlobalStyle`

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  @media ${device.mobile} {
    align-items: start;
  }
`;
export const PathInfo = styled.nav`
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
  @media ${device.mobile} {
        flex-wrap: wrap;
  }
`;
export const Pathitem = styled.li`
  padding-left: 5px;
`;
export const PathLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colour.text.subtitle};
  &:hover {
    text-decoration: underline;
  }
`;
export const TitleHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 40px;
  @media ${device.mobile} {
    width: -webkit-fill-available;
    margin-right: 7px;
  }
`;
export const Title = styled.div`
  //background-color: ${(props) => props.theme.projectColour};
  border-radius: 2px;
  display: flex;
  @media ${device.mobile} {
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
  margin-top: 0;
  @media ${device.mobile} {
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
  @media ${device.mobile} {
    font-size: 15px;
  }
`;
export const SearchAndAssignMemberContainer = styled.div`
  display: flex;
  padding: 10px 0;
  gap: 20px;
  @media ${device.mobile} {
    width: -webkit-fill-available;
    padding: 10px 10px;
  }
`;
export const AssignMemberContainer = styled.div`
  display: flex;
  width: 100%;
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
  //border: 2px solid ${(props) => props.theme.colour.memberMenuHoverBg};
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
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.colour.icon.background.default};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colour.icon.background.hover};
  }
`;

export const IconPersonAdd = styled(PersonAddAlt1Icon)`
  width: 25px !important;
  height: 25px !important;
  margin-left: 3px;
  color: ${(props) => props.theme.colour.icon.colour.default};
`;
export const IconPerson = styled(PersonIcon)`
  width: 25px !important;
  height: 25px !important;
  color: ${(props) => props.theme.colour.icon.colour.default};
`;
export const FeaturesSprintContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const FeaturesSprint = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const SprintTime = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
  font-weight: 450;
`;
export const TimeIcon = styled(AccessTimeIcon)`
  font-size: 20px !important;
`;
