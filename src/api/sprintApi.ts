import { EditSprintRequest } from "../apiTypes/types";
import { IssueType, SprintType } from "../types";
import { apiCall } from "./apiClient";

export const addSprint = async (
  userId: string,
  boardId: string,
  projectKey: string
) => {
  return await apiCall(`projects/${projectKey}/boards/${boardId}/sprints`, {
    method: "POST",
    data: { userId, boardId },
  });
};
export const getSprints = async (boardId: string, projectKey: string) => {
  return await apiCall<SprintType[]>(
    `projects/${projectKey}/boards/${boardId}/sprints`,
    {
      method: "GET",
      urlParams: new URLSearchParams({ boardId }),
    }
  );
};
//DO IT
export const updateSprint = async (
  data: EditSprintRequest,
  projectKey: string,
  boardId: string
) => {
  return await apiCall<SprintType>(
    `projects/${projectKey}/boards/${boardId}/sprints`,
    {
      method: "PUT",
      data: data,
    }
  );
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
  return await apiCall<SprintType>(
    `projects/${projectKey}/boards/${boardId}/sprints/active`,
    {
      method: "GET",
    }
  );
};

