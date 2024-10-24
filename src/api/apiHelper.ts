import { BoardType, CardType, ProjectType } from "../types";
import {
  AddBoardRequest,
  AddBoardResponse,
  AddCardRequest,
  AddUserToBoardRequest,
  ApiCallOptions,
  ApiResponse,
} from "./types";

class ApiHelper {
  async getSelectedProject(projectKey: string) {
    return await this.baseCall<ProjectType>(`projects/${projectKey}`, {
      method: "GET",
    });
  }

  async addBoard(data: AddBoardRequest) {
    return await this.baseCall<AddBoardResponse>("board", {
      method: "POST",
      data: data,
    });
  }
  async getBoards(projectKey: string, userId: string) {
    return await this.baseCall<BoardType[]>("board", {
      method: "GET",
      urlParams: new URLSearchParams({ projectKey, userId }),
    });
  }
  async getSelectedBoard(projectKey: string, boardId: string) {
    return await this.baseCall<BoardType>(
      `projects/${projectKey}/boards/${boardId}`,
      {
        method: "GET",
      }
    );
  }
  async addUsertoBoard(data: AddUserToBoardRequest) {
    return await this.baseCall("project/boards/add-user", {
      method: "POST",
      data: data,
    });
  }
  async addCard(data: AddCardRequest) {
    return await this.baseCall("card", {
      method: "POST",
      data: data,
    });
  }
  async getCards(boardId: string) {
    return await this.baseCall<CardType[]>("card", {
      method: "GET",
      urlParams: new URLSearchParams({ boardId }),
    });
  }

  private async baseCall<T>(
    url: string,
    { urlParams, method, data }: ApiCallOptions
  ): Promise<ApiResponse<T>> {
    let apiUrl = process.env.REACT_APP_API_URL + url;
    if (urlParams) apiUrl = apiUrl + "?" + urlParams.toString();
    const response = await fetch(apiUrl, {
      method: method,
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { ok, status } = response;

    let responseData: T | undefined = undefined;

    if (ok) {
      responseData = (await response.json()) as T;
    }

    return { ok, status, data: responseData };
  }
}

export default new ApiHelper();
