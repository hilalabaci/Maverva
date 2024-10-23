import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";

export const Container = styled.main`
  color: ${(props) => props.theme.memberMenuFontColor};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 40px;
  padding-top: 5px;
  gap: 10px;
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
  font-weight: 500;
`;
export const SearchWrapper = styled.div``;
export const DataContainer = styled.div`
  padding-top: 10px;
`;
export const Tables = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
`;
export const TableHead = styled.thead`
  border-bottom: 3px solid #eeeff2;
`;
export const TableTitleWrapper = styled.tr``;
export const Titles = styled.th`
  color: ${(props) => props.theme.memberMenuFontColor};
  font-size: 14px;
  font-weight: 500;
`;
export const OrderIcon = styled(ArrowDownwardIcon)`
  width: 16px !important;
  height: 16px !important;
`;

export const TableBody = styled.tbody``;
export const IconWrapper = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
`;
export const DataWrapper = styled.tr`
  border-bottom: 3px solid #eeeff2;
  &:hover {
    background-color: ${(props) => props.theme.projectsBgHover};
  }
`;
export const LinkforProjects = styled(Link)`
  color: ${(props) => props.theme.themeActiveColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const DataLeadName = styled.td`
  display: flex;
  align-items: center;
  gap: 7px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.themeActiveColor};
`;
export const DataKey = styled.td`
  font-size: 14px;
`;
export const DataProjectsName = styled.td`
  display: flex;
  align-items: center;
  gap: 7px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.themeActiveColor};
  &:hover {
    text-decoration: underline;
  }
`;
export const MoreIconButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  &:hover {
    background-color: ${(props) => props.theme.projectsIconHover};
  }
`;
export const FavIconTable = styled(HeartFilledIcon)`
  width: 17px;
  height: 12px;
  padding-left: 3px;
`;
export const IconFav = styled(HeartIcon)`
  width: 22px;
  height: 18px;
`;
export const FilledIconFav = styled(HeartFilledIcon)`
  color: #fe0034;
  color: #c22634;
  color: #df364a;
  width: 22px;
  height: 18px;
`;
export const MoreIcon = styled(MoreHorizRoundedIcon)``;
