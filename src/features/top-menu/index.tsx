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
  SprintSub,
  ToolbarChip,
  ToolbarSpacer,
} from "./styles";
import SprintStripStats from "./SprintStripStats";
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
import { IssueType, ProjectType } from "../../types/user.types";
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
  sprintId?: string;
  sprintGoal?: string;
  sprintIssues?: IssueType[];
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
  sprintIssues = [],
  loadActiveSprint,
}: TopMenuPropsType) {
  const { pathname } = useLocation();
  const { boardId } = useParams<{ boardId: string }>();
  const addPersonModal = useModalState();
  const createBoardModal = useModalState();
  const editSprintModal = useModalState();
  const users = useLoadBoardUsers(projectKey, boardId);

  const isBacklog = pathname.includes("/backlog");
  const pageTitle = isBacklog ? "Backlog" : activeSprintName;
  const endDate = endDateActiveSprint ?? new Date();

  return (
    <Container>
      <TitleHeader>
        <Title>
          <ProjectTitle>{pageTitle}</ProjectTitle>
          {!isBacklog && startDateActiveSprint && (
            <SprintSub>
              <span>📅 <b>{formatDate(startDateActiveSprint)} – {formatDate(endDate)}</b></span>
              <span>· <b>{calculateDaysBetween(new Date(), endDateActiveSprint)} days left</b></span>
              {sprintGoal && <span>· Goal: <b>{sprintGoal}</b></span>}
            </SprintSub>
          )}
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
              content={`Start date: ${formatDate(startDateActiveSprint ?? new Date())}; Projected end date: ${formatDate(endDate)}`}
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

      <SprintStripStats sprintIssues={sprintIssues} />

      <TopNavBar
        projectKey={projectKey}
        boardId={boardId}
        sprintId={sprintId}
        activeCount={sprintIssues.length}
      />

      <SearchAndAssignMemberContainer>
        <Search
          onSearch={setSearchInput}
          placeHolderForSearchButton="Search issues…"
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
                    $userPhotoWidth="26px"
                    $userPhotoHeight="26px"
                    $userPhotoFontSize="10px"
                    $userBorderadius="50%"
                    $fontWeight="500"
                    $userBorder="2px solid var(--app-bg)"
                    $marginLeft="-6px"
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
        {!isBacklog && (
          <>
            <ToolbarChip>Epic: <b>{sprintGoal || "Current sprint"}</b></ToolbarChip>
            <ToolbarChip>Group: Status</ToolbarChip>
          </>
        )}
        <ToolbarSpacer />
        <ToolbarChip>Insights</ToolbarChip>
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
