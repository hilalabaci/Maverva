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
}: SprintPropsType) {
  const { boardId, projectKey } = useParams<URLParams>();
  const { user } = useUserContext();
  const [showBacklog, setShowBacklog] = useState(true);
  const [displayCreateTask, setDisplayCreateTask] = useState(false);
  const [isHeaderSelected, setIsHeaderSelected] = useState(false);
  const [content, setContent] = useState("");
  const [selectedSprintId, setSelectedSprintId] = useState<String>();

  const [, drop] = useDrop<BacklogDragItems>({
    accept: "BACKLOG_CARD",
    drop: (item) => {
      console.log("dropped", item);
    },
  });

  const statusOptions = [
    { label: getStatusLabel(CardStatus.Backlog), value: CardStatus.Backlog },
    { label: getStatusLabel(CardStatus.ToDo), value: CardStatus.ToDo },
    {
      label: getStatusLabel(CardStatus.InProgress),
      value: CardStatus.InProgress,
    },
    { label: getStatusLabel(CardStatus.Done), value: CardStatus.Done },
  ];

  const refDisplayCreate = useOutsideClick<HTMLFormElement>(() =>
    setDisplayCreateTask(false)
  );
  const refBacklogSelected = useOutsideClick<HTMLDivElement>(() =>
    setIsHeaderSelected(false)
  );

  const handleStatusChange = (status: string) => {
    console.log("Selected status:", status);
  };
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
      console.log(` this is a selecttedSprintId${"selectedSprintId"}`);

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
                ({sprint.cardIds ? sprint.cardIds.length : 0})
              </HeaderIssue>
            </HeaderTitleContent>

            <HeaderStatusWrapper>
              <HeaderStatus status={0}>0</HeaderStatus>
              <HeaderStatus status={1}>8</HeaderStatus>
              <HeaderStatus status={2}>2</HeaderStatus>
            </HeaderStatusWrapper>
            <HeaderButtonWrapper>
              <HeaderButton>Complete sprint</HeaderButton>
            </HeaderButtonWrapper>
            <MoreIcon />
          </HeaderDropBlog>
        }
        children={
          <Accordion>
            <BacklogCardList>
              {sprint.cardIds?.map((card) => (
                <BacklogCard
                  id={card._id}
                  cardKey={card.cardKey}
                  content={card.content}
                  status={0}
                  user={card.userId}
                  sprintId={sprintId}
                  boardId={boardId as string}
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
