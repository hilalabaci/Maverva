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
import IssueDetails from "../issue-details";
import Modal from "../../../components/common/modal";
interface IssueListProps {
  issues: IssueType[];
  status: number;
  projectKey: string;
  boardId?: string;
  sprintId?: string;
  onUpdate: (card: IssueType) => void;
  onUpdateSummary: (issue: IssueType) => void;
  onUpdateDescription: (issue: IssueType) => void;
  onDelete: (id: string) => void;
  addedCard: (card: IssueType) => void;
}
interface DragItem {
  issueId: string;
  oldSprintId?: string;
}

function IssueList({
  issues,
  status,
  projectKey,
  boardId,
  sprintId,
  onUpdate,
  onUpdateSummary,
  onUpdateDescription,
  onDelete,
  addedCard,
}: IssueListProps) {
  const [showAdd, setShowAdd] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(closeAddCard);
  const [selectedIssue, setSelectedIssue] = useState<IssueType | null>(null);
  function dynamicAddCard() {
    setShowAdd(true);
  }
  function closeAddCard() {
    setShowAdd(false);
  }

  async function updateStatus(issueId: string, status?: number) {
    const response = await updateIssue(issueId, status);
    if (response.ok && response.data) {
      onUpdate(response.data);
    } else {
      console.error("Failed to update card:", response);
    }
  }

  const [, drop] = useDrop<DragItem>({
    accept: "CARD",
    drop: (item) => {
      updateStatus(item.issueId, status);
    },
  });

  return (
    <Container ref={drop}>
      {issues.length > 0 ? (
        <IssueWrapper>
          {issues.map((issue, index) => (
            <Issue
              onClick={() => setSelectedIssue(issue)}
              onUpdate={onUpdate}
              onUpdateSummary={onUpdateSummary}
              onUpdateDescription={onUpdateDescription}
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
      {selectedIssue && (
        <Modal onClose={() => setSelectedIssue(null)} open={!!selectedIssue}>
          <IssueDetails
            issueSummary={selectedIssue.Summary}
            onUpdateSummary={(newSummary) =>
              onUpdateSummary({ ...selectedIssue, Summary: newSummary })
            }
            issueDescription={selectedIssue.Description}
            onUpdateDescription={(newDescription) =>
              onUpdateDescription({
                ...selectedIssue,
                Description: newDescription,
              })
            }
            issueKey={selectedIssue.Key}
            onCloseIssueEdit={() => setSelectedIssue(null)}
          />
        </Modal>
      )}
    </Container>
  );
}
export default IssueList;
