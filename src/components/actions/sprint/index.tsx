import { useEffect, useState } from "react";
import CheckboxRadixUi from "../../../components/tools/checkboxRadixUI";
import SelectDemo from "../../../components/tools/selectDemo";
import { ToolTip } from "../../../components/tools/toolstip";
import MemberPhoto from "../../../components/tools/user/member-photo";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Accordion,
  BacklogCardList,
  BacklogCardListItems,
  CardKey,
  Container,
  HeaderDropBlog,
  Content,
  IconEdit,
  MoreIcon,
  MemberWrapper,
  CheckboxWrapper,
  ContentWrapper,
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
  ContentText,
  Duration,
} from "./styles";
import useOutsideClick from "../../../hooks/useOutsideClick";
import CollapsibleDemo from "../../tools/collapsible";
import { CardStatus, SprintType } from "../../../types";
import { useParams } from "react-router-dom";
import apiHelper from "../../../api/apiHelper";
import { useUserContext } from "../../../contexts/UserContext";
import { Status } from "../backlogCards/styles";
import { getStatusLabel } from "../../../utils/label";

type URLParams = {
  projectKey: string;
  boardId?: string;
};

function Sprint() {
  const { boardId, projectKey } = useParams<URLParams>();
  const { user } = useUserContext();
  const [showSprint, setShowSprint] = useState(true);
  const [displayCreateTask, setDisplayCreateTask] = useState(false);
  const [isHeaderSelected, setIsHeaderSelected] = useState(false);
  const [sprints, setSprints] = useState<SprintType[]>([]);
  const [selectedSprintId, setSelectedSprintId] = useState<string>();
  const [content, setContent] = useState("");

  const statusOptions = [
    { label: getStatusLabel(CardStatus.Backlog), value: CardStatus.Backlog },
    { label: getStatusLabel(CardStatus.ToDo), value: CardStatus.ToDo },
    {
      label: getStatusLabel(CardStatus.InProgress),
      value: CardStatus.InProgress,
    },
    { label: getStatusLabel(CardStatus.Done), value: CardStatus.Done },
  ];

  const handleStatusChange = (status: string) => {
    console.log("Selected status:", status);
    // Handle the selected status
  };

  const refDisplayCreate = useOutsideClick<HTMLFormElement>(() =>
    setDisplayCreateTask(false)
  );
  const refBacklogSelected = useOutsideClick<HTMLDivElement>(() =>
    setIsHeaderSelected(false)
  );

  async function loadSprints() {
    if (!boardId) {
      console.log(`boardId not found ${boardId}`);
      return;
    }
    try {
      const { ok, data } = await apiHelper.getSprints(boardId);
      if (ok && data) setSprints(data);
    } catch (error) {
      console.error("Fetch error:", error);
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
        sprintId: selectedSprintId,
      };
      console.log(` this is a selecttedSprintId${selectedSprintId}`);

      const { ok, data } = await apiHelper.addCard(cardData);

      // if (response.status === 400) {
      //   console.log("Please check your details");
      //   return;
      // }
      if (ok && data) {
      }
      setContent("");
      await loadSprints();
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  }
  function handleChange(value: string) {
    setContent(value);
  }

  useEffect(() => {
    if (boardId) {
      loadSprints();
    }
  }, [boardId]);
  return (
    <>
      {sprints.map((sprint) => (
        <Container key={sprint._id}>
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
                    setSelectedSprintId(sprint._id);
                  }}
                >
                  <ArrowIcon
                    className="dropdown-trigger"
                    as={
                      showSprint
                        ? KeyboardArrowDownRoundedIcon
                        : KeyboardArrowRightIcon
                    }
                  />
                  <HeaderTitle>{sprint.name}</HeaderTitle>
                  <Duration>
                    {sprint.startDate && sprint.endDate
                      ? `${new Date(
                          sprint.startDate
                        ).toLocaleDateString()} - ${new Date(
                          sprint.endDate
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
                    <BacklogCardListItems>
                      <CheckboxWrapper>
                        <CheckboxRadixUi />
                      </CheckboxWrapper>
                      <CardKey>{card.cardKey}</CardKey>
                      <ContentWrapper>
                        <ToolTip
                          contentStyle={{ zIndex: 0 }}
                          trigger={
                            <Content>
                              <ContentText>{card.content}</ContentText>
                              <IconEdit />
                            </Content>
                          }
                          content="mehmetle api yapmehmetle api yap"
                        ></ToolTip>
                      </ContentWrapper>
                      <Status status={card.status}>
                        <SelectDemo
                          items={statusOptions}
                          onSelect={handleStatusChange}
                          selectedValue={card.status}
                        />
                      </Status>
                      <MemberWrapper>
                        <MemberPhoto
                          $userPhotoWidth="25px"
                          $userPhotoHeight="25px"
                          $userPhotoFontSize="7px"
                          $userBorderadius="50px"
                        />
                      </MemberWrapper>
                      <MoreIcon />
                    </BacklogCardListItems>
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
                        setSelectedSprintId(sprint._id);
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
            open={showSprint}
            setOpen={setShowSprint}
          ></CollapsibleDemo>
        </Container>
      ))}
    </>
  );
}
export default Sprint;
