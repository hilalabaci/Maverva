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
import useOutsideClick from "../../../hooks/useOutsideClick";
import { updateIssue } from "../../../api/issue-api";
import IssueDetails from "../issue-details";
import Modal from "../../../components/ui/Modal";
import { useUserContext } from "../../../contexts/UserContext";
import { IssueType } from "../../../types/user.types";
import { useApplicationContext } from "../../../contexts/ApplicationContext";
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
  const { selectedIssue, setSelectedIssue } = useApplicationContext();
  const [showAdd, setShowAdd] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(closeAddCard);
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
      setSelectedIssue((prev) => {
        if (!prev) return prev;
        if (prev.Id !== response.data?.Id) return prev;
        return { ...prev, Status: response.data.Status };
      });
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
        <Modal
          onClose={() => setSelectedIssue(undefined)}
          open={!!selectedIssue}
        >
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
            onUpdateAssignee={(newUser) =>
              setSelectedIssue((prev) => {
                if (!prev) return prev;
                return { ...prev, AssigneeUser: newUser };
              })
            }
            onCloseIssueEdit={() => setSelectedIssue(undefined)}
            issue={selectedIssue}
          />
        </Modal>
      )}
    </Container>
  );
}
export default IssueList;
