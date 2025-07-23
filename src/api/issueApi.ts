import { AddIssueRequest } from "../apiTypes/types";
import { IssueType } from "../types";
import { apiCall } from "./apiClient";

export const addIssue = async (data: AddIssueRequest) => {
  return await apiCall(`issues`, {
    method: "POST",
    data: data,
  });
};
export const getIssues = async (boardId: string) => {
  return await apiCall<IssueType[]>("issues", {
    method: "GET",
    urlParams: new URLSearchParams({ boardId }),
  });
};
export const getBacklogIssues = async (projectKey: string, boardId: string) => {
  return await apiCall<IssueType[]>(
    `projects/${projectKey}/boards/${boardId}/backlog`,
    {
      method: "GET",
    }
  );
};
export const updateIssue = async (
  issueId: string,
  status?: number,
  newSprintId?: string,
  oldSprintId?: string,
  boardId?: string
) => {
  return await apiCall<IssueType>(`issues/${issueId}`, {
    method: "PUT",
    data: { issueId, status, newSprintId, oldSprintId, boardId },
  });
};
export const updateIssueSprintToBacklog = async (
  issueId: string,
  status?: number,
  oldSprintId?: string,
  boardId?: string
) => {
  return await apiCall<IssueType>(`issues/${issueId}`, {
    method: "PUT",
    data: { issueId, status, oldSprintId, boardId },
  });
};

export const updateIssueContent = async (
  issueId: string,
  newSummary?: string,
  newDescription?: string
) => {
  return await apiCall<IssueType>(`issues/${issueId}/content`, {
    method: "PUT",
    data: { issueId, newSummary, newDescription },
  });
};
export const deleteIssue = async (issueId: string, userId: string) => {
  return await apiCall(`issues/${issueId}`, {
    method: "DELETE",
    data: { issueId },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
