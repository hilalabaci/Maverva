import styled, { createGlobalStyle } from "styled-components";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

export const GlobalStyle = createGlobalStyle`

`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colour.modal.background.default};
  color: ${(props) => props.theme.colour.text.inverted};
  padding: 12px;
  box-shadow: var(
    --ds-shadow-overlay,
    0 0 0 1px rgba(9, 30, 66, 0.08),
    0 2px 1px rgba(9, 30, 66, 0.08),
    0 0 20px -6px rgba(9, 30, 66, 0.31)
  );
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 10px;
  font-weight: 500;
  font-size: 20px;
  gap: 10px;
`;
export const Title = styled.span`
  flex: 1;
`;
export const WarningIcon = styled(WarningRoundedIcon)`
  color: #c9372c;
  font-size: 28px !important;
`;
export const Content = styled.div`
  padding: 6px 12px;
  text-align: start;
  line-height: 25px;
  font-size: ${(props) => props.theme.fontSize.default};
  color: ${(props) => props.theme.memberMenuFontColor};
`;
export const ProjectTitle = styled.span`
  font-weight: 700;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  padding: 8px 10px 12px;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
`;
export const DeleteButton = styled.button`
  background: ${(props) =>
    props.theme.colour.primary.button.warning.background.default};
  border-radius: 3px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  color: ${(props) => props.theme.colour.primary.button.warning.text.default};
  padding: 0 10px;
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize.default};
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.theme.colour.primary.button.warning.background.hover};
  }
`;
