import { useState } from "react";
import { IssueType, IssueStatus } from "../../types/user.types";
import { getStatusLabel } from "../../utils/getStatus";
import { useListIssues } from "../../hooks/api/useListIssues";
import { PRIORITIES } from "./priorities";
import {
  PageWrapper,
  ToolbarRow,
  ToolbarBtn,
  TableWrapper,
  Table,
  Thead,
  Th,
  ThCheck,
  Tbody,
  Tr,
  Td,
  TdCheck,
  TdSummary,
  SummaryText,
  KeyText,
  StatusBadge,
  TypeIcon,
  PriorityWrapper,
  UserWrapper,
  UserAvatar,
  SprintChip,
  LabelChip,
  DateText,
  CommentLink,
  EmptyState,
} from "./styled";

type ListContentProps = {
  projectKey: string;
  boardId: string;
};

type UserLike = { FullName?: string; ProfilePicture?: string } | null | undefined;

const FilterSvg = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1.5 3h13l-5 6v5l-3-1.5V9z" />
  </svg>
);

const GroupSvg = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
    <rect x="1" y="2" width="14" height="2.5" rx="1" />
    <rect x="1" y="6.5" width="10" height="2.5" rx="1" />
    <rect x="1" y="11" width="12" height="2.5" rx="1" />
  </svg>
);

const CommentSvg = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
    <path d="M2 1h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5l-4 4V2a1 1 0 0 1 1-1z" />
  </svg>
);

function formatDate(d?: Date | string | null): string | null {
  if (!d) return null;
  const date = new Date(d);
  if (isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function avatarSrc(user: NonNullable<UserLike>): string {
  const seed = encodeURIComponent(user.FullName || "");
  return (
    user.ProfilePicture ||
    `https://api.dicebear.com/9.x/initials/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&scale=100&radius=50&seed=${seed}`
  );
}

function UserCell({ user }: { user: UserLike }) {
  if (!user?.FullName && !user?.ProfilePicture) return <span style={{ color: "transparent" }}>—</span>;
  return (
    <UserWrapper>
      <UserAvatar
        src={avatarSrc(user!)}
        alt={user!.FullName || ""}
        onError={(e) => {
          e.currentTarget.src = `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(user!.FullName || "?")}`;
        }}
      />
      {user!.FullName || ""}
    </UserWrapper>
  );
}

type IssueRowProps = {
  issue: IssueType;
  selected: boolean;
  onToggle: (id: string) => void;
};

function IssueRow({ issue, selected, onToggle }: IssueRowProps) {
  const priority = (issue as any).Priority ?? 3;
  const pInfo = PRIORITIES[priority] ?? PRIORITIES[3];
  const sprintName = issue.Sprint?.Name ?? "";

  return (
    <Tr>
      <TdCheck>
        <input type="checkbox" checked={selected} onChange={() => onToggle(issue.Id)} />
      </TdCheck>
      <Td style={{ width: 22, padding: "6px 4px" }}>
        <TypeIcon $type="story">S</TypeIcon>
      </Td>
      <Td>
        <KeyText>{issue.Key || "—"}</KeyText>
      </Td>
      <TdSummary>
        <SummaryText>{issue.Summary}</SummaryText>
      </TdSummary>
      <Td>
        <StatusBadge $status={issue.Status}>
          {getStatusLabel(issue.Status as IssueStatus)}
        </StatusBadge>
      </Td>
      <Td>
        <CommentLink>
          <CommentSvg />
          Add comment
        </CommentLink>
      </Td>
      <Td>
        {sprintName ? (
          <SprintChip title={sprintName}>{sprintName}</SprintChip>
        ) : (
          <DateText>—</DateText>
        )}
      </Td>
      <Td>
        <UserCell user={issue.AssigneeUser} />
      </Td>
      <Td>
        <DateText>—</DateText>
      </Td>
      <Td>
        <PriorityWrapper>
          {pInfo.icon}
          <span style={{ color: pInfo.color, fontSize: 12 }}>{pInfo.label}</span>
        </PriorityWrapper>
      </Td>
      <Td>
        {issue.Labels?.length > 0 ? (
          issue.Labels.map((l, i) => <LabelChip key={i}>{(l as any).Name || "label"}</LabelChip>)
        ) : (
          <DateText>—</DateText>
        )}
      </Td>
      <Td>
        <DateText>{formatDate(issue.CreatedAt) || "—"}</DateText>
      </Td>
      <Td>
        <DateText>{formatDate((issue as any).UpdatedAt) || "—"}</DateText>
      </Td>
      <Td>
        <UserCell user={issue.ReporterUser || issue.createdBy} />
      </Td>
    </Tr>
  );
}

function ListContent({ projectKey, boardId }: ListContentProps) {
  const { issues, isLoading } = useListIssues(projectKey, boardId);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  const toggleRow = (id: string) =>
    setSelectedRows((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const toggleAll = () =>
    setSelectedRows(
      selectedRows.size === issues.length ? new Set() : new Set(issues.map((i) => i.Id))
    );

  const allChecked = issues.length > 0 && selectedRows.size === issues.length;
  const indeterminate = selectedRows.size > 0 && selectedRows.size < issues.length;

  return (
    <PageWrapper>
      <ToolbarRow>
        <ToolbarBtn>
          <FilterSvg />
          Filter
        </ToolbarBtn>
        <ToolbarBtn>
          <GroupSvg />
          Group: None
        </ToolbarBtn>
      </ToolbarRow>

      <TableWrapper>
        {isLoading ? (
          <EmptyState>Loading…</EmptyState>
        ) : issues.length === 0 ? (
          <EmptyState>No issues found.</EmptyState>
        ) : (
          <Table>
            <Thead>
              <tr>
                <ThCheck>
                  <input
                    type="checkbox"
                    checked={allChecked}
                    ref={(el) => { if (el) el.indeterminate = indeterminate; }}
                    onChange={toggleAll}
                    style={{ cursor: "pointer" }}
                  />
                </ThCheck>
                <Th style={{ width: 22 }} />
                <Th style={{ width: 80 }}>Key</Th>
                <Th>Summary</Th>
                <Th style={{ width: 120 }}>Status</Th>
                <Th style={{ width: 110 }}>Comments</Th>
                <Th style={{ width: 130 }}>Sprint</Th>
                <Th style={{ width: 155 }}>Assignee</Th>
                <Th style={{ width: 95 }}>Due date</Th>
                <Th style={{ width: 100 }}>Priority</Th>
                <Th style={{ width: 100 }}>Labels</Th>
                <Th style={{ width: 98 }}>Created</Th>
                <Th style={{ width: 98 }}>Updated</Th>
                <Th style={{ width: 155 }}>Reporter</Th>
              </tr>
            </Thead>
            <Tbody>
              {issues.map((issue) => (
                <IssueRow
                  key={issue.Id}
                  issue={issue}
                  selected={selectedRows.has(issue.Id)}
                  onToggle={toggleRow}
                />
              ))}
            </Tbody>
          </Table>
        )}
      </TableWrapper>
    </PageWrapper>
  );
}

export default ListContent;
