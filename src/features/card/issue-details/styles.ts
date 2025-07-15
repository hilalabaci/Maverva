import styled from "styled-components";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colour.modal.background.default};
  border: ${({ theme }) => theme.colour.modal.border.default};
  box-shadow: inset 0px 0px 1px #091e4240, 0px 0px 1px #091e424f,
    0px 0px 1px #172b4d00, 0 0 1px #172b4d33;
  width: 500px;
  height: 500px;
  border-radius: 3px;
`;
export const IssueEditWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2pc 2pc 1pc 2pc;
`;
export const IssueInfo = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colour.text.subtitle};
`;
export const ActionWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const ContentWrapper = styled.div``;
export const IssueWrapper = styled.div`
  padding: 0pc 2pc 1pc 2pc;
`;
export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
  width: 100%;
`;
export const ButtomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;
export const EditTextArea = styled.textarea`
  resize: none;
  outline: none;
  border-radius: 3px;
  border: ${(props) => props.theme.colour.border.active};
  background-color: ${(props) => props.theme.colour.background.surface};
  min-width: 97%;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 5px;
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  color: ${(props) => props.theme.colour.text.highlightColor};
  display: flex;
`;
export const IssueEdit = styled.div`
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
export const EditContentIcon = styled(ModeEditIcon)`
  opacity: 0;
  padding: 2px;
`;
export const IssueTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  color: ${(props) => props.theme.colour.text.highlightColor};
  resize: none;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  padding: 5px;
  margin: 0;
`;
export const DescriptionWrapper = styled.div`
  padding: 0pc 2pc 1pc 2pc;
`;
export const DescriptionTitle = styled.h4``;
export const DescriptionTextWrapper = styled.div`
  border: ${(props) => props.theme.colour.border.default};
  border-radius: 3px;
  width: 100%;
`;
export const DescriptionText = styled.textarea`
  line-height: 1.5;
  border: none;
  resize: none;
  outline: none;
  padding:5px 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
`;
