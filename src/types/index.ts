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
export type CardType = {
  _id: string;
  userId: UserType;
  content: string;
  projectId: ProjectType;
  status: number;
  labels: LabelType[];
};
export type LabelType = {
  cardId: CardType[];
  colour: string;
};

export type DragItem = {
  id: string;
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
