import { useState } from "react";
import Issue from "../issue";
import AddIssue from "../add-a-issue";
import { useDrop } from "react-dnd";
import {
  IssueWrapper,
  Container,
  AddCardButtonWrapper,
  AddCardButton,
  IconAdd,
} from "./styles";
import { IssueType } from "../../../types";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { updateIssue } from "../../../api/issueApi";
import { useApplicationContext } from "../../../contexts/ApplicationContext";
interface IssueListProps {
  title: string;
  issues: IssueType[];
  status: number;
  projectKey: string;
  boardId?: string;
  sprintId?: string;
  onUpdate: (card: IssueType) => void;
  onUpdateContent: (card: IssueType) => void;
  onDelete: (id: string) => void;
  addedCard: (card: IssueType) => void;
}
interface DragItem {
  issueId: string;
  oldSprintId?: string;
}

function IssueList({
  title,
  issues,
  status,
  projectKey,
  boardId,
  sprintId,
  onUpdate,
  onUpdateContent,
  onDelete,
  addedCard,
}: IssueListProps) {
  const [showAdd, setShowAdd] = useState(false);
  const { activeSprint } = useApplicationContext();
  const ref = useOutsideClick<HTMLDivElement>(closeAddCard);
  function dynamicAddCard() {
    setShowAdd(true);
  }
  function closeAddCard() {
    setShowAdd(false);
  }

  async function updateStatus(
    projectKey: string,
    cardId: string,
    status?: number,
    newSprintId?: string,
    oldSprintId?: string,
    boardId?: string
  ) {
    const response = await updateIssue(
      projectKey,
      cardId,
      status,
      undefined,
      oldSprintId,
      boardId
    );
    if (response.ok && response.data) {
      onUpdate(response.data);
    } else {
      console.error("Failed to update card:", response);
    }
  }

  const [, drop] = useDrop<DragItem>({
    accept: "CARD",
    drop: (item) => {
      updateStatus(
        projectKey,
        item.issueId,
        status,
        activeSprint?.Id,
        item.oldSprintId,
        boardId
      );
    },
  });

  return (
    <Container ref={drop}>
      {issues.length > 0 ? (
        <IssueWrapper>
          {issues.map((issue, index) => (
            <Issue
              onUpdate={onUpdate}
              onUpdateContent={onUpdateContent}
              onDelete={onDelete}
              id={issue.Id}
              key={index}
              content={issue.Summary}
              labels={issue.Labels}
              reporterUser={issue.ReporterUser}
              userName={issue.createdBy?.FullName}
              cardKey={issue.Key}
              status={issue.Status}
            />
          ))}
        </IssueWrapper>
      ) : (
        <div></div>
      )}
      <AddCardButtonWrapper ref={ref}>
        {showAdd ? (
          <AddIssue
            addedCard={addedCard}
            projectKey={projectKey}
            onClose={closeAddCard}
            status={status}
            boardId={boardId}
            sprintId={sprintId}
          />
        ) : (
          <AddCardButton onClick={dynamicAddCard} type="submit">
            <IconAdd /> Create issue
          </AddCardButton>
        )}
      </AddCardButtonWrapper>
    </Container>
  );
}
export default IssueList;
