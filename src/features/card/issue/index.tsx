import { useState } from "react";
import Label from "../card-label/index";
import MemberPhoto from "../../user/member-photo";
import { useDrag } from "react-dnd";
import {
  IssueStatus,
  IssueType,
  DragDropCollect,
  DragItem,
  LabelType,
  UserType,
} from "../../../types";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { ToolTip } from "../../../components/common/toolstip";
import { DropdownMenu } from "../../../components/common/dropdownMenu";
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
import { useUserContext } from "../../../contexts/UserContext";
type IssueProps = {
  id: string;
  labels: LabelType[];
  content: string;
  reporterUser: UserType;
  userName: string;
  cardKey: string;
  status: number;
  onUpdate: (card: IssueType) => void;
  onUpdateContent: (card: IssueType) => void;
  onDelete: (id: string) => void;
};
function Issue({
  id,
  labels,
  content,
  reporterUser,
  userName,
  cardKey,
  onUpdate,
  onUpdateContent,
  onDelete,
}: IssueProps) {
  const [{ isDragging }, drag] = useDrag<DragItem, unknown, DragDropCollect>({
    type: "CARD",
    item: { IssueId: id },
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
  function closeModal() {
    setShowModal(false);
  }
  const [showLabel, setShowLabel] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  function openModalEdit() {
    setShowModalEdit(true);
    setShowLabel(false);
  }
  function openLabel() {
    setShowLabel(true);
    setShowModalEdit(false);
  }
  function onCloseEdit() {
    setShowLabel(false);
  }
  async function handleDeleteIssue(issueId: string) {
    try {
      const response = await deleteIssue(issueId, user?.Id as string);
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
  async function updateCardContent(id: string, newContent: string) {
    const response = await updateIssueContent(id, newContent);
    if (response.ok && response.data) {
      onUpdateContent(response.data);
      setEditTextDisplay(false);
    } else {
      console.error("Failed to update card:", response);
    }
  }

  return (
    <Container ref={drag}>
      <GlobalStyle />
      <ContentWrapper>
        <NoteWrapper>
          {editTextDisplay ? (
            <EditWrapper ref={ref}>
              <EditTextArea
                value={changeContent}
                onChange={(e) => setChangeContent(e.target.value)}
              />
              <DoneButton onClick={() => updateCardContent(id, changeContent)}>
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
                <NoteEdit onClick={() => setEditTextDisplay(true)}>
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
  );
}
export default Issue;
