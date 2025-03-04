import {
  AddBoardRequest,
  AddBoardResponse,
  AddUserToBoardRequest,
} from "../apiTypes/types";
import { BoardType } from "../types";
import { apiCall } from "./apiClient";

export const addBoard = async (data: AddBoardRequest) => {
  return await apiCall<AddBoardResponse>("board", {
    method: "POST",
    data: data,
  });
};
export const getBoards = async (projectKey: string, userId: string) => {
  return await apiCall<BoardType[]>("board", {
    method: "GET",
    urlParams: new URLSearchParams({ projectKey, userId }),
  });
};
export const addUsertoBoard = async (data: AddUserToBoardRequest) => {
  return await apiCall("project/boards/add-user", {
    method: "POST",
    data: data,
  });
};
export const getUserstoBoard = async (boardId: string, userId: string) => {
  return await apiCall("project/board/users", {
    method: "GET",
    urlParams: new URLSearchParams({ boardId, userId }),
  });
};
