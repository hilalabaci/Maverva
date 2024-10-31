export type UserType = {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  projects: ProjectType[];
};

export type ProjectType = {
  _id: string;
  title: string;
  users: UserType[];
  userId: UserType;
  projectKey: string;
  leadUser: UserType;
};
export type BoardType = {
  _id: string;
  title: string;
  users: UserType[];
  userId: UserType;
  projectKeys: ProjectType[];
};
export type SprintType = {
  _id: string;
  name: string;
  sprintGoal: string;
  startDate: Date;
  endDate: Date;
  boardId?: BoardType;
  userId?: UserType;
  cardIds: CardType[];
};
export type CardType = {
  _id: string;
  content: string;
  status: number;
  userId: UserType;
  cardKey: string;
  createdAt?: Date;
  inBacklog?: Boolean;
  labels: LabelType[];
  sprint?: SprintType;
  projectId: ProjectType;
  boardId: BoardType;
};
export type LabelType = {
  cardId: CardType[];
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
  _id: string;
  message: string;
  fromUserId: UserType;
  createdAdd: Date;
};

export enum CardStatus {
  Backlog = 0,
  ToDo = 1,
  InProgress = 2,
  Done = 3,
}
