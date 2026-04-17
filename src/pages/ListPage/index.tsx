import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/templates/layout";
import MainContainerLayout from "../../components/layout/templates/mainContainerLayout";
import { MainContainer } from "../DynamicContentLoader/styled";
import TopMenu from "../../features/top-menu";
import { useDynamicContentLoader } from "../../hooks/useDynamicContentLoader";
import { useProjectData } from "../../hooks/api/useProjectData";
import { RouteParams } from "../../types/auth.types";
import styled from "styled-components";
import ListContent from "./ListContent";

const ListWrapper = styled.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
`;

const ListPageRoute = () => {
  const { projectKey, boardId } = useParams<RouteParams>();
  const [hideMenu, setHideMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const {
    data: projectData,
  } = useProjectData(projectKey);

  const {
    activeSprint,
    setSearchInput,
    loadActiveSprint,
  } = useDynamicContentLoader(projectKey);

  if (!projectKey || !boardId) {
    return <div>Missing required parameters</div>;
  }

  return (
    <Layout onProjectCrate={() => {}}>
      <MainContainerLayout
        projectKey={projectKey}
        projectTitle={projectData?.Name || ""}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        hideMenu={hideMenu}
        setHideMenu={setHideMenu}
        isHovered={isHovered}
      >
        <MainContainer>
          {projectData && (
            <TopMenu
              activeSprintName={activeSprint?.Name || ""}
              projectKey={projectKey}
              onProjectUpdate={() => {}}
              projectId={projectData.Id}
              topMenuTitle={projectData.Name}
              setSearchInput={setSearchInput}
              boardId={boardId}
              startDateActiveSprint={activeSprint?.StartDate || new Date()}
              endDateActiveSprint={activeSprint?.EndDate || new Date()}
              sprintId={activeSprint?.Id}
              sprintGoal={activeSprint?.SprintGoal || ""}
              loadActiveSprint={loadActiveSprint}
            />
          )}
          <ListWrapper>
            <ListContent projectKey={projectKey} boardId={boardId} />
          </ListWrapper>
        </MainContainer>
      </MainContainerLayout>
    </Layout>
  );
};

export default ListPageRoute;
