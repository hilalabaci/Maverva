import { CardStatus } from "../../types";

export const getStatusLabel = (value: CardStatus) => {
  switch (value) {
    case CardStatus.Backlog:
      return "Backlog";

    case CardStatus.ToDo:
      return "To Do";

    case CardStatus.InProgress:
      return "In Progress";

    case CardStatus.Done:
      return "Done";

    default:
      return "";
  }
};
