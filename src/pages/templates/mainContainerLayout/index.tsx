import { PropsWithChildren } from "react";
import {
  GlobalStyle,
  ProjectMenuAndSideBar,
  Wrapper,
} from "../../dynamicContentLoader/styles";
import ProjectMenu from "../../../components/actions/project/project-menu";
import SideBar from "../../../components/tools/sideBar";
import {
  PathInfo,
  Pathitem,
  PathLink,
  PathList,
} from "../../../components/actions/top-menu/styles";
import { Container, MainContainer, Breadcrumbs } from "./styles";

type MainContainerLayoutPropsType = PropsWithChildren<{
  projectKey: string;
  projectId: string;
  projectTitle: string;
  selectedBoardTitle: string;
  selectedBoardId: string;
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
  projectKey,
  projectId,
  projectTitle,
  selectedBoardTitle,
  selectedBoardId,
  setHideMenu,
  isHovered,
}: MainContainerLayoutPropsType) => {
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
            projectId={projectId}
            hideMenu={hideMenu}
            ProjectTitle={projectTitle}
            selectedBoardTitle={selectedBoardTitle}
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
                  <PathLink to={`boards/${selectedBoardId}`}>
                    {selectedBoardTitle}
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
