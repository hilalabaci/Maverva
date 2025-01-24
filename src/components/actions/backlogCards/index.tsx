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
import useOutsideClick from "../../../hooks/useOutsideClick";
import CollapsibleDemo from "../../common/collapsible";
import Modal from "../../common/modal";
import FormDemo from "../sprints/edit-sprint";
import {
  CardStatus,
  CardType,
  DragDropCollect,
  DragItem,
} from "../../../types";
import { useUserContext } from "../../../contexts/UserContext";
import apiHelper from "../../../api/apiHelper";
import { useParams } from "react-router-dom";

import { CheckboxWrapper } from "../../features/backlogCard/styles";
import CheckboxRadixUi from "../../common/checkboxRadixUI";
import { ToolTip } from "../../common/toolstip";
import BacklogCard from "../../features/backlogCard";

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
  const [backlogCards, setBacklogCards] = useState<CardType[]>([]);

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
        userId: user?._id,
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
    setBacklogCards(backlogCards.filter((card) => card._id !== id));
  }
  function updateStatusCard(id: string, status: number) {
    setBacklogCards((prevBacklogCards) =>
      prevBacklogCards.map((card) =>
        card._id === id ? { ...card, status } : card
      )
    );
  }
  function onUpdateContent(card: CardType) {
    if (!backlogCards) return;
    loadBacklogCards();
    setContent(card.content);
  }

  useEffect(() => {
    if (!boardId) {
      setBacklogCards([]);
      return;
    }
    loadBacklogCards();
  }, [boardId, projectKey]);

  function getStatusCount(status: CardStatus) {
    return backlogCards.filter((card) => card.status === status).length;
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
                  <HeaderStatus status={CardStatus.Backlog}>
                    {getStatusCount(CardStatus.Backlog)}
                  </HeaderStatus>
                }
                content={` Not started ${getStatusCount(
                  CardStatus.Backlog
                )} of ${backlogCards.length} `}
              ></ToolTip>
              <ToolTip
                trigger={
                  <HeaderStatus status={CardStatus.InProgress}>
                    {getStatusCount(CardStatus.InProgress)}
                  </HeaderStatus>
                }
                content={`In progress ${getStatusCount(
                  CardStatus.InProgress
                )} of ${backlogCards.length} `}
              ></ToolTip>
              <ToolTip
                trigger={
                  <HeaderStatus status={CardStatus.Done}>
                    {getStatusCount(CardStatus.Done)}
                  </HeaderStatus>
                }
                content={`Completed ${getStatusCount(CardStatus.Done)} of ${
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
                  id={backlogCard._id}
                  cardKey={backlogCard.cardKey}
                  content={backlogCard.content}
                  status={backlogCard.status}
                  user={backlogCard.userId}
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
