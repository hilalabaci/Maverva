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
};
export type BoardType = {
  Id: string;
  Name: string;
  Users: UserType[];
  ProjectKey: ProjectType;
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
  IssueIds: IssueType[];
  IsActive: boolean;
};
export type IssueType = {
  Id: string;
  Summary: string;
  Status: number;
  UserId: UserType;
  Key: string;
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
  id: string;
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
  Backlog = 0,
  ToDo = 1,
  InProgress = 2,
  Done = 99,
}
