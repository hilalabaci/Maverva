import { useLocation, useNavigate } from "react-router-dom";
import ProjectAvatar from "../../user/project-avatar";
import { useApplicationContext } from "../../../contexts/ApplicationContext";
import { BoardType } from "../../../types/user.types";
import {
  SideBarElement,
  SideBarElementWrapper,
  SideBarElementIcon,
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

  const handleClick = (board: BoardType, e: React.MouseEvent) => {
    e.preventDefault();
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

  if (hideMenu || boards.length === 0) return null;

  return (
    <>
      {boards.map((board) => (
        <SideBarElement
          key={board.Id}
          to={`/projects/${projectKey}/boards/${board.Id}`}
          onClick={(e) => handleClick(board, e)}
        >
          <SideBarElementWrapper selected={selectedBoardId === board.Id}>
            <SideBarElementIcon>
              <ProjectAvatar
                projectKey={board.Key}
                $userPhotoWidth="16px"
                $userPhotoHeight="16px"
                $userPhotoFontSize="8px"
                $userBorderadius="3.5px"
                $fontWeight="600"
              />
            </SideBarElementIcon>
            {board.Name}
          </SideBarElementWrapper>
        </SideBarElement>
      ))}
    </>
  );
}

export default BoardSection;
