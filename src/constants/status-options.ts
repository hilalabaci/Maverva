import { IssueStatus } from "../types/user.types";
import { getStatusLabel } from "../utils/getStatus";

export const STATUS_OPTIONS = [
  { label: getStatusLabel(IssueStatus.ToDo), value: IssueStatus.ToDo },
  {
    label: getStatusLabel(IssueStatus.InProgress),
    value: IssueStatus.InProgress,
  },
  { label: getStatusLabel(IssueStatus.Done), value: IssueStatus.Done },
];
