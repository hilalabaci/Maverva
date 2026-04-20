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
  padding: 2px;
  border-radius: 3px;
  color: var(--app-ink-3);
  flex-shrink: 0;
  &:hover {
    background: var(--app-bg-2);
    color: var(--app-ink);
  }
  @media ${device.mobile} {
    font-size: 16px !important;
    opacity: 1;
  }
`;

export const Container = styled.button<{ $isDragging?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 11px 12px;
  border-radius: 6px;
  border: 1px solid var(--app-line);
  background: var(--app-card);
  text-align: left;
  width: 100%;
  opacity: ${(props) => (props.$isDragging ? 0.4 : 1)};
  cursor: grab;
  transition: border-color 0.15s;
  &:hover {
    border-color: var(--app-line-2);
  }
  &:hover ${EditIcon} {
    opacity: 1;
  }
  &:hover ${EditContentIcon} {
    opacity: 1;
  }
  @media ${device.mobile} {
    padding: 10px;
  }
`;
export const TopMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 10.5px;
  color: var(--app-ink-3);
`;

export const KindBadge = styled.span<{ $kind?: 'story' | 'task' | 'bug' | 'chore' }>`
  width: 14px;
  height: 14px;
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  color: #fff;
  font-weight: 600;
  background: ${({ $kind }) => {
    switch ($kind) {
      case 'bug':
        return 'var(--app-danger)';
      case 'story':
        return 'var(--app-ok)';
      case 'chore':
        return 'var(--app-ink-3)';
      default:
        return 'var(--app-info)';
    }
  }};
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
`;
export const NoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 100%;
`;
export const Note = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13.5px;
  line-height: 1.35;
  color: var(--app-ink);
  letter-spacing: -0.005em;
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
  border-radius: 5px;
  border: 1px solid var(--app-line);
  background: var(--app-card);
  color: var(--app-ink);
  min-width: 97%;
  font-size: 13px;
  font-family: inherit;
  padding: 6px 8px;
`;
export const DoneButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background: var(--app-accent);
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  &:hover {
    opacity: 0.9;
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
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 10.5px;
  color: var(--app-ink-3);
  gap: 8px;
`;

export const PriorityBadge = styled.span<{ $tone?: 'urgent' | 'high' | 'medium' | 'low' }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({ $tone }) => {
    switch ($tone) {
      case 'urgent':
        return 'var(--app-danger)';
      case 'high':
        return 'var(--app-warn)';
      case 'medium':
        return '#B45309';
      default:
        return 'var(--app-ink-3)';
    }
  }};
`;
export const CardKeyWrapper = styled.div`
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 10.5px;
  font-weight: 500;
  color: var(--app-ink-3);
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
  gap: 4px;
`;
