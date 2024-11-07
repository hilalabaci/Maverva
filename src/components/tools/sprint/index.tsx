import CheckboxRadixUi from "../checkboxRadixUI";
import CollapsibleDemo from "../collapsible";
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
import BacklogCard from "../backlogCard";
import { getStatusLabel } from "../../../utils/label";
import {
  BacklogDragItems,
  CardStatus,
  CardType,
  DragItem,
  SprintType,
} from "../../../types";
import { useDrop } from "react-dnd";
import apiHelper from "../../../api/apiHelper";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";

type SprintPropsType = {
  sprint: SprintType;
  sprintId: string;
  sprintName: string;
  sprintStartDate: Date;
  sprintEndDate: Date;
  onUpdate: (data?: CardType) => void;
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
  onUpdate,
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
  const [getSprintButton, setGetSprintButton] = useState(false);

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
    } else {
      console.error("Failed to update card:", response);
    }
  }

  const [, drop] = useDrop<BacklogDragItems>({
    accept: "BACKLOG_CARD",
    drop: (item) => {
      console.log(selectedSprintId, boardId, item.oldSprintId);
      if (selectedSprintId && boardId) {
        updateCardInfo(
          item.cardId,
          selectedSprintId,
          boardId,
          item.oldSprintId
        );
      } else {
        console.error("selectedSprintId is undefined");
      }
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
        newSprintId: selectedSprintId,
      };

      const { ok, data } = await apiHelper.addCard(cardData);

      // if (response.status === 400) {
      //   console.log("Please check your details");
      //   return;
      // }
      if (ok && data) {
      }
      setContent("");
      // await loadSprints();
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

            {getSprintButton ? (
              <HeaderButtonWrapper>
                <HeaderButton>Complete sprint</HeaderButton>
              </HeaderButtonWrapper>
            ) : (
              <HeaderStatusWrapper>
                <HeaderStatus status={CardStatus.Backlog}>
                  {getStatusCount(CardStatus.Backlog)}
                </HeaderStatus>
                <HeaderStatus status={CardStatus.InProgress}>
                  {getStatusCount(CardStatus.InProgress)}
                </HeaderStatus>
                <HeaderStatus status={CardStatus.Done}>
                  {getStatusCount(CardStatus.InProgress)}
                </HeaderStatus>
              </HeaderStatusWrapper>
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
