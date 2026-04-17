import styled, { css } from "styled-components";

/* ─────────────── Page shell ─────────────── */
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${(p) => p.theme.colour.background.default};
  color: ${(p) => p.theme.colour.text.primary};
`;

/* ─────────────── Toolbar ─────────────── */
export const ToolbarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-bottom: 1px solid ${(p) => p.theme.colour.divider.background.default};
  flex-shrink: 0;
`;

export const ToolbarBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 3px;
  border: none;
  background: transparent;
  color: ${(p) => p.theme.colour.text.subtitle};
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  line-height: 1.6;
  transition: background 0.1s;
  &:hover {
    background: ${(p) => p.theme.colour.icon.background.hover};
    color: ${(p) => p.theme.colour.text.primary};
  }
  svg {
    flex-shrink: 0;
  }
`;

/* ─────────────── Table wrapper ─────────────── */
export const TableWrapper = styled.div`
  flex: 1;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.colour.divider.background.default};
    border-radius: 4px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  min-width: 1200px;
  border: 1px solid ${(p) => p.theme.colour.divider.background.default};
`;

export const Thead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 2;
  background: ${(p) => p.theme.colour.background.surface};
`;

const cellBase = css`
  padding: 6px 8px;
  text-align: left;
  vertical-align: middle;
  white-space: nowrap;
  border: 1px solid ${(p: any) => p.theme.colour.divider.background.default};
`;

export const Th = styled.th`
  ${cellBase}
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colour.text.subtitle};
  border-bottom: 2px solid ${(p) => p.theme.colour.divider.background.default};
  user-select: none;
  background: ${(p) => p.theme.colour.background.surface};
`;

export const ThCheck = styled.th`
  ${cellBase}
  width: 36px;
  padding: 6px 4px 6px 14px;
  border-bottom: 2px solid ${(p) => p.theme.colour.divider.background.default};
  background: ${(p) => p.theme.colour.background.surface};
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  &:hover td, &:hover th {
    background: ${(p) => p.theme.colour.background.surface};
  }
  &:hover .check-cell {
    opacity: 1;
  }
`;

export const Td = styled.td`
  ${cellBase}
  color: ${(p) => p.theme.colour.text.primary};
`;

export const TdCheck = styled.td.attrs({ className: "check-cell" })`
  ${cellBase}
  width: 36px;
  padding: 6px 4px 6px 14px;
  opacity: 0;
  transition: opacity 0.15s;
  input {
    cursor: pointer;
    accent-color: ${(p) => p.theme.colour.text.link};
  }
`;

export const TdSummary = styled(Td)`
  white-space: normal;
  max-width: 280px;
  min-width: 140px;
  word-break: break-word;
`;

export const SummaryText = styled.span`
  cursor: pointer;
  line-height: 1.4;
  &:hover {
    color: ${(p) => p.theme.colour.text.link};
    text-decoration: underline;
  }
`;

export const KeyText = styled.span`
  color: ${(p) => p.theme.colour.text.link};
  font-weight: 500;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
`;

/* ─────────────── Status badge ─────────────── */
type StatusBadgeProps = { $status: number };

export const StatusBadge = styled.span<StatusBadgeProps>`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: ${({ $status, theme }) => {
    switch ($status) {
      case 2:
        return theme.colour.progressColours.inProgress.default.background;
      case 99:
        return theme.colour.progressColours.done.default.background;
      default:
        return theme.colour.progressColours.toDo.default.background;
    }
  }};
  color: ${({ $status, theme }) => {
    switch ($status) {
      case 2:
        return theme.colour.progressColours.inProgress.default.text;
      case 99:
        return theme.colour.progressColours.done.default.text;
      default:
        return theme.colour.progressColours.toDo.default.text;
    }
  }};
`;

/* ─────────────── Type icon ─────────────── */
type TypeIconProps = { $type?: string };
export const TypeIcon = styled.span<TypeIconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  min-width: 16px;
  border-radius: 2px;
  font-size: 9px;
  font-weight: 800;
  color: #fff;
  background: ${({ $type }) =>
    $type === "bug"
      ? "#e2483d"
      : $type === "epic"
      ? "#9f8fef"
      : $type === "subtask"
      ? "#4bade8"
      : "#4bade8"};
`;

/* ─────────────── Priority ─────────────── */
export const PriorityWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
`;

/* ─────────────── Assignee / Reporter ─────────────── */
export const UserWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  white-space: nowrap;
  color: ${(p) => p.theme.colour.text.primary};
`;

export const UserAvatar = styled.img`
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

/* ─────────────── Sprint chip ─────────────── */
export const SprintChip = styled.span`
  display: inline-block;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 500;
  background: ${(p) => p.theme.colour.background.surface};
  color: ${(p) => p.theme.colour.text.subtitle};
  border: 1px solid ${(p) => p.theme.colour.divider.background.default};
`;

/* ─────────────── Label chip ─────────────── */
export const LabelChip = styled.span`
  display: inline-block;
  padding: 1px 6px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 500;
  margin-right: 3px;
  background: ${(p) => p.theme.colour.background.surface};
  color: ${(p) => p.theme.colour.text.subtitle};
  border: 1px solid ${(p) => p.theme.colour.divider.background.default};
`;

/* ─────────────── Date ─────────────── */
export const DateText = styled.span`
  font-size: 12px;
  color: ${(p) => p.theme.colour.text.subtitle};
`;

/* ─────────────── Comment link ─────────────── */
export const CommentLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${(p) => p.theme.colour.text.subtitle};
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: ${(p) => p.theme.colour.text.link};
  }
`;

/* ─────────────── Empty / loading ─────────────── */
export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  color: ${(p) => p.theme.colour.text.subtitle};
  font-size: 14px;
`;
