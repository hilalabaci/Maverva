export type UserType = {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  boards: BoardType[];
};

export type BoardType = {
  _id: string;
  title: string;
  users: UserType[];
  userId: UserType;
  projectKey: string;
};
export type CardType = {
  _id: string;
  userId: UserType;
  content: string;
  boardId: BoardType;
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
