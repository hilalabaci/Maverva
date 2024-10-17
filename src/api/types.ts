import { BoardType } from "../types";

export type ApiCallOptions = {
  urlParams?: URLSearchParams;
  data?: object;
  method: "GET" | "POST" | "PUT";
};

export type ApiResponse<T> = {
  status: number;
  ok: boolean;
  data?: T;
};

export type AddBoardRequest = {
  title: string;
  userId: string;
  projectKeys: string[];
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
export type AddCardRequest = {
  userId: string;
  content: string;
  projectKey: string;
  status: number;
  boardId: string;
};
