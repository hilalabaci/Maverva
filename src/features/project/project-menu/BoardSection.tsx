import { useLocation, useNavigate } from "react-router-dom";
import ProjectAvatar from "../../user/project-avatar";
import Scroll from "../../../components/ui/Scroll";
import { useApplicationContext } from "../../../contexts/ApplicationContext";
import { BoardType } from "../../../types/user.types";
import {
  AddProjectWrapper,
  BoardWrapper,
  GetBoardsContainer,
  GetBoardsList,
  GetBoardsListItem,
  SideBarItem,
  SideBarWrapper,
  TitleGetBoards,
} from "./styles";

type BoardSectionProps = {
  title: string;
  boards: BoardType[];
  selectedBoardId?: string;
  hideMenu: boolean;
  projectKey: string;
  onBoardClick?: (board: BoardType) => void;
};

function BoardSection({
  title,
  boards,
  selectedBoardId,
  hideMenu,
  projectKey,
  onBoardClick,
}: BoardSectionProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { setActiveSprint, setSelectedBoard } = useApplicationContext();

  const handleClick = (board: BoardType) => {
    const activeSprintForBoard =
      board.ActiveSprint ||
      board.Sprints?.find((s) => s.IsActive) ||
      board.Sprints?.[0];
    setActiveSprint(activeSprintForBoard);
    setSelectedBoard(board);
    onBoardClick?.(board);

    const activeSprintId = activeSprintForBoard?.Id;
    if (location.pathname.includes("/backlog")) {
      navigate(`/projects/${projectKey}/boards/${board.Id}/backlog`);
    } else if (activeSprintId) {
      navigate(
        `/projects/${projectKey}/boards/${board.Id}/sprints/${activeSprintId}`
      );
    } else {
      navigate(`/projects/${projectKey}/boards/${board.Id}/backlog`);
    }
  };

  return (
    <AddProjectWrapper $hidden={hideMenu}>
      <SideBarItem>
        <SideBarWrapper>
          <BoardWrapper>
            <GetBoardsContainer>
              <Scroll scrollheight="min-content">
                <GetBoardsList>
                  <TitleGetBoards>{title}</TitleGetBoards>
                  {boards.map((board) => (
                    <GetBoardsListItem
                      key={board.Id}
                      selected={selectedBoardId === board.Id}
                      onClick={() => handleClick(board)}
                    >
                      <ProjectAvatar
                        projectKey={board.Key}
                        $userPhotoWidth="20px"
                        $userPhotoHeight="20px"
                        $userPhotoFontSize="1px"
                        $userBorderadius="3px"
                        $fontWeight="600"
                      />
                      {board.Name}
                    </GetBoardsListItem>
                  ))}
                </GetBoardsList>
              </Scroll>
            </GetBoardsContainer>
          </BoardWrapper>
        </SideBarWrapper>
      </SideBarItem>
    </AddProjectWrapper>
  );
}

export default BoardSection;
