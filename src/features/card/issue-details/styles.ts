import styled from "styled-components";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colour.modal.background.default};
  border: ${({ theme }) => theme.colour.modal.border.default};
  box-shadow: inset 0px 0px 1px #091e4240, 0px 0px 1px #091e424f,
    0px 0px 1px #172b4d00, 0 0 1px #172b4d33;
  border-radius: 3px;
`;
export const IssueDetailsContainer = styled.div`
  display: flex;
  padding: 2pc 2pc 2pc 2pc;
`;
export const IssueEditContainer = styled.div`
  padding: 0pc 3pc 2pc 0pc;
  width: 350px;
`;
export const IssueInfoContainer = styled.div`
  box-sizing: border-box;
  border: ${({ theme }) => theme.colour.divider.border.default};
  width: 350px;
  padding: 1pc 1pc 1pc 1pc;
`;
export const ModalEditWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2pc 2pc 1pc 2pc;
`;
export const IssueInfo = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colour.text.link};
  font-weight: 500;
`;
export const ActionWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const ContentWrapper = styled.div``;
export const IssueWrapper = styled.div`
  padding: 1pc 0pc;
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
  display: flex;
  resize: none;
  outline: none;
  border: ${(props) => props.theme.colour.border.active};
  background-color: ${(props) => props.theme.colour.background.surface};
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.theme.colour.text.highlightColor};
  width: 100%;
  margin: 0;
  padding: 0;
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
  line-height: 34px;
  color: ${(props) => props.theme.colour.text.highlightColor};
  resize: none;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  padding: 5px 0;
  margin: 0;
`;
export const DescriptionWrapper = styled.div`
  padding: 1pc 0pc;
`;
export const DescriptionTitle = styled.h4`
  color: ${(props) => props.theme.colour.text.inverted};
  font-size: 16px;
  margin: 0;
  padding: 2px;
`;
export const DescriptionTextWrapper = styled.div`
  width: 100%;
  padding: 10px 2px;
`;
export const DescriptionText = styled.div`
  color: ${(props) => props.theme.colour.text.subtitle};
  border-radius: 3px;
  padding: 10px 2px;
  margin: 0;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colour.background.surface};
  }
`;
export const DescriptionTextEditer = styled.textarea`
  background-color: ${(props) => props.theme.colour.background.default};
  color: ${(props) => props.theme.colour.text.highlightColor};
  border: ${(props) => props.theme.colour.border.inverted};
  line-height: 1.5;
  resize: none;
  outline: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
  font-size: 14px;
  width: 100%;
  margin: 0;
  padding: 0;
`;
export const IssueDetailsInfoWrapper = styled.div``;
export const TitleforDetails = styled.h2`
  font-size: 16px;
  padding: 8px 12px;
`;
export const DataButtomWrapper = styled.div`
  padding-bottom: 4px;
`;
export const DataViewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  column-gap: 50px;
  padding: 8px 12px;
`;
export const LabelWrapper = styled.div`
  color: ${(props) => props.theme.colour.text.inverted};
  font-weight: 500;
  flex: 1;
  font-size: 14px;
`;
export const DataWrapper = styled.div`
  color: ${(props) => props.theme.colour.text.primary};
  flex: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;
