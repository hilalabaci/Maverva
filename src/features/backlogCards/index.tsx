import { useEffect, useState, useRef, useCallback } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDrop } from "react-dnd";
import useOutsideClick from "../../hooks/useOutsideClick";
import CollapsibleDemo from "../../components/ui/Collapsible";
import { IssueStatus, IssueType, DragItem } from "../../types/user.types";
import { useUserContext } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import { ToolTip } from "../../components/ui/Toolstip";
import BacklogCard from "../backlogCard";
import CheckBox from "../../components/forms/checkbox-component";
import {
  Accordion,
  BacklogCardList,
  Container,
  HeaderDropBlog,
  IconAdd,
  CreateIssueButton,
  CreateButtonWrapper,
  DisplayCreateWrapper,
  Form,
  TextCreate,
  HeaderTitleContent,
  HeaderTitle,
  ArrowIcon,
  HeaderIssue,
  HeaderButtonWrapper,
  HeaderButton,
  HeaderStatusWrapper,
  HeaderStatus,
  MoreIcon,
  CheckboxWrapper,
  EditSprintButton,
  RowHead,
} from "./styles";
import { getBacklogCards } from "../../api/backlog-api";
import { addIssue, updateIssue } from "../../api/issue-api";
import { getStatusCount } from "../../utils/getStatusCount";
import { RouteParams } from "../../types/auth.types";

type BacklogCardsProps = {
  createSprint: () => void;
  updateDragandDrop: (issueId: string) => void;
};

