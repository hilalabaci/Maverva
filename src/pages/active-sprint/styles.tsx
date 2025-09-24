import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { device } from "../../styles/breakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10fr 1fr;
  gap: 10px;
  height: 100vh;
`;

export const ColumnContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  //grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 10px;
`;

export const EditIcon = styled(MoreHorizRoundedIcon)`
  opacity: 0;
  display: flex;
  justify-content: flex-end;
  padding: 4px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.IconEditBg};
  &:hover {
    background-color: ${(props) => props.theme.IconEditBGHover};
  }
 @media ${device.mobile} {
    font-size: 12px !important;
    opacity: 1;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colour.background.columnBG};
  min-width: 282px;
  height: 100%;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  max-height: max-content;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.projectColour};
  margin-right: 10px;
  &:hover ${EditIcon} {
    opacity: 1;
  }
`;
export const TitleTotalCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 29px;
  color: ${(props) => props.theme.searchPlaceHolderFontColour};
  margin-left: 10px;
  display: inline-block;
 @media ${device.mobile} {
    font-size: 15px;
  }
`;
export const AddColumnContainer = styled.div``;
export const AddColumnWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  background-color: ${(props) => props.theme.colour.background.columnBG};
`;
export const AddColumnTitle = styled.input`
  border: none;
  outline: ${(props) => props.theme.colour.border.active};
  min-width: 200px;
  padding: 10px 20px 10px 5px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colour.background.default};
  color: ${(props) => props.theme.colour.text.primary};
  text-align: left;
  &::placeholder {
    font-size: 14px;
    text-align: left;
  }
`;
export const IconWrapper = styled.button`
  background-color: ${(props) =>
    props.theme.colour.primary.button.secondary.background.default};
  border-radius: 3px;
  box-sizing: border-box;
  display: inline-flex;
  text-align: center;
  cursor: pointer;
  padding: 5px;
  width: auto;
  outline: none;
  border: none;
  color: ${(props) => props.theme.colour.text.primary};
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.button.secondary.background.hover};
  }
`;
export const IconAdd = styled(AddIcon)`
  font-size: 28px !important;
`;
export const ButtonWrapper = styled.div`
  gap: 5px;
`;
export const CloseButton = styled.button`
  outline: none;
  border: none;
  background-color: ${(props) =>
    props.theme.colour.primary.button.secondary.background.default};
  border-radius: 3px;
  color: ${(props) => props.theme.colour.text.primary};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.button.secondary.background.hover};
  }
`;
export const IconClose = styled(CloseIcon)`
  font-size: 22px !important;
`;
