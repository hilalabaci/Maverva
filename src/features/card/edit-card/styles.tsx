import styled from "styled-components";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ModalBox = styled.div`
  color: ${(props) => props.theme.memberMenuFontColor};
`;
export const ModalBoxStatus = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  clear: both;
  float: left;
  padding: 6px 12px 6px 8px;
  text-decoration: none;
  &:hover {
    //background: ${(props) => props.theme.backlogBgHover};
    transform: translateX(5px);
  }
`;
export const Title = styled.span`
  font-size: 14px;
`;

export const IconMove = styled(TrendingFlatIcon)`
  font-size: 19px !important;
`;
export const IconLabel = styled(LabelImportantIcon)`
  font-size: 19px !important;
`;
export const IconDelete = styled(RemoveCircleOutlineIcon)`
  font-size: 19px !important;
`;
