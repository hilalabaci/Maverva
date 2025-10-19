import styled, { createGlobalStyle } from "styled-components";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DoneIcon from "@mui/icons-material/Done";
import { device } from "../../../styles/breakpoints";
//--ds-shadow-raised:  0px 1px 1px #091E4240, 0px 0px 1px #091E424F;

export const GlobalStyle = createGlobalStyle`

`;
export const EditContentIcon = styled(ModeEditIcon)`
  opacity: 0;
  padding: 2px;
`;
export const EditIcon = styled(MoreHorizRoundedIcon)`
  opacity: 0;
  padding: 1px !important;
  border-radius: 3px;
  &:hover {
    background-color: ${(props) => props.theme.IconEditBGHover};
  }
  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSize.subtitle}!important;
    opacity: 1;
  }
`;

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem;
  border-radius: 3px;
  border: none;
  //max-width: 270px;
  /* box-shadow: 0px 1px 1px #091e4240, 0px 0px 1px #091e424f, 0 1px 1px #172b4d00,
    0 0 1px #172b4d33;
  box-shadow: inset 0px 0px 1px #091e4240, 0px 0px 1px #091e424f,
    0 1px 1px #172b4d00, 0 0 1px #172b4d33; */
  box-shadow: inset 0px 0px 1px #091e4240, 0px 0px 1px #091e424f,
    0px 0px 1px #172b4d00, 0 0 1px #172b4d33;
  background-color: ${(props) => props.theme.colour.background.default};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colour.background.cardBG.hover};
    color: ${(props) => props.theme.colour.text.primary};
  }
  &:hover ${EditIcon} {
    justify-content: flex-end;
    padding: 1px !important;
    border-radius: 3px !important;
    background-color: ${(props) =>
      props.theme.colour.primary.button.secondary.background.hover};
    opacity: 1;
  }
  &:hover ${EditContentIcon} {
    justify-content: flex-end;
    border-radius: 3px;
    opacity: 1;
    padding: 2px;
    font-size: medium !important;
  }
  @media ${device.mobile} {
    padding: 15px;
    border-radius: 3px;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  gap: 5px;
`;
export const NoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  gap: 5px;
  @media ${device.mobile} {
    font-size: 10px;
    overflow: scroll;
  }
`;
export const Note = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.default};
  line-height: 20px;
  color: ${(props) => props.theme.memberMenuFontColor};
  resize: none;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const NoteEdit = styled.button`
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  color: ${(props) => props.theme.colour.text.primary};
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.button.secondary.background.hover};
  }
`;
export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
  width: 100%;
`;
export const EditTextArea = styled.textarea`
  resize: none;
  outline: none;
  border-radius: 3px;
  border: ${(props) => props.theme.colour.border.active};
  background-color: ${(props) => props.theme.colour.background.surface};
  color: ${(props) => props.theme.colour.text.primary};
  min-width: 97%;
  font-size: ${(props) => props.theme.fontSize.default};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
export const DoneButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 3px;
  padding: 4px 5px;
  background-color: ${(props) =>
    props.theme.colour.primary.button.primary.background.default};
  box-shadow: inset 0px 0px 1px #091e4240, 0px 0px 1px #091e424f,
    0px 0px 1px #172b4d00, 0 0 1px #172b4d33;
  color: ${(props) => props.theme.colour.text.primary};
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.button.primary.background.hover};
  }
`;
export const IconDone = styled(DoneIcon)`
  font-size: 15px !important;
  color: ${(props) => props.theme.colour.background.default} !important;
`;
export const ButtomWrapper = styled.button`
  display: flex;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const CardButtomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardKeyWrapper = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: ${(props) => props.theme.colour.text.inverted};
  @media ${device.mobile} {
    font-size: 10px;
  }
`;

export const ContainerUser = styled.div`
  font-size: 1px !important;
  width: 20px !important;
  height: 20px !important;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
`;
