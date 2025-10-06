import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
//import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
//import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { device } from "../../styles/breakpoints";

export const Container = styled.main`
  color: ${(props) => props.theme.colour.text.primary};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 40px;
  padding-top: 5px;
  gap: 10px;
 @media ${device.mobile} {
    padding-inline: 10px;
  }
`;
export const HeaderAndCreateWrapper = styled.div``;
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Header = styled.h1`
  font-size: 24px;
`;
export const SearchWrapper = styled.div``;
export const DataContainer = styled.div`
  padding-top: 10px;
 @media ${device.mobile} {
    padding-top: 0;
  }
`;
export const Tables = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
`;
export const TableHead = styled.thead`
  border-bottom: ${(props) => props.theme.colour.table.border.default};
`;
export const TableTitleWrapper = styled.tr``;
export const Titles = styled.th`
  color: ${(props) => props.theme.colour.text.inverted};
  font-size: ${(props) => props.theme.fontSize.default};
  font-weight: 500;
`;
export const OrderIcon = styled(ArrowDownwardIcon)`
  width: 16px !important;
  height: 16px !important;
 @media ${device.mobile} {
    width: 10px !important;
    height: 10px !important;
  }
`;

export const TableBody = styled.tbody``;
export const IconWrapper = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
 @media ${device.mobile} {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
export const DataWrapper = styled.tr`
  border-bottom: ${(props) => props.theme.colour.tableBorder};
  &:hover {
    background-color: ${(props) => props.theme.colour.projectsBgHover};
  }
`;
export const LinkforProjects = styled(Link)`
  color: ${(props) => props.theme.colour.text.link};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const DataLeadName = styled.td`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: ${(props) => props.theme.fontSize.default};
  font-weight: 400;
`;
export const DataKey = styled.td`
  font-size: ${(props) => props.theme.fontSize.default};
`;
export const DataProjectsName = styled.td`
  display: flex;
  align-items: center;
  gap: 7px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: ${(props) => props.theme.fontSize.default};
  font-weight: 400;
  color: ${(props) => props.theme.colour.themecolourActiveColor};
  &:hover {
    text-decoration: underline;
  }
`;
export const MoreIconButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 3px;
  &:hover {
    background-color: ${(props) => props.theme.colour.projectsIconHover};
  }
`;
export const FavIconTable = styled(HeartFilledIcon)`
  width: 17px;
  height: 12px;
  padding-left: 3px;
  color: ${(props) => props.theme.colour.text.inverted};
`;
export const IconFav = styled(HeartIcon)`
  width: 22px;
  height: 18px;
  color: ${(props) => props.theme.colour.iconButton.default.icon};
`;
export const FilledIconFav = styled(HeartFilledIcon)`
  color: #fe0034;
  color: #c22634;
  color: #df364a;
  width: 22px;
  height: 18px;
`;
export const MoreIcon = styled(MoreHorizRoundedIcon)`
  color: ${(props) => props.theme.colour.text.inverted};
`;
