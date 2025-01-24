import CheckboxRadixUi from "../../forms/checkboxRadixUI";
import CollapsibleDemo from "../../common/collapsible";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Accordion,
  ArrowIcon,
  BacklogCardList,
  CheckboxWrapper,
  Container,
  CreateButtonWrapper,
  CreateIssueButton,
  DisplayCreateWrapper,
  Duration,
  Form,
  HeaderButton,
  HeaderButtonWrapper,
  HeaderDropBlog,
  HeaderIssue,
  HeaderStatus,
  HeaderStatusWrapper,
  HeaderTitle,
  HeaderTitleContent,
  IconAdd,
  MoreIcon,
  TextCreate,
} from "./styles";
import { useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";

import {
  BacklogDragItems,
  CardStatus,
  CardType,
  SprintType,
} from "../../../types";
import { useDrop } from "react-dnd";
import apiHelper from "../../../api/apiHelper";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";
import { ToolTip } from "../../common/toolstip";
import BacklogCard from "../backlogCard";

type SprintPropsType = {
  sprint: SprintType;
  sprintId: string;
  sprintName: string;
  sprintStartDate: Date;
  sprintEndDate: Date;
  sprintIsActive: boolean;
  onUpdate: (data?: CardType) => void;
  activeToSprint: (id: string) => boolean;
};

type URLParams = {
  projectKey: string;
  boardId?: string;
};

function Sprint({
  sprint,
  sprintId,
  sprintName,
  sprintStartDate,
  sprintEndDate,
  sprintIsActive,
  onUpdate,
  activeToSprint,
}: SprintPropsType) {
  const { boardId, projectKey } = useParams<URLParams>();
  const { user } = useUserContext();
  const [showBacklog, setShowBacklog] = useState(true);
  const [displayCreateTask, setDisplayCreateTask] = useState(false);
  const [isHeaderSelected, setIsHeaderSelected] = useState(false);
  const [content, setContent] = useState("");
  const [selectedSprintId, setSelectedSprintId] = useState<string | undefined>(
    sprintId
  );
  const [sprintCards, setSprintCards] = useState<CardType[]>(sprint.cardIds);
  const [isActiveSprint, setIsActiveSprint] = useState(sprintIsActive);

  async function updateCardInfo(
    id: string,
    newSprintId: string,
    boardId: string,
    oldSprintId?: string
  ) {
    const response = await apiHelper.updateCard(
      id,
      undefined,
      newSprintId,
      oldSprintId,
      boardId
    );
    if (response.ok && response.data) {
      onUpdate(response.data);
      return response.data;
    } else {
      console.error("Failed to update card:", response);
    }
  }

  const handleDrop = async (item: BacklogDragItems) => {
    if (selectedSprintId && boardId) {
      const updatedCard = await updateCardInfo(
        item.cardId,
        selectedSprintId,
        boardId,
        item.oldSprintId
      );
      if (updatedCard) {
        setSprintCards((prevCards) => {
          const updatedCards = prevCards.filter(
            (card) => card._id !== updatedCard._id
          );
          updatedCards.push(updatedCard);
          return updatedCards;
        });
      }
      return updatedCard;
    } else {
      console.error("selectedSprintId is undefined");
      return undefined;
    }
  };

  const [, drop] = useDrop<BacklogDragItems>({
    accept: "BACKLOG_CARD",
    drop: (item) => {
      return {
        droppedCard: handleDrop(item),
      };
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
  async function submitNote() {
    try {
      const cardData = {
        content: content,
        status: 0,
        userId: user?._id,
        projectKey: projectKey,
        boardId: boardId,
        sprintId: selectedSprintId,
      };

      const { ok, data } = await apiHelper.addCard(cardData);
      if (ok && data) {
        setSprintCards((prevCards) => [...prevCards, data as CardType]);
      }
      setContent("");
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  }

  function deleteCard(id: string) {
    setSprintCards(sprintCards.filter((card) => card._id !== id));
  }
  function getStatusCount(status: CardStatus) {
    return sprintCards.filter((card) => card.status === status).length;
  }

  function updateStatusCard(id: string, status: number) {
    setSprintCards((prevBacklogCards) =>
      prevBacklogCards.map((card) =>
        card._id === id ? { ...card, status } : card
      )
    );
  }
  async function updateSprintActive(
    sprintId: string,
    active: boolean,
    boardId?: string
  ) {
    {
      if (!boardId) return;
      const response = await apiHelper.updateSprint(sprintId, active, boardId);
      if (response.ok && response.data) {
        setIsActiveSprint(true);
        console.log("hereee");
        // props.onUpdate(response.data);
      } else {
        console.error("Failed to update card:", response);
      }
    }
  }
  function onUpdateContent(card: CardType) {
    if (!sprintCards) return;
    setContent(card.content);
  }

  return (
    <Container key={sprintId} ref={drop}>
      <CollapsibleDemo
        trigger={
          <HeaderDropBlog>
            <CheckboxWrapper>
              <CheckboxRadixUi />
            </CheckboxWrapper>

            <HeaderTitleContent
              ref={refBacklogSelected}
              $isSelected={isHeaderSelected}
              onClick={() => {
                setIsHeaderSelected(true);
              }}
            >
              <ArrowIcon
                className="dropdown-trigger"
                as={
                  showBacklog
                    ? KeyboardArrowDownRoundedIcon
                    : KeyboardArrowRightIcon
                }
              />
              <HeaderTitle>{sprintName}</HeaderTitle>
              <Duration>
                {sprintStartDate && sprintEndDate
                  ? `${new Date(
                      sprintStartDate
                    ).toLocaleDateString()} - ${new Date(
                      sprintEndDate
                    ).toLocaleDateString()}`
                  : "Date not available"}
              </Duration>
              <HeaderIssue>
                ({sprint.cardIds ? sprint.cardIds.length : 0} issue)
              </HeaderIssue>
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
                )} of ${sprint.cardIds.length} `}
              ></ToolTip>
              <ToolTip
                trigger={
                  <HeaderStatus status={CardStatus.InProgress}>
                    {getStatusCount(CardStatus.InProgress)}
                  </HeaderStatus>
                }
                content={` In progress ${getStatusCount(
                  CardStatus.InProgress
                )} of ${sprint.cardIds.length} `}
              ></ToolTip>
              <ToolTip
                trigger={
                  <HeaderStatus status={CardStatus.Done}>
                    {getStatusCount(CardStatus.Done)}
                  </HeaderStatus>
                }
                content={`Completed ${getStatusCount(CardStatus.Done)} of ${
                  sprint.cardIds.length
                } `}
              ></ToolTip>
            </HeaderStatusWrapper>
            {activeToSprint(sprint._id) ? (
              <HeaderButtonWrapper>
                {isActiveSprint ? (
                  <HeaderButton $isActive={true}>Complete sprint</HeaderButton>
                ) : (
                  <HeaderButton
                    onClick={() =>
                      updateSprintActive(sprintId, isActiveSprint, boardId)
                    }
                    $isActive={false}
                  >
                    Start sprint
                  </HeaderButton>
                )}
              </HeaderButtonWrapper>
            ) : (
              <HeaderButtonWrapper></HeaderButtonWrapper>
            )}

            <MoreIcon />
          </HeaderDropBlog>
        }
        children={
          <Accordion>
            <BacklogCardList>
              {sprintCards.map((card) => (
                <BacklogCard
                  id={card._id}
                  cardKey={card.cardKey}
                  content={card.content}
                  status={card.status}
                  user={card.userId}
                  sprintId={sprintId}
                  boardId={boardId as string}
                  updateCardsAfterDelete={deleteCard}
                  onUpdateCardStatus={updateStatusCard}
                  updateCardAfterDrag={deleteCard}
                  onUpdateContent={onUpdateContent}
                />
              ))}
            </BacklogCardList>
            <DisplayCreateWrapper>
              {displayCreateTask ? (
                <Form
                  ref={refDisplayCreate}
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitNote();
                  }}
                  $isSelected={true}
                >
                  <TextCreate
                    value={content}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="What needs to be done?"
                  ></TextCreate>
                </Form>
              ) : (
                <CreateButtonWrapper
                  onClick={() => {
                    setSelectedSprintId(sprintId);
                    setDisplayCreateTask(true);
                  }}
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
export default Sprint;
