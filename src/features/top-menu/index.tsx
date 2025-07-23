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
  MoreIcon,
  EditSprintButton,
  FeaturesSprint,
  FeaturesSprintContainer,
  CompleteSprintButton,
  SprintTime,
  TimeIcon,
} from "./styles";
import MemberPhoto from "../../features/user/member-photo";
import AddPerson from "../../features/addPerson";
import Search from "../../components/common/search";
import { ToolTip } from "../../components/common/toolstip";
import { useLocation, useParams } from "react-router-dom";
import Modal from "../../components/common/modal";
import { ProjectType, UserType } from "../../types";
import { getUserstoBoard } from "../../api/boardApi";
import { useUserContext } from "../../contexts/UserContext";
import { formatDate } from "../../utils/dateUtils";
import { calculateDaysBetween } from "../../utils/calculateDays";
import { DropdownMenu } from "../../components/common/dropdownMenu";
import OptionalBoardCreate from "../board/optional/create";
import EditSprint from "../sprint/edit-sprint";
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
  const { boardId } = useParams<{ boardId: string }>();
  const [projectTitle, setProjectTitle] = useState(topMenuTitle);
  const [showModal, setShowModal] = useState(false);
  const [createBoardModal, setCreateBoardModal] = useState(false);
  const [editSprintModal, setEditSprintModal] = useState(false);
  const { user } = useUserContext();
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
    userId: string
  ) {
    try {
      const response = await getUserstoBoard(projectKey, boardId, userId);
      if (response.ok) {
        const data = response.data as { users: UserType[] };
        setUsers(data.users);
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  useEffect(() => {
    if (!projectKey || !boardId || !user?.Id || hasFetchedProjects.current)
      return;
    hasFetchedProjects.current = true;
    loadUsers(projectKey, boardId, user.Id);
  }, [boardId, user]);

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

            <CompleteSprintButton>Complete sprint</CompleteSprintButton>
          </FeaturesSprint>
          <DropdownMenu
            trigger={
              <EditSprintButton>
                <MoreIcon />
              </EditSprintButton>
            }
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
