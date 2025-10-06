import { EditSprintRequest } from "../api-types/types";
import { IssueType, SprintType } from "../types";
import { apiCall } from "./api-client";

export const addSprint = async (
  userId: string,
  boardId: string,
  projectKey: string,
  token: string
) => {
  return await apiCall(`projects/${projectKey}/boards/${boardId}/sprints`, {
    method: "POST",
    data: { userId, boardId },
    token: token,
  });
};
export const getSprints = async (
  boardId: string,
  projectKey: string,
  token: string
) => {
  return await apiCall<SprintType[]>(
    `projects/${projectKey}/boards/${boardId}/sprints`,
    {
      method: "GET",
      urlParams: new URLSearchParams({ boardId }),
      token: token,
    }
  );
};
//DO IT
export const updateSprint = async (
  token: string,
  data: EditSprintRequest,
  projectKey: string,
  boardId: string
) => {
  return await apiCall<SprintType>(
    `projects/${projectKey}/boards/${boardId}/sprints`,
    {
      method: "PUT",
      data: data,
      token: token,
    }
  );
};

export const getSprintCard = async (
  projectKey: string,
  boardId: string,
  token: string
) => {
  return await apiCall<IssueType[]>(
    `projects/${projectKey}/boards/${boardId}`,
    {
      method: "GET",
      token: token,
    }
  );
};
export const getActiveSprint = async (
  projectKey: string,
  boardId: string,
  token: string
) => {
  return await apiCall<SprintType>(
    `projects/${projectKey}/boards/${boardId}/sprints/active`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      token: token,
    }
  );
};
