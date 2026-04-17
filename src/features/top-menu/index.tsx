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
import { formatDate } from "../../utils/dateUtils";
import { calculateDaysBetween } from "../../utils/calculateDays";
import { DropdownMenu } from "../../components/ui/DropDownMenu";
import OptionalBoardCreate from "../board/optional/create";
import EditSprint from "../sprint/edit-sprint";
import IconButton from "../../components/ui/Button/IconButton";
import TextButton from "../../components/ui/Button/TextButton";
import { ProjectType } from "../../types/user.types";
import { useModalState } from "../../hooks/useModalState";
import { useLoadBoardUsers } from "../../hooks/api/useLoadBoardUsers";
import TopNavBar from "./TopNavBar";

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
  sprintId,
  sprintGoal,
  loadActiveSprint,
}: TopMenuPropsType) {
  const { pathname } = useLocation();
  const { boardId } = useParams<{ boardId: string }>();
  const addPersonModal = useModalState();
  const createBoardModal = useModalState();
  const editSprintModal = useModalState();
  const users = useLoadBoardUsers(projectKey, boardId);

  const pageTitle = pathname.includes("/backlog") ? "Backlog" : activeSprintName;

  return (
    <Container>
      <TitleHeader>
        <Title>
          <ProjectTitle>{pageTitle}</ProjectTitle>
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
            />
            <TextButton>Complete sprint</TextButton>
          </FeaturesSprint>
          <DropdownMenu
            trigger={<IconButton icon="more" />}
            items={[
              { label: "Edit sprint", action: editSprintModal.open },
              { label: "Create board", action: createBoardModal.open },
            ]}
          />
        </FeaturesSprintContainer>
      </TitleHeader>

      <TopNavBar projectKey={projectKey} boardId={boardId} sprintId={sprintId} />

      <SearchAndAssignMemberContainer>
        <Search
          onSearch={(value) => setSearchInput(value)}
          placeHolderForSearchButton="Search"
        />
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
              />
            ))}
          </ButtonStylesforIconPerson>
          <Modal
            trigger={
              <ToolTip
                contentStyle={{ zIndex: 1 }}
                trigger={
                  <ButtonStylesforPersonAdd onClick={addPersonModal.open}>
                    <IconPersonAdd />
                  </ButtonStylesforPersonAdd>
                }
                content="Add people"
              />
            }
            open={addPersonModal.isOpen}
            onChange={addPersonModal.setIsOpen}
            onClose={addPersonModal.close}
          >
            <AddPerson
              closeModal={addPersonModal.close}
              projectTitle={topMenuTitle}
              projectKey={projectKey}
              projectId={projectId}
            />
          </Modal>
        </AssignMemberContainer>
      </SearchAndAssignMemberContainer>

      {createBoardModal.isOpen && (
        <Modal open={createBoardModal.isOpen} onClose={createBoardModal.close}>
          <OptionalBoardCreate
            handleProjectCreate={onProjectUpdate}
            onClose={createBoardModal.close}
          />
        </Modal>
      )}

      {editSprintModal.isOpen && (
        <Modal open={editSprintModal.isOpen} onClose={editSprintModal.close}>
          <EditSprint
            onClose={editSprintModal.close}
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
