import { useDrag } from "react-dnd";
import { useState } from "react";
import MemberPhoto from "../user/member-photo";
import {
  IssueStatus,
  IssueType,
  DragDropCollect,
  UserType,
  DragItem,
} from "../../types/user.types";
import useOutsideClick from "../../hooks/useOutsideClick";
import { STATUS_OPTIONS } from "../../constants/status-options";
import { ToolTip } from "../../components/ui/Toolstip";
import SelectDemo from "../../components/ui/SelectDemo";
import { DropdownMenu } from "../../components/ui/DropDownMenu";
import {
  BacklogCardListItems,
  TypeBadge,
  CardKey,
  ContentWrapper,
  Content,
  ContentText,
  IconEdit,
  Status,
  MemberWrapper,
  AssigneeName,
  MoreIcon,
  NoteEdit,
  EditWrapper,
  EditTextArea,
  DoneButton,
  IconDone,
  PriorityCell,
  EstimateCell,
} from "./styles";
import {
  deleteIssue,
  updateIssue,
  updateIssueContent,
} from "../../api/issue-api";
import { useUserContext } from "../../contexts/UserContext";

type BacklogCardPropsType = {
  cardKey: string;
  content: string;
  status: number;
  AssigneeUser?: UserType;
  id: string;
  sprintId?: string;
  boardId: string;
  updateCardsAfterDelete: (id: string) => void;
  onUpdateCardStatus: (id: string, status: number) => void;
  updateCardAfterDrag: (id: string) => void;
  onUpdateContent: (card: IssueType) => void;
};
const BacklogCard = ({
  cardKey,
  content,
  status,
  AssigneeUser,
  id,
  sprintId,
  boardId,
  updateCardsAfterDelete,
  onUpdateCardStatus,
  updateCardAfterDrag,
  onUpdateContent,
}: BacklogCardPropsType) => {
  const [, drag] = useDrag<DragItem, unknown, DragDropCollect>({
    type: "BACKLOG_CARD",
    item: { issueId: id, oldSprintId: sprintId, boardId: boardId },
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
        updateCardAfterDrag(card.Id);
      });
    },
  });
  const { user, token } = useUserContext();
  const [editTextDisplay, setEditTextDisplay] = useState(false);
  const [changeContent, setChangeContent] = useState(content);

  const ref = useOutsideClick<HTMLDivElement>(() => setEditTextDisplay(false));
  const statusOptions = STATUS_OPTIONS;

  async function updateCard(id: string, status: number) {
    if (!token) return;
    const response = await updateIssue(token, id, status);
    if (response.ok && response.data) {
      onUpdateCardStatus(response.data.Id, response.data.Status);
    } else {
      console.error("Failed to update card:", response);
    }
  }

  async function deleteCard() {
    if (!user || !user.Id || !token) {
      console.error("User is not authenticated.");
      return;
    }
    const issueId = id;
    const response = await deleteIssue(issueId, user.Id, token);
    if (response.ok) {
      updateCardsAfterDelete(id);
    }
  }

  async function updateCardContent(id: string, newContent: string) {
    if (!token) return;
    const response = await updateIssueContent(token, id, newContent);
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

  // Infer issue kind from summary
  const kind: 'bug' | 'story' | 'task' | 'chore' | 'epic' = /\bbug\b|fix|error|broken|crash|reconcile|proration/i.test(content)
    ? 'bug'
    : /\bepic\b/i.test(content)
    ? 'epic'
    : /\bstory\b|implement|build|create|schema|dual-write|audit/i.test(content)
    ? 'story'
    : /\bchore\b|update|refactor|clean|shadow traffic/i.test(content)
    ? 'chore'
    : 'task';
  const kindLabel = kind === 'story' ? 'S' : kind === 'bug' ? 'B' : kind === 'epic' ? 'E' : kind === 'chore' ? 'C' : 'T';

  // Infer priority from status + keywords
  const priorityTone: 'danger' | 'warn' | 'med' | 'lo' =
    /urgent|critical|blocker/i.test(content) ? 'danger'
    : /\bbug\b|crash|broken|error|high/i.test(content) ? 'warn'
    : status === IssueStatus.Done ? 'lo'
    : 'med';
  const priorityLabel =
    priorityTone === 'danger' ? '⚠ Urgent'
    : priorityTone === 'warn' ? '↑ High'
    : priorityTone === 'lo' ? '↓ Low'
    : '→ Medium';

  return (
    <BacklogCardListItems role="button" ref={drag}>
      <TypeBadge $kind={kind}>{kindLabel}</TypeBadge>
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
      <PriorityCell $tone={priorityTone}>
        <b>{priorityLabel}</b>
      </PriorityCell>
      <EstimateCell>—</EstimateCell>
      <MemberWrapper>
        <ToolTip
          trigger={
            <MemberPhoto
              user={AssigneeUser}
              $userPhotoWidth="25px"
              $userPhotoHeight="25px"
              $userPhotoFontSize="7px"
              $userBorderadius="50px"
            />
          }
          content={AssigneeUser?.FullName}
        ></ToolTip>
        {AssigneeUser?.FullName && (
          <AssigneeName>{AssigneeUser.FullName.split(' ')[0]}</AssigneeName>
        )}
      </MemberWrapper>
      <DropdownMenu
        key={id}
        trigger={<MoreIcon />}
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
