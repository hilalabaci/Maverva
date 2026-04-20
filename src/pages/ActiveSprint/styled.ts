import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { device } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 24px 24px;
  overflow: auto;
  background: var(--app-bg);
  flex: 1;
  min-height: 0;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: start;
  flex: 1;
  min-height: 0;
`;

export const EditIcon = styled(MoreHorizRoundedIcon)`
  opacity: 0;
  display: flex;
  justify-content: flex-end;
  padding: 3px;
  border-radius: 4px;
  color: var(--app-ink-3);
  &:hover {
    background: var(--app-bg-2);
    color: var(--app-ink);
  }
  @media ${device.mobile} {
    font-size: 16px !important;
    opacity: 1;
  }
`;
export const Wrapper = styled.div<{ $highlight?: boolean }>`
  display: flex;
  flex-direction: column;
  background: var(--app-panel);
  border: 1px solid
    ${({ $highlight }) =>
      $highlight
        ? 'color-mix(in srgb, var(--app-accent) 35%, var(--app-line))'
        : 'var(--app-line)'};
  box-shadow: ${({ $highlight }) =>
    $highlight ? '0 0 0 3px var(--app-accent-soft)' : 'none'};
  border-radius: 8px;
  width: 280px;
  flex-shrink: 0;
  min-height: 0;
  max-height: calc(100vh - 220px);
  overflow: hidden;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 14px;
  border-bottom: 1px solid var(--app-line);
  background: var(--app-panel);
  gap: 10px;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  color: var(--app-ink-3);
  &:hover ${EditIcon} {
    opacity: 1;
  }
`;
export const TitleTotalCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex: 1;
`;
export const Title = styled.h5`
  font-family: 'Geist', -apple-system, sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.005em;
  text-transform: none;
  color: var(--app-ink);
  margin: 0;
  @media ${device.mobile} {
    font-size: 13px;
  }
`;
export const ColumnDot = styled.span<{ $status?: number }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ $status }) => {
    switch ($status) {
      case 1: return 'var(--app-ink-3)';   /* to do */
      case 2: return 'var(--app-info)';     /* in progress */
      case 3: return 'var(--app-warn)';     /* in review */
      case 4: return 'var(--app-ok)';       /* done */
      default: return 'var(--app-ink-4)';
    }
  }};
`;
export const ColumnAddButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  color: var(--app-ink-3);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  padding: 0 2px;
  display: flex;
  align-items: center;
  &:hover { color: var(--app-ink); }
`;
export const AddColumnContainer = styled.div`
  flex-shrink: 0;
  min-width: 200px;
`;
export const AddColumnWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  background: var(--app-panel);
  border: 1px solid var(--app-line);
  border-radius: 8px;
`;
export const AddColumnTitle = styled.input`
  border: 1px solid var(--app-line);
  outline: none;
  min-width: 200px;
  padding: 7px 10px;
  border-radius: 5px;
  background: var(--app-card);
  color: var(--app-ink);
  font-size: 13px;
  font-family: inherit;
  text-align: left;
  &::placeholder {
    font-size: 13px;
    color: var(--app-ink-3);
    text-align: left;
  }
`;
export const IconWrapper = styled.button`
  background: var(--app-bg-2);
  border-radius: 5px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  padding: 8px 12px;
  width: auto;
  outline: none;
  border: 1px dashed var(--app-line-2);
  color: var(--app-ink-3);
  font-size: 12.5px;
  gap: 6px;
  min-width: 200px;
  &:hover {
    color: var(--app-ink);
    border-color: var(--app-ink-3);
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
  border: 1px solid var(--app-line);
  background: var(--app-card);
  border-radius: 5px;
  color: var(--app-ink-2);
  cursor: pointer;
  padding: 4px 8px;
  &:hover {
    background: var(--app-bg-2);
    color: var(--app-ink);
  }
`;
export const IconClose = styled(CloseIcon)`
  font-size: 22px !important;
`;
