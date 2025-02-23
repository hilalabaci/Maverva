import { useState } from "react";
import Issue from "../issues";
import AddIssue from "../add-a-issue";
import { useDrop } from "react-dnd";
import {
  IssueWrapper,
  Container,
  AddCardButtonWrapper,
  AddCardButton,
  IconAdd,
} from "./styles";
import { IssueType, DragItem } from "../../../types";
import useOutsideClick from "../../../hooks/useOutsideClick";
import apiHelper from "../../../api/apiHelper";
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

function IssueList(props: IssueListProps) {
  const [showAdd, setShowAdd] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(closeAddCard);
  function dynamicAddCard() {
    setShowAdd(true);
  }
  function closeAddCard() {
    setShowAdd(false);
  }

  async function updateStatus(id: string, status: number) {
    const response = await apiHelper.updateCard(id, status);
    if (response.ok && response.data) {
      props.onUpdate(response.data);
    } else {
      console.error("Failed to update card:", response);
    }
  }

  const [, drop] = useDrop<DragItem>({
    accept: "CARD",
    drop: (item) => {
      updateStatus(item.id, props.status);
    },
  });

  return (
    <Container ref={drop}>
      {props.issues.length > 0 ? (
        <IssueWrapper>
          {props.issues.map((issue, index) => (
            <Issue
              onUpdate={props.onUpdate}
              onUpdateContent={props.onUpdateContent}
              onDelete={props.onDelete}
              id={issue.Id}
              key={index}
              content={issue.Summary}
              labels={issue.Labels}
              userId={issue.createdBy}
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
            addedCard={props.addedCard}
            projectKey={props.projectKey}
            onClose={closeAddCard}
            status={props.status}
            boardId={props.boardId}
            sprintId={props.sprintId}
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
