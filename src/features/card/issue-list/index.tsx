import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { updateIssue } from "../../../api/issue-api";
import IssueDetails from "../issue-details";
import Modal from "../../../components/ui/Modal";
import { useUserContext } from "../../../contexts/UserContext";
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
  const { token } = useUserContext();
  const [showAdd, setShowAdd] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(closeAddCard);
  const [selectedIssue, setSelectedIssue] = useState<IssueType | null>(null);
  const navigate = useNavigate();

  function dynamicAddCard() {
    setShowAdd(true);
  }
  function closeAddCard() {
    setShowAdd(false);
  }

  async function updateStatus(issueId: string, status?: number) {
    if (!token) return;
    const response = await updateIssue(token, issueId, status);
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
              issue={issue}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIssue(issue);
                navigate(`?selectedIssue=${issue.Key}`, { replace: false });
              }}
              onUpdate={onUpdate}
              onUpdateSummary={onUpdateSummary}
              onUpdateDescription={onUpdateDescription}
              onDelete={onDelete}
              key={index}
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
            onUpdateSummary={(newSummary) =>
              onUpdateSummary({ ...selectedIssue, Summary: newSummary })
            }
            onUpdateDescription={(newDescription) =>
              onUpdateDescription({
                ...selectedIssue,
                Description: newDescription,
              })
            }
            onCloseIssueEdit={() => setSelectedIssue(null)}
            issue={selectedIssue}
          />
        </Modal>
      )}
    </Container>
  );
}
export default IssueList;
