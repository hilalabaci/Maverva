import { AddSprintRequest } from "../apiTypes/types";
import { IssueType, SprintType } from "../types";
import { apiCall } from "./apiClient";

export const addSprint = async (data: AddSprintRequest) => {
  return await apiCall("sprint", {
    method: "POST",
    data: data,
  });
};
export const getSprints = async (boardId: string) => {
  return await apiCall<SprintType[]>("sprint", {
    method: "GET",
    urlParams: new URLSearchParams({ boardId }),
  });
};

export const updateSprint = async (
  sprintId: string,
  active: boolean,
  boardId: string
) => {
  return await apiCall<SprintType>("sprint", {
    method: "PUT",
    data: { sprintId, active, boardId },
  });
};

export const getSprintCard = async (projectKey: string, boardId: string) => {
  return await apiCall<IssueType[]>(
    `projects/${projectKey}/boards/${boardId}`,
    {
      method: "GET",
    }
  );
};
export const getActiveSprint = async (projectKey: string, boardId: string) => {
  return await apiCall<SprintType>(`projects/${projectKey}/boards/${boardId}`, {
    method: "GET",
  });
};
