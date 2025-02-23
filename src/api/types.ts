import { BoardType, ProjectType, UserType } from "../types";

export type ApiCallOptions = {
  urlParams?: URLSearchParams;
  data?: object;
  headers?: HeadersInit;
  method: "GET" | "POST" | "PUT" | "DELETE";
};

export type ApiResponse<T> = {
  status: number;
  ok: boolean;
  data?: T;
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
export type AddUserToBoardRequest = {
  projectId: string;
  boardIds: string[];
  email: string;
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
  name: string;
  sprintGoal: string;
  startDate: Date | null;
  endDate: Date | null;
  boardId: string | BoardType | undefined;
  userId: string | UserType | undefined;
};
export type AddColumnRequest = {
  title: string;
  boardId: string | BoardType | undefined;
};
