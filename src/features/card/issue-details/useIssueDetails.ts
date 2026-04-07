import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { IssueStatus, IssueType, UserType } from "../../../types/user.types";
import { updateAssignUser, updateIssue } from "../../../api/issue-api";
import { useApplicationContext } from "../../../contexts/ApplicationContext";
import { STATUS_OPTIONS } from "../../../constants/status-options";

export function useIssueDetails(
  issue: IssueType,
  onUpdateAssignee: (newAssignee: UserType) => void
) {
  const { token, user } = useUserContext();
  const { setSelectedIssue, projectUsers } = useApplicationContext();
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [tempSummary, setTempSummary] = useState(issue.Summary);
  const [tempDescription, setTempDescription] = useState(
    issue.Description || ""
  );
  const [editSummaryDisplay, setEditSummaryDisplay] = useState(false);
  const [editDescriptionDisplay, setEditDescriptionDisplay] = useState(false);

  async function handleStatusChange(status: IssueStatus) {
    if (!token) return;
    await updateIssue(token, issue.Id, status);
  }

  async function handleAssigneeChange(assignedToUser: UserType) {
    if (!token || !user) return;
    await updateAssignUser(token, issue.Id, assignedToUser.Id, user?.Id);
    setSelectedIssue((prev) => {
      if (!prev) return prev;
      return { ...prev, AssigneeUser: user };
    });
  }
  const statusOptions = STATUS_OPTIONS;

  useEffect(() => {
    setTempSummary(issue.Summary);
    setTempDescription(issue.Description || "");
  }, [issue.Summary, issue.Description]);

  return {
    tempSummary,
    setTempSummary,
    tempDescription,
    setTempDescription,
    usersByProject: projectUsers,
    handleStatusChange,
    handleAssigneeChange,
    statusOptions,
    editSummaryDisplay,
    setEditDescriptionDisplay,
    editDescriptionDisplay,
    setEditSummaryDisplay,
    selectedUser,
    setSelectedUser,
  };
}
