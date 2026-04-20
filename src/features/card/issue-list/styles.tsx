import styled, { createGlobalStyle } from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { device } from "../../../styles/breakpoints";
export const GlobalStyle = createGlobalStyle`
.addIcon-button{
  margin-right: 10px;
}

`;
export const AddCardButton = styled.button`
  background: var(--app-bg-2);
  color: var(--app-ink-3);
  width: 100%;
  height: 32px;
  outline: none;
  border: 1px dashed var(--app-line-2);
  border-radius: 5px;
  font-size: 12.5px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  cursor: pointer;
  opacity: 0;
  &:hover {
    color: var(--app-ink);
    border-color: var(--app-ink-3);
  }
  @media ${device.mobile} {
    width: fit-content;
    height: fit-content;
    font-size: 10px;
    padding: 5px;
    opacity: 1;
  }
`;
export const IconAdd = styled(AddIcon)`
  font-size: 18px !important;
  padding-right: 10px;
 @media ${device.mobile} {
    font-size: 10px !important;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  overflow-y: auto;
  flex: 1;
  gap: 6px;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb { background: var(--app-line-2); border-radius: 3px; }
  &:hover ${AddCardButton} {
    opacity: 1;
    color: var(--app-ink);
  }
  @media ${device.mobile} {
    border-radius: 3px;
    padding: 8px;
  }
`;

export const IssueWrapper = styled.div`
  /* overflow: scroll; */
  display: flex;
  flex-direction: column;
  gap: 4px;
  -webkit-overflow-scrolling: touch;
  border: none;
  outline: none;
 @media ${device.mobile} {
    margin-top: 10px;
  }
`;
export const AddCardButtonWrapper = styled.div`
  padding: 10px 0;
`;
