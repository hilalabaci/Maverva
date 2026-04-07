import { PropsWithChildren } from "react";
import {
  GlobalStyle,
  ProjectMenuAndSideBar,
  Wrapper,
} from "../../../../pages/DynamicContentLoader/styled";
import ProjectMenu from "../../../../features/project/project-menu";
import {
  PathInfo,
  Pathitem,
  PathLink,
  PathList,
} from "../../../../features/top-menu/styles";
import { Container, MainContainer, Breadcrumbs } from "./styles";
import { useParams } from "react-router-dom";
import { useApplicationContext } from "../../../../contexts/ApplicationContext";
import SideBar from "../../../ui/SideBar";
import { RouteParams } from "../../../../types/auth.types";

type MainContainerLayoutPropsType = PropsWithChildren<{
  projectKey: string;
  projectTitle: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hideMenu: boolean;
  setHideMenu: (hideMenu: boolean) => void;
  isHovered: boolean;
}>;
const MainContainerLayout = ({
  onMouseLeave,
  onMouseEnter,
  children,
  hideMenu,
  projectTitle,
  setHideMenu,
  isHovered,
}: MainContainerLayoutPropsType) => {
  const { projectKey, boardId } = useParams<RouteParams>();
  const { selectedBoard } = useApplicationContext();
  if (!projectKey || !boardId) return;
  return (
    <Container>
      <GlobalStyle />
      <Wrapper>
        <ProjectMenuAndSideBar
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <ProjectMenu
            projectKey={projectKey}
            hideMenu={hideMenu}
            ProjectTitleProps={projectTitle}
            selectedProjectsTitle={projectTitle}
          />
          <SideBar
            hideMenu={hideMenu}
            setHideMenu={setHideMenu}
            isHovered={isHovered}
          />
        </ProjectMenuAndSideBar>

        <MainContainer>
          <Breadcrumbs>
            <PathInfo>
              <PathList>
                <Pathitem>
                  <PathLink to={"/projects"}>Projects</PathLink> /{"  "}
                </Pathitem>
                <Pathitem>
                  <PathLink to={`/projects/${projectKey}`}>
                    {projectTitle}
                  </PathLink>{" "}
                  /{" "}
                </Pathitem>
                <Pathitem>
                  <PathLink to={`boards/${boardId}`}>
                    {selectedBoard?.Name}
                  </PathLink>
                </Pathitem>
              </PathList>
            </PathInfo>
          </Breadcrumbs>
          {children}
        </MainContainer>
      </Wrapper>
    </Container>
  );
};

export default MainContainerLayout;
