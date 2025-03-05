import { AddIssueRequest } from "../apiTypes/types";
import { IssueType } from "../types";
import { apiCall } from "./apiClient";

export const addIssue = async (data: AddIssueRequest) => {
  return await apiCall("issue", {
    method: "POST",
    data: data,
  });
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
  cardId: string,
  status?: number,
  newSprintId?: string,
  oldSprintId?: string,
  boardId?: string
) => {
  return await apiCall<IssueType>("issue", {
    method: "PUT",
    data: { cardId, status, newSprintId, oldSprintId, boardId },
  });
};
export const updateIssueSprintToBacklog = async (
  cardId: string,
  status?: number,
  oldSprintId?: string,
  boardId?: string
) => {
  return await apiCall<IssueType>("issue", {
    method: "PUT",
    data: { cardId, status, oldSprintId, boardId },
  });
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
export const deleteIssue = async (issueId: string,userId:string) => {
  return await apiCall("issue", {
    method: "DELETE",
    urlParams: new URLSearchParams({ id: issueId }),
    data: {userId}
  });
};
