import {
  AddBoardRequest,
  AddBoardResponse,
  AddUserToBoardRequest,
} from "../api-types/types";
import { BoardType } from "../types";
import { apiCall } from "./api-client";

export const addBoard = async (
  data: AddBoardRequest,
  projectKey: string,
  token: string
) => {
  return await apiCall<AddBoardResponse>(`projects/${projectKey}/boards`, {
    method: "POST",
    data: data,
    token: token,
  });
};
export const getBoards = async (
  projectKey: string,
  userId: string,
  token: string
) => {
  return await apiCall<BoardType[]>(`projects/${projectKey}/boards`, {
    method: "GET",
    urlParams: new URLSearchParams({ projectKey, userId }),
    token: token,
  });
};
export const addUsertoBoard = async (
  data: AddUserToBoardRequest,
  projectKey: string,
  boardId: string,
  token: string
) => {
  return await apiCall(`projects/${projectKey}/boards/${boardId}/add-user`, {
    method: "POST",
    data: data,
    token: token,
  });
};
export const getUserstoBoard = async (
  projectKey: string,
  boardId: string,
  userId: string,
  token: string
) => {
  return await apiCall(`projects/${projectKey}/boards/${boardId}/users`, {
    method: "GET",
    urlParams: new URLSearchParams({ projectKey, boardId, userId }),
    token: token,
  });
};
