import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 9fr 1fr;
  gap: 7px;
`;

export const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 7px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.projectColour};
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 3px;
  max-height: max-content;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.projectColour};
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 29px;
  color: ${(props) => props.theme.searchPlaceHolderFontColour};
  margin-left: 10px;
  display: inline-block;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const AddColumnContainer = styled.div``;
export const AddColumnWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  background-color: ${(props) => props.theme.projectColour};
`;
export const AddColumnTitle = styled.input`
  border: none;
  outline: ${(props) => props.theme.activeBorder};
  min-width: 200px;
  padding: 10px 20px 10px 5px;
  border-radius: 3px;
  text-align: left;
  &::placeholder {
    font-size: 14px;
    text-align: left;
  }
`;
export const IconWrapper = styled.button`
  background-color: ${(props) => props.theme.projectColour};
  border-radius: 3px;
  box-sizing: border-box;
  display: inline-flex;
  text-align: center;
  cursor: pointer;
  padding: 0px 2px;
  width: auto;
  outline: none;
  border: none;
  color: ${(props) => props.theme.fontColour};
  &:hover {
    background-color: ${(props) => props.theme.cardBGHover};
  }
`;
export const IconAdd = styled(AddIcon)`
  font-size: 2rem !important;
`;
export const ButtonWrapper = styled.div`
  gap: 5px;
`;
export const CloseButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.IconEditBGHover};
  }
`;
export const IconClose = styled(CloseIcon)`
  font-size: 22px !important;
`;
