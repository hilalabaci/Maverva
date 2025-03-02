import { AddColumnRequest } from "../apiTypes/types";
import { ColumnType } from "../types";
import { apiCall } from "./apiClient";

export const getColumns = async (boardId: string) => {
  return await apiCall<ColumnType[]>("column", {
    method: "GET",
    urlParams: new URLSearchParams({ boardId }),
  });
};
export const addColumn = async (data: AddColumnRequest) => {
  return await apiCall("column", {
    method: "POST",
    data,
  });
};
export const deleteColumn = async (columnId: string) => {
  return await apiCall("column", {
    method: "DELETE",
    urlParams: new URLSearchParams({ columnId }),
  });
};
