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
  Sprints: SprintType[];
};
export type BoardType = {
  Id: string;
  Key: string;
  Name: string;
  Users: UserType[];
  ProjectKey: ProjectType;
  ActiveSprint: SprintType;
  Sprints: SprintType[];
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
  issueId: string;
  oldSprintId?: string;
  boardId?: string;
};
export type BacklogDragItems = {
  oldSprintId?: string;
  issueId: string;
  boardId: string;
};

export interface DragDropCollect {
  isDragging: boolean;
}
export type NotificationType = {
  IsRead: boolean;
  Id: string;
  Message: string;
  FromUser: {
    id: string;
    FullName: string;
    email: string;
  };
  CreatedAt: Date;
};
export type NotificationMarkReadType = {
  unReadNotificationIds: string[];
  userId: string;
};

export enum IssueStatus {
  ToDo = 1,
  InProgress = 2,
  Done = 99,
}
