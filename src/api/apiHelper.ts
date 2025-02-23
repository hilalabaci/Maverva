import {
  BoardType,
  IssueType,
  ColumnType,
  ProjectType,
  SprintType,
  UserType,
} from "../types";
import {
  AddBoardRequest,
  AddBoardResponse,
  AddIssueRequest,
  AddColumnRequest,
  AddProjectResponse,
  AddSprintRequest,
  AddUserToBoardRequest,
  ApiCallOptions,
  ApiResponse,
} from "./types";

class ApiHelper {
  async addProject(
    title: string,
    leadUser: UserType | undefined,
    projectKey: string,
    boardTitle: string
  ) {
    return await this.baseCall<AddProjectResponse>("project", {
      method: "POST",
      data: { title, leadUser, projectKey, boardTitle },
    });
  }

  async loginVerificationEmail(email: string) {
    return await this.baseCall("login-verification-email", {
      method: "POST",
      data: { email },
    });
  }
  async getProjects(userId: string) {
    return await this.baseCall<ProjectType[]>("project", {
      method: "GET",
      urlParams: new URLSearchParams({ userId }),
    });
  }

  async getSelectedProject(projectKey: string, userId: string) {
    return await this.baseCall<ProjectType>(`projects/${projectKey}`, {
      method: "GET",
      urlParams: new URLSearchParams({ userId }),
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
  async addUsertoBoard(data: AddUserToBoardRequest) {
    return await this.baseCall("project/boards/add-user", {
      method: "POST",
      data: data,
    });
  }

  async getColumns(boardId: string) {
    return await this.baseCall<ColumnType[]>("column", {
      method: "GET",
      urlParams: new URLSearchParams({ boardId }),
    });
  }
  async addColumn(data: AddColumnRequest) {
    return await this.baseCall("column", {
      method: "POST",
      data,
    });
  }
  async deleteColumn(columnId: string) {
    return await this.baseCall("column", {
      method: "DELETE",
      urlParams: new URLSearchParams({ columnId }),
    });
  }
  async addSprint(data: AddSprintRequest) {
    return await this.baseCall("sprint", {
      method: "POST",
      data: data,
    });
  }
  async getSprints(boardId: string) {
    return await this.baseCall<SprintType[]>("sprint", {
      method: "GET",
      urlParams: new URLSearchParams({ boardId }),
    });
  }

  async updateSprint(sprintId: string, active: boolean, boardId: string) {
    return await this.baseCall<SprintType>("sprint", {
      method: "PUT",
      data: { sprintId, active, boardId },
    });
  }

  async getSprintCard(projectKey: string, boardId: string) {
    return await this.baseCall<IssueType[]>(
      `projects/${projectKey}/boards/${boardId}`,
      {
        method: "GET",
      }
    );
  }
  async getActiveSprint(projectKey: string, boardId: string) {
    return await this.baseCall<SprintType>(
      `projects/${projectKey}/boards/${boardId}`,
      {
        method: "GET",
      }
    );
  }

  async addIssue(data: AddIssueRequest) {
    return await this.baseCall("card", {
      method: "POST",
      data: data,
    });
  }
  async getIssues(boardId: string) {
    return await this.baseCall<IssueType[]>("card", {
      method: "GET",
      urlParams: new URLSearchParams({ boardId }),
    });
  }
  async getBacklogCards(projectKey: string, boardId: string) {
    return await this.baseCall<IssueType[]>(
      `projects/${projectKey}/boards/${boardId}/backlog`,
      {
        method: "GET",
      }
    );
  }
  async updateCard(
    cardId: string,
    status?: number,
    newSprintId?: string,
    oldSprintId?: string,
    boardId?: string
  ) {
    return await this.baseCall<IssueType>("card", {
      method: "PUT",
      data: { cardId, status, newSprintId, oldSprintId, boardId },
    });
  }

  async updateCardContent(cardId: string, newContent?: string) {
    return await this.baseCall<IssueType>("card/content", {
      method: "PUT",
      data: { cardId, newContent },
    });
  }

  async createProjectKey(title: string) {
    return await this.baseCall<string>("createProjectKey", {
      method: "GET",
      urlParams: new URLSearchParams({ title }),
    });
  }

  async loginGoogle(token: string) {
    return await this.baseCall<UserType>("login-google", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private async baseCall<T>(
    url: string,
    { urlParams, method, data, headers }: ApiCallOptions
  ): Promise<ApiResponse<T>> {
    let apiUrl = process.env.REACT_APP_API_URL + url;
    if (urlParams) apiUrl = apiUrl + "?" + urlParams.toString();
    const requestHeaders = headers ?? {};

    const response = await fetch(apiUrl, {
      method: method,
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        "Content-Type": "application/json",
        ...requestHeaders,
      },
    });

    const { ok, status } = response;

    let responseData: T | undefined = undefined;

    try {
      if (ok) {
        responseData = (await response.json()) as T;
      } else {
        const errorText = await response.text(); // Get raw response text
        console.error("API call failed:", status, errorText); // Log the error
        throw new Error(`Error: ${status}, ${errorText}`);
      }
    } catch (error) {
      console.error("Failed to parse response as JSON:", error);
      throw error; // Rethrow the error for further handling
    }

    return { ok, status, data: responseData };
  }
}

export default new ApiHelper();
