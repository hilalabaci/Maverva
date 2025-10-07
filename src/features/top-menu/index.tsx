import { useEffect, useState, useRef } from "react";
import {
  Container,
  ProjectTitle,
  AssignMemberContainer,
  ButtonStylesforPersonAdd,
  IconPersonAdd,
  ButtonStylesforIconPerson,
  TitleHeader,
  Title,
  SearchAndAssignMemberContainer,
  FeaturesSprint,
  FeaturesSprintContainer,
  SprintTime,
  TimeIcon,
} from "./styles";
import MemberPhoto from "../../features/user/member-photo";
import AddPerson from "../AddPerson";
import Search from "../../components/ui/Search";
import { ToolTip } from "../../components/ui/Toolstip";
import { useLocation, useParams } from "react-router-dom";
import Modal from "../../components/ui/Modal";
import { getUserstoBoard } from "../../api/board-api";
import { useUserContext } from "../../contexts/UserContext";
import { formatDate } from "../../utils/dateUtils";
import { calculateDaysBetween } from "../../utils/calculateDays";
import { DropdownMenu } from "../../components/ui/DropDownMenu";
import OptionalBoardCreate from "../board/optional/create";
import EditSprint from "../sprint/edit-sprint";
import IconButton from "../../components/ui/Button/IconButton";
import TextButton from "../../components/ui/Button/TextButton";
import { ProjectType, UserType } from "../../types/user.types";
type TopMenuPropsType = {
  topMenuTitle: string;
  projectId: string;
  projectKey: string;
  onProjectUpdate: (project: ProjectType) => void;
  setSearchInput: (value: string) => void;
  activeSprintName: string;
  startDateActiveSprint?: Date;
  endDateActiveSprint?: Date;
  boardId?: string;
  sprintId?: string;
  sprintGoal?: string;
  loadActiveSprint: () => void;
};

function TopMenu({
  topMenuTitle,
  projectId,
  projectKey,
  onProjectUpdate,
  setSearchInput,
  activeSprintName,
  startDateActiveSprint,
  endDateActiveSprint,
  //  boardId,
  sprintId,
  sprintGoal,
  loadActiveSprint,
}: TopMenuPropsType) {
  const hasFetchedProjects = useRef(false);
  const location = useLocation();
  const { user, token } = useUserContext();
  const { boardId } = useParams<{ boardId: string }>();
  const [projectTitle, setProjectTitle] = useState(topMenuTitle);
  const [showModal, setShowModal] = useState(false);
  const [createBoardModal, setCreateBoardModal] = useState(false);
  const [editSprintModal, setEditSprintModal] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
  function openCreateBoardModal() {
    setCreateBoardModal(true);
  }
  function closeCreateBoardModal() {
    setCreateBoardModal(false);
  }
  function openEditSprintModal() {
    setEditSprintModal(true);
  }
  function closeEditSprintModal() {
    setEditSprintModal(false);
  }

  useEffect(() => {
    setProjectTitle(topMenuTitle);
  }, [topMenuTitle]);

  async function loadUsers(
    projectKey: string,
    boardId: string,
    userId: string,
    token: string
  ) {
    try {
      if (!token) return;
      const response = await getUserstoBoard(
        projectKey,
        boardId,
        userId,
        token
      );
      if (response.ok) {
        const data = response.data as { users: UserType[] };
        setUsers(data.users);
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  useEffect(() => {
    if (
      !projectKey ||
      !boardId ||
      !user?.Id ||
      hasFetchedProjects.current ||
      !token
    )
      return;
    hasFetchedProjects.current = true;
    loadUsers(projectKey, boardId, user.Id, token);
  }, [boardId, user, projectKey, token]);

  const onSearch = (value: string) => {
    setSearchInput(value);
  };

  return (
    <Container>
      <TitleHeader>
        <Title>
          <ProjectTitle>
            {location.pathname.includes("/backlog")
              ? "Backlog"
              : activeSprintName}
          </ProjectTitle>
        </Title>
        <FeaturesSprintContainer>
          <FeaturesSprint>
            <ToolTip
              trigger={
                <SprintTime>
                  <TimeIcon />
                  {calculateDaysBetween(new Date(), endDateActiveSprint)}
                </SprintTime>
              }
              content={`Start date: ${formatDate(
                startDateActiveSprint || new Date()
              )}; Projected end date: ${formatDate(
                endDateActiveSprint || new Date()
              )}`}
            ></ToolTip>
            <TextButton>Complete sprint</TextButton>
          </FeaturesSprint>
          <DropdownMenu
            trigger={<IconButton icon="more" />}
            items={[
              {
                label: "Edit sprint",
                action: openEditSprintModal,
              },
              {
                label: "Create board",
                action: openCreateBoardModal,
              },
            ]}
          />
        </FeaturesSprintContainer>
      </TitleHeader>
      <SearchAndAssignMemberContainer>
        <Search onSearch={onSearch} placeHolderForSearchButton="Search" />
        <AssignMemberContainer>
          <ButtonStylesforIconPerson>
            {users.map((user, index) => (
              <ToolTip
                key={user.Id}
                contentStyle={{ zIndex: users.length - index }}
                trigger={
                  <MemberPhoto
                    key={user.Id}
                    $userPhotoWidth="40px"
                    $userPhotoHeight="40px"
                    $userPhotoFontSize="12px"
                    $userBorderadius="50px"
                    $fontWeight="600"
                    $userBorder="2px solid white"
                    $marginLeft="-9px"
                    user={user}
                  />
                }
                content={user.FullName}
              ></ToolTip>
            ))}
          </ButtonStylesforIconPerson>
          <Modal
            trigger={
              <ToolTip
                contentStyle={{ zIndex: 1 }}
                trigger={
                  <ButtonStylesforPersonAdd onClick={openModal}>
                    <IconPersonAdd />
                  </ButtonStylesforPersonAdd>
                }
                content="Add people"
              ></ToolTip>
            }
            open={showModal}
            onChange={setShowModal}
            onClose={closeModal}
          >
            <AddPerson
              closeModal={closeModal}
              projectTitle={projectTitle}
              projectKey={projectKey}
              projectId={projectId}
            />
          </Modal>
        </AssignMemberContainer>
      </SearchAndAssignMemberContainer>
      {createBoardModal && (
        <Modal open={createBoardModal} onClose={closeCreateBoardModal}>
          <OptionalBoardCreate
            handleProjectCreate={onProjectUpdate}
            onClose={closeCreateBoardModal}
          />
        </Modal>
      )}
      {editSprintModal && (
        <Modal open={editSprintModal} onClose={closeEditSprintModal}>
          <EditSprint
            onClose={closeEditSprintModal}
            startSprintDate={startDateActiveSprint}
            endSprintDate={endDateActiveSprint}
            sprintTitle={activeSprintName}
            sprintId={sprintId}
            sprintGoalProps={sprintGoal}
            loadActiveSprint={loadActiveSprint}
          />
        </Modal>
      )}
    </Container>
  );
}
export default TopMenu;
