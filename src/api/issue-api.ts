import { AddIssueRequest } from "../types/auth.types";
import { IssueType } from "../types/user.types";
import { apiCall } from "./api-client";

export const addIssue = async (data: AddIssueRequest, token: string) => {
  return await apiCall(`issues`, {
    method: "POST",
    data: data,
    token: token,
  });
};
export const getIssues = async (boardId: string, token: string) => {
  return await apiCall<IssueType[]>("issues", {
    method: "GET",
    urlParams: new URLSearchParams({ boardId }),
    token: token,
  });
};
export const getBacklogIssues = async (
  projectKey: string,
  boardId: string,
  token: string
) => {
  return await apiCall<IssueType[]>(
    `projects/${projectKey}/boards/${boardId}/backlog`,
    {
      method: "GET",
      token: token,
    }
  );
};
export const updateIssue = async (
  token: string,
  issueId: string,
  status?: number,
  newSprintId?: string,
  oldSprintId?: string,
  boardId?: string,
  assignUserId?: string
) => {
  return await apiCall<IssueType>(`issues/${issueId}`, {
    method: "PUT",
    data: { issueId, status, newSprintId, oldSprintId, boardId, assignUserId },
    token: token,
  });
};
export const updateIssueSprintToBacklog = async (
  token: string,
  issueId: string,
  status?: number,
  oldSprintId?: string,
  boardId?: string
) => {
  return await apiCall<IssueType>(`issues/${issueId}`, {
    method: "PUT",
    data: { issueId, status, oldSprintId, boardId },
    token: token,
  });
};

export const updateIssueContent = async (
  token: string,
  issueId: string,
  newSummary?: string,
  newDescription?: string
) => {
  return await apiCall<IssueType>(`issues/${issueId}/content`, {
    method: "PUT",
    data: { issueId, newSummary, newDescription },
    token: token,
  });
};

export const updateAssignUser = async (
  token: string,
  issueId: string,
  assignedToUserId: string,
  assignedByUserId: string
) => {
  return await apiCall<IssueType>(`issues/${issueId}/assignee`, {
    method: "PUT",
    data: { issueId, assignedToUserId, assignedByUserId },
    token: token,
  });
};

export const deleteIssue = async (
  issueId: string,
  userId: string,
  token: string
) => {
  return await apiCall(`issues/${issueId}`, {
    method: "DELETE",
    data: { issueId, userId },
    token: token,
  });
};
