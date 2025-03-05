export type UserType = {
  Id: string;
  Email: string;
  FullName: string;
  ProfilePicture: string;
};

export type ProjectType = {
  Id: string;
  Name: string;
  Users: UserType[];
  Key: string;
  LeadUser: UserType;
  Boards: BoardType[];
  IsFavourite: boolean;
};
export type BoardType = {
  Id: string;
  Key: string;
  Name: string;
  Users: UserType[];
  ProjectKey: ProjectType;
  ActiveSprint: SprintType;
};
export type ColumnType = {
  Id: string;
  Name: string;
  Status: number;
  BoardId: BoardType[];
  IssueIds: IssueType[];
};
export type SprintType = {
  Id: string;
  Name: string;
  SprintGoal: string;
  StartDate: Date;
  EndDate: Date;
  BoardId?: BoardType;
  Board: string;
  UserId?: UserType;
  Issues: IssueType[];
  IsActive: boolean;
};
export type IssueType = {
  Id: string;
  Summary: string;
  Status: number;
  ReporterUser: UserType;
  AssigneeUser?: UserType;
  Key: string;
  createdBy: UserType;
  CreatedAt?: Date;
  InBacklog?: Boolean;
  Labels: LabelType[];
  Sprint?: SprintType;
  SprintId: string;
  ProjectId: ProjectType;
  BoardId: BoardType;
};
export type LabelType = {
  IssueIdss: IssueType[];
  colour: string;
};

export type DragItem = {
  IssueId: string;
  oldSprintId?: string;
  boardId?: string;
};
export type BacklogDragItems = {
  oldSprintId?: string;
  cardId: string;
  boardId: string;
};

export interface DragDropCollect {
  isDragging: boolean;
}
export type NotificationType = {
  isRead: boolean;
  Id: string;
  message: string;
  fromUserId: UserType;
  createdAdd: Date;
};

export enum IssueStatus {
  ToDo = 1,
  InProgress = 2,
  Done = 99,
}
