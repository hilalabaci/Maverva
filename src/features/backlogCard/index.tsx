import { useDrag } from "react-dnd";
import { useState } from "react";
import MemberPhoto from "../user/member-photo";
import {
  IssueStatus,
  IssueType,
  DragDropCollect,
  UserType,
  DragItem,
} from "../../types";
import useOutsideClick from "../../hooks/useOutsideClick";
import { getStatusLabel } from "../../utils/getStatus";
import CheckboxRadixUi from "../../components/forms/checkboxRadixUI";
import { ToolTip } from "../../components/common/toolstip";
import SelectDemo from "../../components/common/selectDemo";
import { DropdownMenu } from "../../components/common/dropdownMenu";
import {
  BacklogCardListItems,
  CheckboxWrapper,
  CardKey,
  ContentWrapper,
  Content,
  ContentText,
  IconEdit,
  Status,
  MemberWrapper,
  MoreIcon,
  NoteEdit,
  EditWrapper,
  EditTextArea,
  DoneButton,
  IconDone,
} from "./styles";
import {
  deleteIssue,
  updateIssue,
  updateIssueContent,
} from "../../api/issueApi";
import { tokenKey, useUserContext } from "../../contexts/UserContext";

type BacklogCardPropsType = {
  cardKey: string;
  content: string;
  status: number;
  reporterUser: UserType;
  id: string;
  sprintId?: string;
  boardId: string;
  updateCardsAfterDelete: (id: string) => void;
  onUpdateCardStatus: (id: string, status: number) => void;
  updateCardAfterDrag: (id: string) => void;
  onUpdateContent: (card: IssueType) => void;
};
type URLParams = {
  projectKey: string;
  sprintId: string;
};

const BacklogCard = ({
  cardKey,
  content,
  status,
  reporterUser,
  id,
  sprintId,
  boardId,
  updateCardsAfterDelete,
  onUpdateCardStatus,
  updateCardAfterDrag,
  onUpdateContent,
}: BacklogCardPropsType) => {
  const [{ isDragging }, drag] = useDrag<DragItem, unknown, DragDropCollect>({
    type: "BACKLOG_CARD",
    item: { issueId: id, oldSprintId: sprintId, boardId: boardId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end(_, monitor) {
      if (!monitor.didDrop()) {
        return;
      }

      const dropResult = monitor.getDropResult<{
        droppedCard: Promise<IssueType | undefined>;
      }>();

      if (!dropResult?.droppedCard) return;

      dropResult.droppedCard.then((card) => {
        if (!card) return;
        console.log("Card dropped suanda bunu:", card);
        updateCardAfterDrag(card.Id);
      });
    },
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
  const statusOptions = [
    { label: getStatusLabel(IssueStatus.ToDo), value: IssueStatus.ToDo },
    {
      label: getStatusLabel(IssueStatus.InProgress),
      value: IssueStatus.InProgress,
    },
    { label: getStatusLabel(IssueStatus.Done), value: IssueStatus.Done },
  ];

  async function updateCard(id: string, status: number) {
    const response = await updateIssue(id, status);
    if (response.ok && response.data) {
      onUpdateCardStatus(response.data.Id, response.data.Status);
    } else {
      console.error("Failed to update card:", response);
    }
  }

  async function deleteCard() {
    if (!user || !user.Id) {
      console.error("User is not authenticated.");
      return;
    }
    const issueId = id;
    console.log(`token: ${localStorage.getItem("token")}`);
    console.log(tokenKey, localStorage.getItem(tokenKey));
    const response = await deleteIssue(issueId, user.Id);
    if (response.ok) {
      updateCardsAfterDelete(id);
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
  const handleStatusChange = async (status: IssueStatus) => {
    await updateCard(id, status);
  };

  return (
    <BacklogCardListItems role="button" ref={drag}>
      <CheckboxWrapper>
        <CheckboxRadixUi />
      </CheckboxWrapper>
      <CardKey>{cardKey}</CardKey>
      <ContentWrapper>
        {editTextDisplay ? (
          <EditWrapper ref={ref}>
            <EditTextArea
              value={changeContent}
              rows={1}
              onChange={(e) => setChangeContent(e.target.value)}
            />
            <DoneButton onClick={() => updateCardContent(id, changeContent)}>
              <IconDone />
            </DoneButton>
          </EditWrapper>
        ) : (
          <ToolTip
            contentStyle={{ zIndex: 0 }}
            trigger={
              <Content>
                <ContentText>{content}</ContentText>
                <ToolTip
                  trigger={
                    <NoteEdit onClick={() => setEditTextDisplay(true)}>
                      <IconEdit />
                    </NoteEdit>
                  }
                  content="Edit Summary"
                ></ToolTip>
              </Content>
            }
            content={content}
          ></ToolTip>
        )}
      </ContentWrapper>
      <Status $status={status}>
        <SelectDemo
          items={statusOptions}
          onSelect={(val) => handleStatusChange(val as IssueStatus)}
          selectedValue={status}
        />
      </Status>
      <MemberWrapper>
        <ToolTip
          trigger={
            <MemberPhoto
              user={reporterUser}
              $userPhotoWidth="25px"
              $userPhotoHeight="25px"
              $userPhotoFontSize="7px"
              $userBorderadius="50px"
            />
          }
          content={reporterUser?.FullName}
        ></ToolTip>
      </MemberWrapper>
      <DropdownMenu
        key={id}
        trigger={<MoreIcon onClick={openModal} />}
        items={[
          {
            label: "Move to",
            action: () => console.log("Go to settings"),
            subItems: [
              {
                action: () => {
                  updateCard(id, IssueStatus.ToDo);
                },
                label: "To Do",
              },
              {
                action: () => {
                  updateCard(id, IssueStatus.InProgress);
                },
                label: "In progress",
              },
              {
                action: () => {
                  updateCard(id, IssueStatus.Done);
                },
                label: "Done",
              },
            ],
          },
          {
            label: "Add label",
            action: () => console.log("Go to settings"),
          },
          {
            label: "Delete",
            action: () => {
              deleteCard();
            },
          },
        ]}
      />
    </BacklogCardListItems>
  );
};

export default BacklogCard;
