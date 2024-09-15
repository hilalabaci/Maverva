import { useState } from "react";
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
  GetBoardsListItemLink,
} from "./styles";

type ProjectMenuPropsType = {
  ProjectTitle: string;
  hideMenu: boolean;
  projectKey: string;
};

function ProjectMenu(props: ProjectMenuPropsType) {
  const [showBoards, setShowBoards] = useState(false);
  return (
    <Container $hidden={props.hideMenu}>
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
                  <GetBoardsListItem>
                    <GetBoardsListItemLink to={"projects"}>
                      Children Elements
                    </GetBoardsListItemLink>
                  </GetBoardsListItem>
                  <GetBoardsListItem>
                    <GetBoardsListItemLink to={"projects"}>
                      Children Elements
                    </GetBoardsListItemLink>
                  </GetBoardsListItem>
                  <GetBoardsListItem>
                    <GetBoardsListItemLink to={"projects"}>
                      Children Elements
                    </GetBoardsListItemLink>
                  </GetBoardsListItem>
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
