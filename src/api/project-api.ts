import { AddProjectResponse } from "../api-types/types";
import { ProjectType, UserType } from "../types";
import { apiCall } from "./api-client";

export const createProjectKey = async (title: string, token: string) => {
  return await apiCall<string>("createProjectKey", {
    method: "GET",
    urlParams: new URLSearchParams({ title }),
    token: token,
  });
};

export const addProject = async (
  title: string,
  leadUser: UserType | undefined,
  projectKey: string,
  boardTitle: string,
  token: string
) => {
  return await apiCall<AddProjectResponse>("projects", {
    method: "POST",
    data: { title, leadUser, projectKey, boardTitle },
    token: token,
  });
};

export const getProjects = async (userId: string, token: string) => {
  return await apiCall<ProjectType[]>("projects", {
    method: "GET",
    urlParams: new URLSearchParams({ userId }),
    token: token,
  });
};

export const getSelectedProject = async (
  projectKey: string,
  userId: string,
  token: string
) => {
  return await apiCall<ProjectType>(`projects/${projectKey}`, {
    method: "GET",
    urlParams: new URLSearchParams({ userId }),
    token: token,
  });
};

export const updateProjectToFavourite = async (
  projectId: string,
  userId: string,
  isFavourite: boolean,
  token: string
) => {
  return await apiCall<ProjectType>("projects/favourite", {
    method: "PUT",
    urlParams: new URLSearchParams({
      projectId,
      userId,
      isFavourite: isFavourite.toString(),
    }),
    token: token,
  });
};

export const deleteProject = async (
  projectId: string,
  userId: string,
  token: string
) => {
  return await apiCall("projects", {
    method: "DELETE",
    urlParams: new URLSearchParams({
      projectId,
      userId,
    }),
    token: token,
  });
};
