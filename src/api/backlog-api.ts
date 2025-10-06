import { IssueType } from "../types";
import { apiCall } from "./api-client";

export const getBacklogCards = async (
  projectKey: string,
  boardId: string,
  token: string
) => {
  return await apiCall<IssueType[]>(
    `projects/${projectKey}/boards/${boardId}/backlog`,
    {
      method: "GET",
      token: token,
    }
  );
};
