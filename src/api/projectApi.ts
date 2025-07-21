import { AddProjectResponse } from "../apiTypes/types";
import { ProjectType, UserType } from "../types";
import { apiCall } from "./apiClient";

export const createProjectKey = async (title: string) => {
  return await apiCall<string>("createProjectKey", {
    method: "GET",
    urlParams: new URLSearchParams({ title }),
  });
};

export const addProject = async (
  title: string,
  leadUser: UserType | undefined,
  projectKey: string,
  boardTitle: string
) => {
  return await apiCall<AddProjectResponse>("projects", {
    method: "POST",
    data: { title, leadUser, projectKey, boardTitle },
  });
};

export const getProjects = async (userId: string) => {
  return await apiCall<ProjectType[]>("projects", {
    method: "GET",
    urlParams: new URLSearchParams({ userId }),
  });
};

export const getSelectedProject = async (
  projectKey: string,
  userId: string
) => {
  return await apiCall<ProjectType>(`projects/${projectKey}`, {
    method: "GET",
    urlParams: new URLSearchParams({ userId }),
  });
};

export const updateProjectToFavourite = async (
  projectId: string,
  userId: string,
  isFavourite: boolean
) => {
  return await apiCall<ProjectType>("projects/favourite", {
    method: "PUT",
    urlParams: new URLSearchParams({
      projectId,
      userId,
      isFavourite: isFavourite.toString(),
    }),
  });
};

export const deleteProject = async (projectId: string, userId: string) => {
  return await apiCall("projects", {
    method: "DELETE",
    urlParams: new URLSearchParams({
      projectId,
      userId,
    }),
  });
};
