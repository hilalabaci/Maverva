import { IssueStatus } from "../types";

export const getStatusLabel = (value: IssueStatus) => {
  switch (value) {
    case IssueStatus.ToDo:
      return "To Do";

    case IssueStatus.InProgress:
      return "In Progress";

    case IssueStatus.Done:
      return "Done";

    default:
      return "";
  }
};
