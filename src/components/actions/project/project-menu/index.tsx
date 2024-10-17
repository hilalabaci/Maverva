import { useEffect, useState } from "react";
import CollapsibleDemo from "../../../tools/collapsible";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import {
  Container,
  Wrapper,
  AddProjectWrapper,
  UserInfo,
  ProjectTitle,
  ProjectIcon,
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
} from "./styles";
import { useUserContext } from "../../../../contexts/UserContext";
import { useApplicationContext } from "../../../../contexts/ApplicationContext";
import apiHelper from "../../../../api/apiHelper";

type ProjectMenuPropsType = {
  ProjectTitle: string;
  hideMenu: boolean;
  projectKey: string;
  projectId: string;
  onHover?: (hover: boolean) => void;
};

function ProjectMenu(props: ProjectMenuPropsType) {
  const { boards, setBoards } = useApplicationContext();
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const [showBoards, setShowBoards] = useState(true);
  const { user } = useUserContext();

  async function loadBoards() {
    if (!user) return;
    const { ok, data } = await apiHelper.getBoards(props.projectKey, user._id);
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
          <ProjectIcon $hidden={props.hideMenu}>{props.projectKey}</ProjectIcon>
          <ProjectTitle $hidden={props.hideMenu}>
            {props.ProjectTitle}
          </ProjectTitle>
        </UserInfo>
        <AddProjectWrapper $hidden={props.hideMenu}>
          <Title>Planning</Title>
          <BoardWrapper>
            <CollapsibleDemo
              open={showBoards}
              setOpen={setShowBoards}
              trigger={
                <ProjectBoardContainer>
                  <ProjectBoardTitleWrapper>
                    <ProjectBoardTitle>
                      {props.ProjectTitle}/ boards
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
                  <SelectedBoard>Selected Board</SelectedBoard>
                </ProjectBoardContainer>
              }
            >
              <GetBoardsContainer>
                <GetBoardsList>
                  {boards.map((board, index) => (
                    <GetBoardsListItem
                      to={`/projects/${props.projectKey}/boards/${board._id}`}
                      key={board._id}
                      isSelected={selectedBoard === board._id}
                      onClick={() => setSelectedBoard(board._id)}
                    >
                      {board.title}
                    </GetBoardsListItem>
                  ))}
                </GetBoardsList>
              </GetBoardsContainer>
            </CollapsibleDemo>
          </BoardWrapper>
        </AddProjectWrapper>
      </Wrapper>
    </Container>
  );
}
export default ProjectMenu;
