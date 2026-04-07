import { IssueStatus, IssueType } from "../types/user.types";

export function getStatusCount(cards: IssueType[], status: IssueStatus): number {
  return cards.filter((card) => card.Status === status).length;
}
