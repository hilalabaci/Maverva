import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/templates/layout";
import MainContainerLayout from "../../components/layout/templates/mainContainerLayout";
import { useProjectData } from "../../hooks/api/useProjectData";
import {
  ActiveSprintWrapper,
  MainContainer,
} from "../DynamicContentLoader/styled";
import TopMenu from "../../features/top-menu";
import ActiveSprint from "../ActiveSprint";
import { useDynamicContentLoader } from "../../hooks/useDynamicContentLoader";
import { RouteParams } from "../../types/auth.types";

const SprintPage = () => {
  const {
    projectKey,
    boardId,
    sprintId: sprintIdParam,
  } = useParams<RouteParams>();
  const [hideMenu, setHideMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const {
    data: projectData,
    isLoading: isProjectDataLoading,
    error: projectDataError,
  } = useProjectData(projectKey);
  const {
    activeSprint: contextActiveSprint,
    filteredIssues,
    setSearchInput,
    loadActiveSprint,
    deleteCard,
    addedCard,
    updateIssue,
    onUpdateSummary,
    onUpdateDescription,
    updatedCardsAfterDeleteColumn,
  } = useDynamicContentLoader(projectKey);

  const sprintId =
    sprintIdParam && sprintIdParam !== "undefined"
      ? sprintIdParam
      : contextActiveSprint?.Id;

  if (isProjectDataLoading) {
    return <div>Loading...</div>;
  }
  if (projectDataError) {
    return <div>Error loading project data: {projectDataError.message}</div>;
  }
  if (!projectKey || !boardId) {
    return <div>Missing required parameters</div>;
  }
  if (!sprintId) {
    return <div>Loading sprint...</div>;
  }

  return (
    <Layout onProjectCrate={(project) => {}}>
      <MainContainerLayout
        projectKey={projectKey}
        projectTitle={"Sprint Details"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        hideMenu={hideMenu}
        setHideMenu={setHideMenu}
        isHovered={isHovered}
      >
        <MainContainer>
          {projectData && (
            <TopMenu
              activeSprintName={contextActiveSprint?.Name || ""}
              projectKey={projectKey}
              onProjectUpdate={() => {}}
              projectId={projectData.Id}
              topMenuTitle={projectData.Name}
              setSearchInput={setSearchInput}
              startDateActiveSprint={contextActiveSprint?.StartDate || new Date()}
              endDateActiveSprint={contextActiveSprint?.EndDate || new Date()}
              sprintId={sprintId}
              sprintGoal={contextActiveSprint?.SprintGoal || ""}
              sprintIssues={filteredIssues}
              loadActiveSprint={loadActiveSprint}
            />
          )}
          <ActiveSprintWrapper>
            <ActiveSprint
              onUpdate={updateIssue}
              onUpdateSummary={onUpdateSummary}
              onUpdateDescription={onUpdateDescription}
              onDelete={deleteCard}
              addedCard={addedCard}
              filteredCards={filteredIssues}
              issues={filteredIssues}
              projectKey={projectKey}
              updatedCardsAfterDeleteColumn={updatedCardsAfterDeleteColumn}
            />
          </ActiveSprintWrapper>
        </MainContainer>
      </MainContainerLayout>
    </Layout>
  );
};

export default SprintPage;
