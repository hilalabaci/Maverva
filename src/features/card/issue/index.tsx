import { useState } from "react";
import { useDrag } from "react-dnd";
import { useUserContext } from "../../../contexts/UserContext";
import Label from "../card-label/index";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { ToolTip } from "../../../components/ui/Toolstip";
import { DropdownMenu } from "../../../components/ui/DropDownMenu";
import {
  IssueStatus,
  IssueType,
  DragDropCollect,
  DragItem,
  UserType,
} from "../../../types/user.types";
import {
  Container,
  NoteWrapper,
  CardButtomWrapper,
  LabelWrapper,
  GlobalStyle,
  EditIcon,
  ContentWrapper,
  ButtomWrapper,
  CardKeyWrapper,
  EditContentIcon,
  Note,
  NoteEdit,
  EditTextArea,
  EditWrapper,
  IconDone,
  DoneButton,
} from "./styles";
import {
  deleteIssue,
  updateIssue,
  updateIssueContent,
} from "../../../api/issue-api";
import { UserSelect } from "../../../components/ui/SelectUser";
import { useIssueDetails } from "../issue-details/useIssueDetails";
type IssueProps = {
  issue: IssueType;
  onUpdate: (card: IssueType) => void;
  onUpdateSummary: (card: IssueType) => void;
  onUpdateDescription: (card: IssueType) => void;
  onDelete: (id: string) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};
function Issue({
  issue,
  onUpdate,
  onUpdateSummary,
  onDelete,
  onClick,
}: IssueProps) {
  const [{ isDragging }, drag] = useDrag<DragItem, unknown, DragDropCollect>({
    type: "CARD",
    item: { issueId: issue.Id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const { user, token } = useUserContext();
  const [showModal, setShowModal] = useState(false);
  const [editTextDisplay, setEditTextDisplay] = useState(false);
  const [changeContent, setChangeContent] = useState(issue.Summary);
  const ref = useOutsideClick<HTMLDivElement>(() => setEditTextDisplay(false));
  const refModal = useOutsideClick<HTMLDivElement>(() => setShowModal(false));
  const [assignee, setAssignee] = useState<UserType | null>(
    issue.AssigneeUser || null
  );
  const {
    selectedUser,
    setSelectedUser,
    usersByProject,
    handleAssigneeChange,
  } = useIssueDetails(issue, onUpdateAssignee);

  function openModal() {
    setShowModal(true);
  }

  async function handleDeleteIssue(issueId: string) {
    if (user === null || user?.Id === undefined || !token) {
      console.error("User is not authenticated.");
      return;
    }
    try {
      const response = await deleteIssue(issueId, user.Id, token);
      if (response.ok) {
        onDelete(issueId);
      } else {
        console.error("Failed to delete card:", response.status);
      }
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  }

  async function updateStatus(id: string, status: number) {
    if (!token) return;
    const response = await updateIssue(token, id, status);
    if (response.ok && response.data) {
      onUpdate(response.data);
    } else {
      console.error("Failed to update card:", response);
    }
  }
  async function updateIssueDetails(id: string, newSummary: string) {
    if (!token) return;
    console.log(`issueId:${id}, newSummary:${newSummary}`);
    const response = await updateIssueContent(token, id, newSummary);
    if (response.ok && response.data) {
      onUpdateSummary(response.data);
      //onUpdateDescription(response.data);
      setEditTextDisplay(false);
    } else {
      console.error("Failed to update card:", response);
    }
  }
  async function onUpdateAssignee(newAssignee: UserType) {
    if (!user || !token) return;

    try {
      const response = await updateIssue(
        token,
        issue.Id,
        undefined,
        newAssignee.Id
      );
      if (response.ok && response.data) {
        onUpdate(response.data);
        setAssignee(newAssignee);
      } else {
        console.error("Failed to update assignee", response);
      }
    } catch (error) {
      console.error("Error updating assignee", error);
    }
  }

  return (
    <>
      <Container onClick={onClick} ref={drag}>
        <GlobalStyle />
        <ContentWrapper>
          <NoteWrapper>
            {editTextDisplay ? (
              <EditWrapper
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <EditTextArea
                  value={changeContent}
                  onChange={(e) => setChangeContent(e.target.value)}
                />
                <DoneButton
                  onClick={(e) => {
                    e.stopPropagation();
                    updateIssueDetails(issue.Id, changeContent);
                  }}
                >
                  <IconDone />
                </DoneButton>
              </EditWrapper>
            ) : (
              <ToolTip
                contentStyle={{ zIndex: 0 }}
                trigger={<Note>{issue.Summary}</Note>}
                content={issue.Summary}
              ></ToolTip>
            )}
            {!editTextDisplay && (
              <ToolTip
                fontSize="10px"
                trigger={
                  <NoteEdit
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditTextDisplay(true);
                    }}
                  >
                    <EditContentIcon />
                  </NoteEdit>
                }
                content="Edit Summary"
              ></ToolTip>
            )}
          </NoteWrapper>
          {!editTextDisplay && (
            <DropdownMenu
              trigger={<EditIcon onClick={openModal} />}
              items={[
                {
                  action: () => {},
                  label: "Change status",
                  subItems: [
                    {
                      action: (event) => {
                        event.stopPropagation();
                        updateStatus(issue.Id, IssueStatus.ToDo);
                      },
                      label: "To Do",
                    },
                    {
                      action: (event) => {
                        event.stopPropagation();
                        updateStatus(issue.Id, IssueStatus.InProgress);
                      },
                      label: "In progress",
                    },
                    {
                      action: (event) => {
                        event.stopPropagation();
                        updateStatus(issue.Id, IssueStatus.Done);
                      },
                      label: "Done",
                    },
                  ],
                },
                {
                  action: (event) => {
                    event.stopPropagation();
                  },
                  label: "Add Label",
                },
                {
                  action: (event) => {
                    event.stopPropagation();
                    handleDeleteIssue(issue.Id);
                  },
                  label: "Delete",
                },
              ]}
            />
          )}
        </ContentWrapper>
        <LabelWrapper>
          {(issue.Labels || []).map((label, index) => {
            return <Label key={index} colour={label.colour} />;
          })}
        </LabelWrapper>

        <CardButtomWrapper>
          <CardKeyWrapper>{issue.Key}</CardKeyWrapper>
          <ToolTip
            contentStyle={{ zIndex: 0 }}
            trigger={
              <ButtomWrapper>
                <UserSelect
                  users={usersByProject}
                  selectedUser={
                    selectedUser ? selectedUser : issue.AssigneeUser
                  }
                  onChange={(user) => {
                    if (user) {
                      setSelectedUser(user);
                      handleAssigneeChange(user);
                      onUpdateAssignee(user);
                    } else {
                      setSelectedUser(null);
                    }
                  }}
                />
              </ButtomWrapper>
            }
            content={`Assignee: ${assignee?.FullName}`}
          ></ToolTip>
        </CardButtomWrapper>
      </Container>
    </>
  );
}
export default Issue;
