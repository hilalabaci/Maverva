import { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import OptionalBoardCreate from "../../board/optional/create";
import ProjectAvatar from "../../../features/user/project-avatar";
import { useLocation, useParams } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";
import { useApplicationContext } from "../../../contexts/ApplicationContext";
import CollapsibleDemo from "../../../components/common/collapsible";
import Scroll from "../../../components/common/scroll";
import Modal from "../../../components/common/modal";
import { BoardType, ProjectType } from "../../../types";
import {
  Container,
  Wrapper,
  AddProjectWrapper,
  UserInfo,
  ProjectTitle,
  Title,
  ArrowIcon,
  ProjectBoardContainer,
  ProjectBoardTitle,
  BoardWrapper,
  GetBoardsContainer,
  SelectedBoard,
  ProjectBoardTitleWrapper,
  GetBoardsList,
  GetBoardsListItem,
  SideBarElement,
  SideBarElementWrapper,
  SideBarElementIcon,
  IconListBullet,
  SideBarItem,
  SideBarWrapper,
  SideBarListWrapper,
  IconCalendarViewWeek,
  TitleGetBoards,
  CreateBoardinBoards,
  IconPlus,
} from "./styles";
import { getBoards } from "../../../api/boardApi";

type ProjectMenuPropsType = {
  ProjectTitleProps: string;
  hideMenu: boolean;
  projectId: string;
  onHover?: (hover: boolean) => void;
  selectedProjectsTitle: string | undefined;
  projectKey: string;
};
type URLParams = {
  boardId?: string;
};
function ProjectMenu({
  hideMenu,
  projectId,
  onHover,
  projectKey,
}: ProjectMenuPropsType) {
  const hasFetchedBoards = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { boardId } = useParams<URLParams>();
  const { user, token } = useUserContext();
  const { activeSprint, selectedProject, setSelectedBoard } =
    useApplicationContext();
  const [boards, setBoards] = useState<BoardType[]>([]);
  const [showBoards, setShowBoards] = useState(false);
  const isBacklog = location.pathname.includes("/backlog");
  const isActiveSprint = !isBacklog;
  const selectedBoard = boards.find((b) => b.Id === boardId);
  const [showModalforCreateButton, setShowModalforCreateButton] =
    useState(false);

  function openModalforCreateButton() {
    setShowModalforCreateButton(true);
  }
  function closeModalforCreateButton() {
    setShowModalforCreateButton(false);
  }
  const loadBoards = useCallback(async () => {
    if (!user || !projectKey || !token) return;
    const { ok, data } = await getBoards(projectKey, user.Id, token);
    if (ok && data) {
      setBoards(data);
    }
  }, [user, projectKey, token]);

  useEffect(() => {
    if (hasFetchedBoards.current) return;
    hasFetchedBoards.current = true;
    loadBoards();
  }, [projectKey, projectId, loadBoards]);

  useEffect(() => {
    if (boards.length > 0 && !boardId) {
      const firstBoard = boards[0];
      if (firstBoard) {
        navigate(`/projects/${projectKey}/boards/${firstBoard.Id}/backlog`, {
          replace: true,
        });
      }
    }
  }, [boards, boardId, navigate, projectKey]);
  const activeSprintId = selectedBoard?.Sprints?.[0]?.Id;

  return (
    <Container
      $hidden={hideMenu}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      <Wrapper>
        <UserInfo $hidden={hideMenu}>
          <ProjectAvatar
            $hidden={hideMenu}
            $userPhotoWidth="30px"
            $userPhotoHeight="30px"
            $userPhotoFontSize="1px"
            $userBorderadius="3px"
            $fontWeight="600"
            projectId={projectId}
          />
          <ProjectTitle $hidden={hideMenu}>
            {selectedProject?.Name}
          </ProjectTitle>
        </UserInfo>
        <AddProjectWrapper $hidden={hideMenu}>
          <SideBarItem>
            <Title>Planning</Title>
            <SideBarWrapper>
              <BoardWrapper>
                <CollapsibleDemo
                  open={showBoards}
                  setOpen={setShowBoards}
                  trigger={
                    <ProjectBoardContainer>
                      <ProjectBoardTitleWrapper>
                        <ProjectBoardTitle>
                          {selectedBoard?.Name}
                        </ProjectBoardTitle>
                        <ArrowIcon
                          className="dropdown-trigger"
                          as={
                            showBoards
                              ? KeyboardArrowUpRoundedIcon
                              : KeyboardArrowDownRoundedIcon
                          }
                        />
                      </ProjectBoardTitleWrapper>
                      <SelectedBoard>Board</SelectedBoard>
                    </ProjectBoardContainer>
                  }
                >
                  <GetBoardsContainer>
                    <Scroll scrollheight="min-content">
                      <GetBoardsList>
                        <TitleGetBoards>
                          Boards in {selectedBoard?.Name}
                        </TitleGetBoards>

                        {boards.map((board) => (
                          <GetBoardsListItem
                            //to={`/projects/${projectKey}/boards/${boardId}/sprints/${activeSprint?.Id}`}
                            key={board.Id}
                            selected={selectedBoard?.Id === board.Id}
                            onClick={() => {
                              setShowBoards(false);

                              const isBacklogPage =
                                location.pathname.includes("/backlog");
                              // const activeSprintId = board.Sprints?.[0]?.Id;
                              setSelectedBoard(board);
                              if (isBacklogPage) {
                                navigate(
                                  `/projects/${projectKey}/boards/${board.Id}/backlog`
                                );
                              } else if (activeSprintId) {
                                navigate(
                                  `/projects/${projectKey}/boards/${board.Id}/sprints/${activeSprintId}`
                                );
                              } else {
                                navigate(
                                  `/projects/${projectKey}/boards/${board.Id}/backlog`
                                );
                              }
                            }}
                          >
                            <SideBarElementIcon>
                              <IconCalendarViewWeek strokeWidth="10px" />
                            </SideBarElementIcon>
                            {board.Name}
                          </GetBoardsListItem>
                        ))}
                      </GetBoardsList>
                    </Scroll>
                    <Modal
                      onClose={closeModalforCreateButton}
                      open={showModalforCreateButton}
                      trigger={
                        <CreateBoardinBoards onClick={openModalforCreateButton}>
                          <IconPlus />
                          Create Board
                        </CreateBoardinBoards>
                      }
                      onChange={setShowModalforCreateButton}
                    >
                      <OptionalBoardCreate
                        // onCreate={onCreate}
                        onClose={closeModalforCreateButton}
                        handleProjectCreate={function (
                          project: ProjectType
                        ): void {
                          throw new Error("Function not implemented.");
                        }}
                      />
                    </Modal>
                  </GetBoardsContainer>
                </CollapsibleDemo>
              </BoardWrapper>

              <SideBarListWrapper>
                <SideBarElement
                  to={`/projects/${projectKey}/boards/${boardId}/backlog`}
                >
                  <SideBarElementWrapper selected={isBacklog}>
                    <SideBarElementIcon>
                      <IconListBullet strokeWidth={40} />
                    </SideBarElementIcon>
                    Backlog
                  </SideBarElementWrapper>
                </SideBarElement>
                <SideBarElement
                  to={`/projects/${projectKey}/boards/${boardId}/sprints/${activeSprint?.Id}`}
                >
                  <SideBarElementWrapper selected={isActiveSprint}>
                    <SideBarElementIcon>
                      <IconCalendarViewWeek strokeWidth="10px" />
                    </SideBarElementIcon>
                    Active sprints
                  </SideBarElementWrapper>
                </SideBarElement>
              </SideBarListWrapper>
            </SideBarWrapper>
          </SideBarItem>
        </AddProjectWrapper>
      </Wrapper>
    </Container>
  );
}
export default ProjectMenu;
