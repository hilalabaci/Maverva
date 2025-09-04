import { BoardType, ProjectType } from "../types";

export type ApiCallOptions = {
  urlParams?: URLSearchParams;
  data?: object;
  headers?: HeadersInit;
  token?: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
};

export type ApiResponse<T> = {
  status: number;
  ok?: boolean;
  data?: T;
  message?: string;
};
export type AddProjectRequest = {
  title: string;
  leadUser: string;
  projectKey: string;
  boardTitle?: string;
};
export type AddProjectResponse = {
  message: string;
  project: ProjectType;
};

export type AddBoardRequest = {
  title: string;
  userId: string;
};

export type AddBoardResponse = {
  message: string;
  newProject: BoardType;
};
export type GetUsersToBoardResponse = {
  boardId: string;
};
export type AddUserToBoardRequest = {
  projectId: string;
  boardIds: string[];
  email: string;
  userId: string;
};
export type AddIssueRequest = {
  userId?: string;
  content?: string;
  projectKey?: string;
  status: number;
  boardId?: string;
  sprintId?: string;
};
export type AddSprintRequest = {
  boardId: string;
  userId: string;
};
export type AddColumnRequest = {
  userId: string;
  title: string;
  boardId: string | BoardType | undefined;
};

export type EditSprintRequest = {
  boardId: string;
  sprintId: string | undefined;
  userId: string | undefined;
  isActiveSprint?: boolean;
  name?: string;
  sprintGoal?: string;
  startDate?: Date | null;
  endDate?: Date | null;
};
