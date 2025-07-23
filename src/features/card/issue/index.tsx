import { useState } from "react";
import { useDrag } from "react-dnd";
import { useUserContext } from "../../../contexts/UserContext";
import Label from "../card-label/index";
import MemberPhoto from "../../user/member-photo";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { ToolTip } from "../../../components/common/toolstip";
import { DropdownMenu } from "../../../components/common/dropdownMenu";
import {
  IssueStatus,
  IssueType,
  DragDropCollect,
  DragItem,
  LabelType,
  UserType,
} from "../../../types";
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
} from "../../../api/issueApi";
import { on } from "events";

type IssueProps = {
  id: string;
  labels: LabelType[];
  content: string;
  reporterUser: UserType;
  userName: string;
  cardKey: string;
  status: number;
  onUpdate: (card: IssueType) => void;
  onUpdateSummary: (card: IssueType) => void;
  onUpdateDescription: (card: IssueType) => void;
  onDelete: (id: string) => void;
  onClick?: () => void;
};
function Issue({
  id,
  labels,
  content,
  reporterUser,
  cardKey,
  onUpdate,
  onUpdateSummary,
  onUpdateDescription,
  onDelete,
  onClick,
}: IssueProps) {
  const [{ isDragging }, drag] = useDrag<DragItem, unknown, DragDropCollect>({
    type: "CARD",
    item: { issueId: id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const { user } = useUserContext();
  const [showModal, setShowModal] = useState(false);
  const [editTextDisplay, setEditTextDisplay] = useState(false);
  const [changeContent, setChangeContent] = useState(content);
  const ref = useOutsideClick<HTMLDivElement>(() => setEditTextDisplay(false));

  function openModal() {
    setShowModal(true);
  }

  async function handleDeleteIssue(issueId: string) {
    if (user === null || user?.Id === undefined) {
      console.error("User is not authenticated.");
      return;
    }
    try {
      const response = await deleteIssue(issueId, user.Id);
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
    const response = await updateIssue(id, status);
    if (response.ok && response.data) {
      onUpdate(response.data);
    } else {
      console.error("Failed to update card:", response);
    }
  }
  async function updateIssueDetails(id: string, newSummary: string) {
    const response = await updateIssueContent(id, newSummary);
    if (response.ok && response.data) {
      onUpdateSummary(response.data);
      //onUpdateDescription(response.data);
      setEditTextDisplay(false);
    } else {
      console.error("Failed to update card:", response);
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
                    updateIssueDetails(id, changeContent);
                  }}
                >
                  <IconDone />
                </DoneButton>
              </EditWrapper>
            ) : (
              <ToolTip
                contentStyle={{ zIndex: 0 }}
                trigger={<Note>{content}</Note>}
                content={content}
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
                      action: () => {
                        updateStatus(id, IssueStatus.ToDo);
                      },
                      label: "To Do",
                    },
                    {
                      action: () => {
                        updateStatus(id, IssueStatus.InProgress);
                      },
                      label: "In progress",
                    },
                    {
                      action: () => {
                        updateStatus(id, IssueStatus.Done);
                      },
                      label: "Done",
                    },
                  ],
                },
                {
                  action: () => {},
                  label: "Add Label",
                },
                {
                  action: () => {
                    handleDeleteIssue(id);
                  },
                  label: "Delete",
                },
              ]}
            />
          )}
        </ContentWrapper>
        <LabelWrapper>
          {(labels || []).map((label, index) => {
            return <Label key={index} colour={label.colour} />;
          })}
        </LabelWrapper>

        <CardButtomWrapper>
          <CardKeyWrapper>{cardKey}</CardKeyWrapper>
          <ToolTip
            contentStyle={{ zIndex: 0 }}
            trigger={
              <ButtomWrapper>
                <MemberPhoto
                  $userPhotoWidth="24px"
                  $userPhotoHeight="24px"
                  $userPhotoFontSize="10px"
                  $userBorderadius="50px"
                  user={reporterUser}
                />
              </ButtomWrapper>
            }
            content={`Assignee: ${reporterUser?.FullName}`}
          ></ToolTip>
        </CardButtomWrapper>
      </Container>
    </>
  );
}
export default Issue;
