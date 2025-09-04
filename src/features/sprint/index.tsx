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
  EditSprintButton,
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
import { useDrop } from "react-dnd";
import { useParams } from "react-router-dom";
import BacklogCard from "../backlogCard";
import { DragItem, IssueStatus, IssueType, SprintType } from "../../types";
import { useUserContext } from "../../contexts/UserContext";
import useOutsideClick from "../../hooks/useOutsideClick";
import CollapsibleDemo from "../../components/common/collapsible";
import CheckBox from "../../components/forms/checkBox";
import { ToolTip } from "../../components/common/toolstip";
import { addIssue, updateIssue } from "../../api/issueApi";
import { updateSprint } from "../../api/sprintApi";
import { DropdownMenu } from "../../components/common/dropdownMenu";
import Modal from "../../components/common/modal";
import EditSprint from "./edit-sprint";

type SprintPropsType = {
  sprint: SprintType;
  sprintId: string;
  sprintName: string;
  sprintStartDate: Date;
  sprintEndDate: Date;
  sprintIsActive: boolean;
  sprintGoal: string;
  onUpdate: (data?: IssueType) => void;
  activeToSprint: (id: string) => boolean;
  loadActiveSprint: () => void;
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
  sprintGoal,
  loadActiveSprint,
}: SprintPropsType) {
  const { boardId, projectKey } = useParams<URLParams>();
  const { user, token } = useUserContext();
  const [showBacklog, setShowBacklog] = useState(true);
  const [displayCreateTask, setDisplayCreateTask] = useState(false);
  const [isHeaderSelected, setIsHeaderSelected] = useState(false);
  const [content, setContent] = useState("");
  const [selectedSprintId, setSelectedSprintId] = useState<string | undefined>(
    sprintId
  );
  const [sprintCards, setSprintCards] = useState<IssueType[]>(
    sprint.Issues ?? []
  );
  const [isActiveSprint, setIsActiveSprint] = useState<boolean>(sprintIsActive);
  const [editSprintModal, setEditSprintModal] = useState(false);

  async function updateCardInfo(
    issueId: string,
    newSprintId: string,
    boardId: string,
    oldSprintId?: string
  ) {
    if (!token) return;
    const response = await updateIssue(
      token,
      issueId,
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

  const handleDrop = async (item: DragItem) => {
    if (selectedSprintId && boardId) {
      const updatedCard = await updateCardInfo(
        item.issueId,
        selectedSprintId,
        boardId,
        item.oldSprintId
      );
      if (updatedCard) {
        setSprintCards((prevCards) => {
          const updatedCards = prevCards.filter(
            (card) => card.Id !== updatedCard.Id
          );
          updatedCards.push(updatedCard);
          return updatedCards;
        });
      }
      return updatedCard;
    } else {
      return undefined;
    }
  };

  const [, drop] = useDrop<DragItem>({
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
    if (!projectKey || !boardId || !selectedSprintId || !token) return;
    try {
      const cardData = {
        content: content,
        status: 1,
        userId: user?.Id,
        projectKey: projectKey,
        boardId: boardId,
        sprintId: selectedSprintId,
      };

      const { ok, data } = await addIssue(cardData, token);
      if (ok && data) {
        setSprintCards((prevCards) => [...prevCards, data as IssueType]);
      }
      setContent("");
    } catch (error) {
      console.error("Error fetching project:", error);
      setSprintCards([]);
    }
  }

  function deleteCard(id: string) {
    setSprintCards(sprintCards.filter((card) => card.Id !== id));
  }
  function getStatusCount(status: IssueStatus) {
    if (!sprintCards) return 0;
    return sprintCards.filter((card) => card.Status === status).length;
  }

  function updateStatusCard(id: string, status: number) {
    setSprintCards((prevBacklogCards) =>
      prevBacklogCards.map((card) =>
        card.Id === id ? { ...card, Status: status } : card
      )
    );
  }

  async function updateSprintActive(
    boardId?: string,
    sprintId?: string,
    userId?: string,
    active?: boolean,
    projectKey?: string
  ) {
    if (!boardId || !token) return;
    const editSprintData = {
      boardId: boardId,
      sprintId: sprintId,
      userId: userId,
      isActiveSprint: !active,
    };
    const response = await updateSprint(
      token,
      editSprintData,
      projectKey as string,
      boardId as string
    );
    if (response.ok && response.data) {
      setIsActiveSprint(true);
      // props.onUpdate(response.data);
    } else {
      console.error("Failed to update card:", response);
    }
  }
  function onUpdateContent(card: IssueType) {
    if (!sprintCards) return;
    setContent(card.Summary);
  }
  function openEditSprintModal() {
    setEditSprintModal(true);
  }
  function closeEditSprintModal() {
    setEditSprintModal(false);
  }

  return (
    <Container key={sprintId} ref={drop}>
      <CollapsibleDemo
        trigger={
          <HeaderDropBlog>
            <CheckboxWrapper>
              <CheckBox />
            </CheckboxWrapper>

            <HeaderTitleContent
              ref={refBacklogSelected}
              $selected={isHeaderSelected}
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
              <HeaderIssue>({sprint.Issues?.length ?? 0} issue)</HeaderIssue>
            </HeaderTitleContent>
            <HeaderStatusWrapper>
              <ToolTip
                trigger={
                  <HeaderStatus status={IssueStatus.ToDo}>
                    {getStatusCount(IssueStatus.ToDo)}
                  </HeaderStatus>
                }
                content={` Not started ${getStatusCount(IssueStatus.ToDo)} of ${
                  sprint.Issues?.length ?? 0
                } `}
              ></ToolTip>
              <ToolTip
                trigger={
                  <HeaderStatus status={IssueStatus.InProgress}>
                    {getStatusCount(IssueStatus.InProgress)}
                  </HeaderStatus>
                }
                content={` In progress ${getStatusCount(
                  IssueStatus.InProgress
                )} of ${sprint.Issues?.length ?? 0} `}
              ></ToolTip>
              <ToolTip
                trigger={
                  <HeaderStatus status={IssueStatus.Done}>
                    {getStatusCount(IssueStatus.Done)}
                  </HeaderStatus>
                }
                content={`Completed ${getStatusCount(IssueStatus.Done)} of ${
                  sprint.Issues?.length ?? 0
                } `}
              ></ToolTip>
            </HeaderStatusWrapper>
            {activeToSprint(sprint.Id) ? (
              <HeaderButtonWrapper>
                {isActiveSprint ? (
                  <HeaderButton $isActive={true}>Complete sprint</HeaderButton>
                ) : (
                  <HeaderButton
                    onClick={() =>
                      updateSprintActive(
                        boardId,
                        sprintId,
                        user?.Id,
                        isActiveSprint
                      )
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
            <DropdownMenu
              trigger={
                <EditSprintButton
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <MoreIcon />
                </EditSprintButton>
              }
              items={[
                {
                  action: openEditSprintModal,
                  label: "Edit sprint",
                },
                {
                  action: () => {},
                  label: "Delete sprint",
                },
              ]}
            ></DropdownMenu>
          </HeaderDropBlog>
        }
        children={
          <Accordion>
            <BacklogCardList>
              {sprintCards.map((card) => (
                <BacklogCard
                  key={card.Id}
                  id={card.Id}
                  cardKey={card.Key}
                  content={card.Summary}
                  status={card.Status}
                  reporterUser={card.ReporterUser}
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
                  $selected={true}
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
                  <CreateIssueButton>Create issue</CreateIssueButton>
                </CreateButtonWrapper>
              )}
            </DisplayCreateWrapper>
          </Accordion>
        }
        open={showBacklog}
        setOpen={setShowBacklog}
      ></CollapsibleDemo>
      {editSprintModal && (
        <Modal open={editSprintModal} onClose={closeEditSprintModal}>
          <EditSprint
            onClose={closeEditSprintModal}
            startSprintDate={sprintStartDate}
            endSprintDate={sprintEndDate}
            sprintTitle={sprintName}
            sprintId={sprintId}
            sprintGoalProps={sprintGoal}
            loadActiveSprint={loadActiveSprint}
          />
        </Modal>
      )}
    </Container>
  );
}
export default Sprint;
