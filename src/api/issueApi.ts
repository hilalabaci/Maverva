import { AddIssueRequest } from "../apiTypes/types";
import { IssueType } from "../types";
import { apiCall } from "./apiClient";

export const addIssue = async (
  data: AddIssueRequest,
  projectKey: string,
  boardId: string,
  sprintId: string
) => {
  return await apiCall(
    `projects/${projectKey}/boards/${boardId}/sprints/${sprintId}/issues`,
    {
      method: "POST",
      data: data,
    }
  );
};
export const getIssues = async (boardId: string) => {
  return await apiCall<IssueType[]>("issue", {
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
  projectKey: string,
  issueId: string,
  status?: number,
  newSprintId?: string,
  currentSprintId?: string,
  boardId?: string
) => {
  return await apiCall<IssueType>(
    `projects/${projectKey}/boards/${boardId}/sprints/${currentSprintId}/issues/${issueId}`,
    {
      method: "PUT",
      data: { issueId, status, newSprintId, currentSprintId, boardId },
    }
  );
};
export const updateIssueSprintToBacklog = async (
  projectKey: string,
  issueId: string,
  status?: number,
  oldSprintId?: string,
  boardId?: string
) => {
  return await apiCall<IssueType>(
    `projects/${projectKey}/boards/${boardId}/sprints/${oldSprintId}/issues/${issueId}`,
    {
      method: "PUT",
      data: { issueId, status, oldSprintId, boardId },
    }
  );
};

export const updateIssueContent = async (
  cardId: string,
  newContent?: string
) => {
  return await apiCall<IssueType>("issue/content", {
    method: "PUT",
    data: { cardId, newContent },
  });
};
export const deleteIssue = async (
  projectKey: string,
  boardId: string,
  sprintId: string,
  issueId: string,
  userId: string
) => {
  return await apiCall(
    `projects/${projectKey}/boards/${boardId}/sprints/${sprintId}/issues/${issueId}`,
    {
      method: "DELETE",
      data: { userId, issueId, boardId, sprintId },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};
