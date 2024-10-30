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
  Status,
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
} from "./styles";
import useOutsideClick from "../../../hooks/useOutsideClick";
import CollapsibleDemo from "../../tools/collapsible";
import Modal from "../modal";
import FormDemo from "../sprint/edit-sprint";
import { CardStatus, CardType } from "../../../types";
import { useUserContext } from "../../../contexts/UserContext";
import apiHelper from "../../../api/apiHelper";
import { useParams } from "react-router-dom";
import { getStatusLabel } from "../../../utils/label";

type BacklogCardsPropsType = {
  onClose: () => void;
  AddedBacklogCard: (card: CardType) => void;
};
type URLParams = {
  projectKey: string;
  boardId: string;
};

function BacklogCards(props: BacklogCardsPropsType) {
  const { user } = useUserContext();
  const { projectKey, boardId } = useParams<URLParams>();
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showBacklog, setShowBacklog] = useState(true);
  const [displayCreateTask, setDisplayCreateTask] = useState(false);
  const [isHeaderSelected, setIsHeaderSelected] = useState(false);
  const [backlogCards, setBacklogCards] = useState<CardType[]>([]);

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
  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
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
      };

      const { ok, data } = await apiHelper.addCard(cardData);

      // if (response.status === 400) {
      //   console.log("Please check your details");
      //   return;
      // }
      if (ok && data) {
      }
      setContent("");
      props.AddedBacklogCard(data as CardType);
      await loadBacklogCards();
      props.onClose();
    } catch (error) {
      console.error("Error fetching project:", error);
    }
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

  useEffect(() => {
    if (!boardId) {
      setBacklogCards([]);
      return;
    }
    loadBacklogCards();
  }, [boardId, projectKey]);
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
              <HeaderStatus status={0}>0</HeaderStatus>
              <HeaderStatus status={1}>1</HeaderStatus>
              <HeaderStatus status={2}>2</HeaderStatus>
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
          </HeaderDropBlog>
        }
        children={
          <Accordion>
            <BacklogCardList>
              {backlogCards.map((backlogCard) => (
                <BacklogCardListItems>
                  <CheckboxWrapper>
                    <CheckboxRadixUi />
                  </CheckboxWrapper>
                  <CardKey>{backlogCard.cardKey}</CardKey>
                  <ContentWrapper>
                    <ToolTip
                      contentStyle={{ zIndex: 0 }}
                      trigger={
                        <Content>
                          <ContentText>{backlogCard.content}</ContentText>
                          <IconEdit />
                        </Content>
                      }
                      content={backlogCard.content}
                    ></ToolTip>
                  </ContentWrapper>
                  <Status status={backlogCard.status}>
                    <SelectDemo
                      items={statusOptions}
                      onSelect={handleStatusChange}
                      selectedValue={backlogCard.status}
                    />
                  </Status>

                  <MemberWrapper>
                    <ToolTip
                      trigger={
                        <MemberPhoto
                          user={backlogCard.userId}
                          $userPhotoWidth="25px"
                          $userPhotoHeight="25px"
                          $userPhotoFontSize="7px"
                          $userBorderadius="50px"
                        />
                      }
                      content={backlogCard.userId.fullName}
                    ></ToolTip>
                  </MemberWrapper>
                  <MoreIcon />
                </BacklogCardListItems>
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