function BacklogCards({ createSprint, updateDragandDrop }: BacklogCardsProps) {
  const hasFetchedBacklogCards = useRef(false);
  const { user, token } = useUserContext();
  const { projectKey, boardId } = useParams<RouteParams>();
  const [content, setContent] = useState("");
  const [showBacklog, setShowBacklog] = useState(true);
  const [displayCreateTask, setDisplayCreateTask] = useState(false);
  const [isHeaderSelected, setIsHeaderSelected] = useState(false);
  const [backlogCards, setBacklogCards] = useState<IssueType[]>([]);

  const [, drop] = useDrop<DragItem>({
    accept: "BACKLOG_CARD",
    drop: (item) => {
      if (!token) return;
      updateCard(token, item.issueId, 1, item.oldSprintId, item.boardId);
      updateDragandDrop(item.issueId);
      // Update the card after drag
      loadBacklogCards();
    },
  });

  const refDisplayCreate = useOutsideClick<HTMLFormElement>(() =>
    setDisplayCreateTask(false)
  );
  const refBacklogSelected = useOutsideClick<HTMLDivElement>(() =>
    setIsHeaderSelected(false)
  );

  function handleChange(value: string) {
    setContent(value);
  }

  const loadBacklogCards = useCallback(async () => {
    try {
      if (!projectKey) return;
      if (!boardId || !token) return;
      const { ok, data } = await getBacklogCards(projectKey, boardId, token);
      if (ok && data) {
        setBacklogCards(data);
      } else {
        console.error("Failed to fetch board. Status:");
        setBacklogCards([]);
      }
    } catch (error) {
      console.error("Error fetching board:", error);
      setBacklogCards([]);
    }
  }, [projectKey, boardId, token]);

  async function submitNote() {
    try {
      if (!token) return;
      const cardData = {
        content: content,
        status: 1,
        userId: user?.Id,
        projectKey: projectKey,
        boardId: boardId,
      };

      const { ok } = await addIssue(cardData, token);
      if (ok) {
        setContent("");
        await loadBacklogCards();
      }
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  }

  async function updateCard(
    token: string,
    issueId: string,
    status: number,
    sprintId?: string,
    boardId?: string
  ) {
    const response = await updateIssue(
      token,
      issueId,
      status,
      undefined,
      sprintId,
      boardId
    );
    if (response.ok && response.data) {
      // props.onUpdate(response.data);
    } else {
      console.error("Failed to update card:", response);
    }
  }
  function deleteCard(id: string) {
    setBacklogCards(backlogCards.filter((card) => card.Id !== id));
  }
  function updateStatusCard(id: string, status: number) {
    setBacklogCards((prevBacklogCards) =>
      prevBacklogCards.map((card) =>
        card.Id === id ? { ...card, Status: status } : card
      )
    );
  }
  function onUpdateContent(card: IssueType) {
    if (!backlogCards) return;
    loadBacklogCards();
    setContent(card.Summary);
  }

  useEffect(() => {
    if (hasFetchedBacklogCards.current) return;
    hasFetchedBacklogCards.current = true;
    if (!boardId) {
      setBacklogCards([]);
      return;
    }
    loadBacklogCards();
  }, [boardId, projectKey, loadBacklogCards]);

  return (
    <Container>
      <CollapsibleDemo
        trigger={
          <HeaderDropBlog>
            <CheckboxWrapper>
              <ArrowIcon
                className="dropdown-trigger"
                as={
                  showBacklog
                    ? KeyboardArrowDownRoundedIcon
                    : KeyboardArrowRightIcon
                }
              />
            </CheckboxWrapper>
            <HeaderTitleContent
              ref={refBacklogSelected}
              $selected={isHeaderSelected}
              onClick={() => setIsHeaderSelected(true)}
            >
              <HeaderTitle>Backlog</HeaderTitle>
              <HeaderIssue>· {backlogCards?.length || 0} issues</HeaderIssue>
            </HeaderTitleContent>
            <HeaderStatusWrapper>
              <ToolTip
                trigger={
                  <HeaderStatus status={IssueStatus.ToDo}>
                    <b>{getStatusCount(backlogCards, IssueStatus.ToDo)}</b> to do
                  </HeaderStatus>
                }
                content={`Not started ${getStatusCount(backlogCards, IssueStatus.ToDo)} of ${backlogCards.length}`}
              />
              <ToolTip
                trigger={
                  <HeaderStatus status={IssueStatus.InProgress}>
                    <b>{getStatusCount(backlogCards, IssueStatus.InProgress)}</b> in progress
                  </HeaderStatus>
                }
                content={`In progress ${getStatusCount(backlogCards, IssueStatus.InProgress)} of ${backlogCards.length}`}
              />
              <ToolTip
                trigger={
                  <HeaderStatus status={IssueStatus.Done}>
                    <b>{getStatusCount(backlogCards, IssueStatus.Done)}</b> done
                  </HeaderStatus>
                }
                content={`Completed ${getStatusCount(backlogCards, IssueStatus.Done)} of ${backlogCards.length}`}
              />
            </HeaderStatusWrapper>
            <HeaderButtonWrapper>
              <HeaderButton
                onClick={(e) => {
                  e.stopPropagation();
                  createSprint();
                }}
              >
                Create sprint
              </HeaderButton>
            </HeaderButtonWrapper>
            <EditSprintButton>
              <MoreIcon />
            </EditSprintButton>
          </HeaderDropBlog>
        }
        children={
          <Accordion>
            <RowHead>
              <span></span>
              <span>Key</span>
              <span>Summary</span>
              <span>Status</span>
              <span>Priority</span>
              <span>Estimate</span>
              <span>Assignee</span>
              <span></span>
            </RowHead>
            <BacklogCardList ref={drop}>
              {backlogCards.map((backlogCard) => (
                <BacklogCard
                  key={backlogCard.Id}
                  onUpdateContent={onUpdateContent}
                  onUpdateCardStatus={updateStatusCard}
                  updateCardsAfterDelete={deleteCard}
                  updateCardAfterDrag={deleteCard}
                  boardId={boardId as string}
                  id={backlogCard.Id}
                  cardKey={backlogCard.Key}
                  content={backlogCard.Summary}
                  status={backlogCard.Status}
                  AssigneeUser={backlogCard.AssigneeUser}
                />
              ))}
            </BacklogCardList>
            <DisplayCreateWrapper>
              {displayCreateTask ? (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitNote();
                  }}
                  $selected={true}
                  ref={refDisplayCreate}
                >
                  <TextCreate
                    value={content}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="What needs to be done?"
                  />
                </Form>
              ) : (
                <CreateButtonWrapper
                  onClick={() => {
                    setDisplayCreateTask(true);
                  }}
                  tabIndex={0}
                >
                  <IconAdd />
                  <CreateIssueButton>Create issue</CreateIssueButton>
                </CreateButtonWrapper>
              )}
            </DisplayCreateWrapper>
          </Accordion>
        }
        open={showBacklog}
        setOpen={setShowBacklog}
      ></CollapsibleDemo>
    </Container>
  );
}
export default BacklogCards;
