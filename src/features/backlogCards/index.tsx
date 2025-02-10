import { useEffect, useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDrag, useDrop } from "react-dnd";
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
} from "./styles";
import useOutsideClick from "../../hooks/useOutsideClick";
import CollapsibleDemo from "../../components/common/collapsible";

import FormDemo from "../../features/sprints/edit-sprint";
import { IssueStatus, IssueType, DragDropCollect, DragItem } from "../../types";
import { useUserContext } from "../../contexts/UserContext";
import apiHelper from "../../api/apiHelper";
import { useParams } from "react-router-dom";

import { CheckboxWrapper } from "../backlogCard/styles";

import { ToolTip } from "../../components/common/toolstip";
import BacklogCard from "../backlogCard";
import Modal from "../../components/common/modal";
import CheckboxRadixUi from "../../components/forms/checkboxRadixUI";

type URLParams = {
  projectKey: string;
  boardId: string;
};

function BacklogCards() {
  const { user } = useUserContext();
  const { projectKey, boardId } = useParams<URLParams>();
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showBacklog, setShowBacklog] = useState(true);
  const [displayCreateTask, setDisplayCreateTask] = useState(false);
  const [isHeaderSelected, setIsHeaderSelected] = useState(false);
  const [backlogCards, setBacklogCards] = useState<IssueType[]>([]);

  const [, drop] = useDrop<DragItem>({
    accept: "BACKLOG_CARD",
    drop: (item) => {
      console.log("dropped,sprint to backlog", item);
    },
  });

  const refDisplayCreate = useOutsideClick<HTMLFormElement>(() =>
    setDisplayCreateTask(false)
  );
  const refBacklogSelected = useOutsideClick<HTMLDivElement>(() =>
    setIsHeaderSelected(false)
  );
  function closeModal() {
    setShowModal(false);
  }
  function handleChange(value: string) {
    setContent(value);
  }

  async function loadBacklogCards() {
    try {
      if (!projectKey) {
        console.log(`projectKey not found ${projectKey}`);
        return;
      } else if (!boardId) {
        console.log(`boardId not found ${boardId}`);
        return;
      }
      const { ok, data } = await apiHelper.getBacklogCards(projectKey, boardId);
      if (ok && data) {
        setBacklogCards(data);
      } else {
        console.error("Failed to fetch board. Status:");
      }
    } catch (error) {
      console.error("Error fetching board:", error);
    }
  }

  async function submitNote() {
    try {
      const cardData = {
        content: content,
        status: 0,
        userId: user?.Id,
        projectKey: projectKey,
        boardId: boardId,
      };

      const { ok } = await apiHelper.addCard(cardData);
      if (ok) {
        setContent("");
        await loadBacklogCards();
      }
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  }

  async function updateCard(
    id: string,
    status: number,
    sprintId?: string,
    boardId?: string
  ) {
    const response = await apiHelper.updateCard(id, status, sprintId, boardId);
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
        card.Id === id ? { ...card, status } : card
      )
    );
  }
  function onUpdateContent(card: IssueType) {
    if (!backlogCards) return;
    loadBacklogCards();
    setContent(card.Summary);
  }

  useEffect(() => {
    if (!boardId) {
      setBacklogCards([]);
      return;
    }
    loadBacklogCards();
  }, [boardId, projectKey]);

  function getStatusCount(status: IssueStatus) {
    return backlogCards.filter((card) => card.Status === status).length;
  }
  return (
    <Container>
      <CollapsibleDemo
        trigger={
          <HeaderDropBlog>
            <CheckboxWrapper>
              <CheckboxRadixUi />
            </CheckboxWrapper>
            <HeaderTitleContent
              ref={refBacklogSelected}
              $isSelected={isHeaderSelected} // Pass selected state for border
              onClick={() => setIsHeaderSelected(true)}
            >
              <ArrowIcon
                className="dropdown-trigger"
                as={
                  showBacklog
                    ? KeyboardArrowDownRoundedIcon
                    : KeyboardArrowRightIcon
                }
              />
              <HeaderTitle>Backlog</HeaderTitle>
              <HeaderIssue>({backlogCards.length} issue)</HeaderIssue>
            </HeaderTitleContent>
            <HeaderStatusWrapper>
              <ToolTip
                trigger={
                  <HeaderStatus status={IssueStatus.Backlog}>
                    {getStatusCount(IssueStatus.Backlog)}
                  </HeaderStatus>
                }
                content={` Not started ${getStatusCount(
                  IssueStatus.Backlog
                )} of ${backlogCards.length} `}
              ></ToolTip>
              <ToolTip
                trigger={
                  <HeaderStatus status={IssueStatus.InProgress}>
                    {getStatusCount(IssueStatus.InProgress)}
                  </HeaderStatus>
                }
                content={`In progress ${getStatusCount(
                  IssueStatus.InProgress
                )} of ${backlogCards.length} `}
              ></ToolTip>
              <ToolTip
                trigger={
                  <HeaderStatus status={IssueStatus.Done}>
                    {getStatusCount(IssueStatus.Done)}
                  </HeaderStatus>
                }
                content={`Completed ${getStatusCount(IssueStatus.Done)} of ${
                  backlogCards.length
                } `}
              ></ToolTip>
            </HeaderStatusWrapper>
            <HeaderButtonWrapper>
              <Modal
                trigger={<HeaderButton>Create sprint</HeaderButton>}
                onClose={closeModal}
                open={showModal}
                onChange={setShowModal}
              >
                <FormDemo onClose={closeModal} />
              </Modal>
            </HeaderButtonWrapper>
            <MoreIcon />
          </HeaderDropBlog>
        }
        children={
          <Accordion>
            <BacklogCardList ref={drop}>
              {backlogCards.map((backlogCard) => (
                <BacklogCard
                  onUpdateContent={onUpdateContent}
                  onUpdateCardStatus={updateStatusCard}
                  updateCardsAfterDelete={deleteCard}
                  updateCardAfterDrag={deleteCard}
                  boardId={boardId as string}
                  id={backlogCard.Id}
                  cardKey={backlogCard.Key}
                  content={backlogCard.Summary}
                  status={backlogCard.Status}
                  user={backlogCard.UserId}
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
                  $isSelected={true}
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
                  <CreateIssueButton>Create Issue</CreateIssueButton>
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
