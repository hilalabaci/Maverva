import { useEffect, useState } from "react";
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
  ProjectTitle: string;
  hideMenu: boolean;
  projectKey: string;
  projectId: string;
  onHover?: (hover: boolean) => void;
  selectedProjectsTitle: string;
};
type URLParams = {
  projectKey: string;
  boardId?: string;
};
function ProjectMenu(props: ProjectMenuPropsType) {
  const location = useLocation();
  const { boardId } = useParams<URLParams>();
  const { user } = useUserContext();
  const [boards, setBoards] = useState<BoardType[]>([]);
  const { selectedBoard, setSelectedBoard } = useApplicationContext();
  const [showBoards, setShowBoards] = useState(false);
  const isBacklog = location.pathname.includes("/backlog");
  const isActiveSprint = !isBacklog;
  const [showModalforCreateButton, setShowModalforCreateButton] =
    useState(false);

  function openModalforCreateButton() {
    setShowModalforCreateButton(true);
  }
  function closeModalforCreateButton() {
    setShowModalforCreateButton(false);
  }

  async function loadBoards() {
    if (!user) return;
    const { ok, data } = await getBoards(props.projectKey, user.Id);
    if (ok && data) {
      setBoards(data);
    }
  }
  useEffect(() => {
    loadBoards();
  }, []);
  return (
    <Container
      $hidden={props.hideMenu}
      onMouseEnter={() => props.onHover?.(true)}
      onMouseLeave={() => props.onHover?.(false)}
    >
      <Wrapper>
        <UserInfo $hidden={props.hideMenu}>
          <ProjectAvatar
            $hidden={props.hideMenu}
            $userPhotoWidth="30px"
            $userPhotoHeight="30px"
            $userPhotoFontSize="1px"
            $userBorderadius="3px"
            $fontWeight="600"
            projectId={props.projectId}
          />
          <ProjectTitle $hidden={props.hideMenu}>
            {props.ProjectTitle}
          </ProjectTitle>
        </UserInfo>
        <AddProjectWrapper $hidden={props.hideMenu}>
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
                            to={`/projects/${props.projectKey}/boards/${board.Id}`}
                            key={board.Id}
                            selected={selectedBoard?.Id === board.Id}
                            onClick={() => {
                              setSelectedBoard(board);
                              setShowBoards(false);
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
                        // onCreate={props.onCreate}
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
                  to={`/projects/${props.projectKey}/boards/${boardId}/backlog`}
                >
                  <SideBarElementWrapper selected={isBacklog}>
                    <SideBarElementIcon>
                      <IconListBullet strokeWidth={40} />
                    </SideBarElementIcon>
                    Backlog
                  </SideBarElementWrapper>
                </SideBarElement>
                <SideBarElement
                  to={`/projects/${props.projectKey}/boards/${boardId}`}
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
