import styled, { createGlobalStyle } from "styled-components";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

export const GlobalStyle = createGlobalStyle`

`;
export const EditIcon = styled(ModeEditOutlineOutlinedIcon)`
  opacity: 0;
  display: flex;
  justify-content: flex-end;
  font-size: 17px !important;
  @media only screen and (max-width: 768px) {
    font-size: 12px !important;
    opacity: 1;
  }
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.cardBG};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  border-radius: 2px;
  gap: 3px;
  --jsw-card-background-color: var(--ds-surface-raised, #FFFFFF);
  box-shadow: var(
    --ds-shadow-raised,
    0 1px 1px rgba(23, 43, 77, 0.2),
    0 0 1px rgba(23, 43, 77, 0.2)
  );
  cursor: pointer;
  background-color: ${(props) => props.theme.cardBG};
  :hover {
    //background-color: ${(props) => props.theme.cardBGHover};
    background-color: var(--ds-background-neutral-subtle-hovered, #F4F5F7);
    --jsw-card-background-color: var(--ds-background-neutral-subtle-hovered, #F4F5F7);
    color: var(--ds-text, #172B4D);
  }
  :hover ${EditIcon} {
    opacity: 1;
  }
  @media only screen and (max-width: 768px) {
    padding: 15px;
    border-radius: 15px;
    height: 60px;
  }
`;
export const CardTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const NoteWrapper = styled.div`
  flex: 1;
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 0.065em;
  color: ${(props) => props.theme.fontColour};
  resize: none;
  outline: none;
  border: none;
  padding: 0 5px;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
    overflow: scroll;
  }
`;
export const CardButtomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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
