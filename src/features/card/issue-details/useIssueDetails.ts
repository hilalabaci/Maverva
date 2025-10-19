import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { IssueStatus, IssueType, UserType } from "../../../types/user.types";
import { getUsersByProject } from "../../../api/project-api";
import { updateAssignUser, updateIssue } from "../../../api/issue-api";
import { getStatusLabel } from "../../../utils/getStatus";
import { useApplicationContext } from "../../../contexts/ApplicationContext";

export function useIssueDetails(
  issue: IssueType,
  onUpdateAssignee: (newAssignee: UserType) => void
) {
  const { token, user } = useUserContext();
  const { selectedIssue, setSelectedIssue } = useApplicationContext();
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [tempSummary, setTempSummary] = useState(issue.Summary);
  const [tempDescription, setTempDescription] = useState(
    issue.Description || ""
  );
  const [usersByProject, setUsersByProject] = useState<UserType[]>([]);
  const [editSummaryDisplay, setEditSummaryDisplay] = useState(false);
  const [editDescriptionDisplay, setEditDescriptionDisplay] = useState(false);

  useEffect(() => {
    if (token && issue.ProjectId) {
      getUsersByProject(issue.ProjectId, token).then((res) => {
        if (res.ok && res.data) setUsersByProject(res.data);
      });
    }
  }, [issue.ProjectId]);

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
  const statusOptions = [
    { label: getStatusLabel(IssueStatus.ToDo), value: IssueStatus.ToDo },
    {
      label: getStatusLabel(IssueStatus.InProgress),
      value: IssueStatus.InProgress,
    },
    { label: getStatusLabel(IssueStatus.Done), value: IssueStatus.Done },
  ];
  async function updateCard(id: string, status: number) {
    if (!token) return;
    const response = await updateIssue(token, id, status);
    if (response.ok && response.data) {
      setSelectedIssue((prev) => {
        if (!prev) return prev;
        if (!response.data) return prev;
        return { ...prev, Status: response.data.Status };
      });
      // onUpdateCardStatus(response.data.Id, response.data.Status);
    } else {
      console.error("Failed to update card:", response);
    }
  }
  async function getUsers(projectId: string) {
    if (!token) return;
    const response = await getUsersByProject(projectId, token);
    if (response.ok && response.data) {
      setUsersByProject(response.data);
    } else {
      console.error("Failed to get users by project:", response);
    }
  }
  async function updateAssignee(
    issueId: string,
    userId: string,
    onUpdateAssignee: (user: UserType) => void
  ) {
    if (!token) return;
    console.log("Updating assignee to userId:", userId);
    const response = await updateIssue(
      token,
      issueId,
      undefined,
      undefined,
      undefined,
      undefined,
      userId
    );
    if (response.ok && response.data) {
      if (!response.data.AssigneeUser) return;
      onUpdateAssignee(response.data.AssigneeUser);
      setSelectedIssue((prev) => {
        if (!prev) return prev;
        return { ...prev, AssigneeUser: response.data?.AssigneeUser };
      });
      console.log("Assignee updated to:", response.data.AssigneeUser);
    } else {
      console.error("Failed to update card:", response);
    }
  }

  useEffect(() => {
    setTempSummary(issue.Summary);
    setTempDescription(issue.Description || "");
  }, [issue.Summary, issue.Description]);

  return {
    token,
    tempSummary,
    setTempSummary,
    tempDescription,
    setTempDescription,
    usersByProject,
    handleStatusChange,
    handleAssigneeChange,
    updateCard,
    getUsers,
    updateAssignee,
    statusOptions,
    editSummaryDisplay,
    setEditDescriptionDisplay,
    editDescriptionDisplay,
    setEditSummaryDisplay,
    selectedUser,
    setSelectedUser,
  };
}
