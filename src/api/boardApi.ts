import {
  AddBoardRequest,
  AddBoardResponse,
  AddUserToBoardRequest,
} from "../apiTypes/types";
import { BoardType } from "../types";
import { apiCall } from "./apiClient";

export const addBoard = async (data: AddBoardRequest) => {
  return await apiCall<AddBoardResponse>("/board", {
    method: "POST",
    data: data,
  });
};
export const getBoards = async (projectKey: string, userId: string) => {
  return await apiCall<BoardType[]>(`projects/${projectKey}/boards`, {
    method: "GET",
    urlParams: new URLSearchParams({ projectKey, userId }),
  });
};
export const addUsertoBoard = async (
  data: AddUserToBoardRequest,
  projectKey: string,
  boardId: string
) => {
  return await apiCall(`projects/${projectKey}/boards/${boardId}/add-user`, {
    method: "POST",
    data: data,
  });
};
export const getUserstoBoard = async (
  projectKey: string,
  boardId: string,
  userId: string
) => {
  return await apiCall(`projects/${projectKey}/boards/${boardId}/users`, {
    method: "GET",
    urlParams: new URLSearchParams({ projectKey, boardId, userId }),
  });
};
