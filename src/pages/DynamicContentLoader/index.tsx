import { useState } from "react";
import TopMenu from "../../features/top-menu";
import Layout from "../../components/layout/templates/layout";
import { useLocation, useParams } from "react-router-dom";
import MainContainerLayout from "../../components/layout/templates/mainContainerLayout";
import {
  ActiveSprintWrapper,
  BacklogWrapper,
  Main,
  MainContainer,
} from "./styled";
import Scroll from "../../components/ui/Scroll";
import ActiveSprint from "../ActiveSprint";
import Backlog from "../Backlog";
import { useDynamicContentLoader } from "../../hooks/useDynamicContentLoader";

function DynamicContentLoader() {
  const { projectKey } = useParams<{ projectKey: string }>();
  const location = useLocation();
  const [hideMenu, setHideMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const {
    selectedProject,
    activeSprint,
    filteredIssues,
    setSearchInput,
    loadActiveSprint,
    deleteCard,
    addedCard,
    updateIssue,
    onUpdateSummary,
    onUpdateDescription,
    updatedCardsAfterDeleteColumn,
    selectedBoard,
  } = useDynamicContentLoader(projectKey);

  return (
    <Layout onProjectCrate={(project) => {}}>
      <MainContainerLayout
        projectKey={projectKey as string}
        projectId={selectedProject?.Id as string}
        projectTitle={selectedProject?.Name as string}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        hideMenu={hideMenu}
        setHideMenu={setHideMenu}
        isHovered={isHovered}
      >
        <MainContainer>
          {selectedProject && (
            <TopMenu
              activeSprintName={activeSprint?.Name as string}
              projectKey={projectKey as string}
              onProjectUpdate={() => {}}
              projectId={selectedProject?.Id as string}
              topMenuTitle={selectedProject?.Name as string}
              setSearchInput={setSearchInput}
              boardId={selectedBoard?.Id as string}
              startDateActiveSprint={activeSprint?.StartDate}
              endDateActiveSprint={activeSprint?.EndDate}
              sprintId={activeSprint?.Id}
              sprintGoal={activeSprint?.SprintGoal}
              loadActiveSprint={loadActiveSprint}
            />
          )}
          <Scroll
            children={
              <Main>
                {location.pathname.includes("/backlog") ? (
                  <BacklogWrapper>
                    <Backlog />
                  </BacklogWrapper>
                ) : (
                  <ActiveSprintWrapper>
                    <ActiveSprint
                      activeSprint={activeSprint}
                      boardId={activeSprint?.BoardId as string | undefined}
                      onUpdate={updateIssue}
                      onUpdateSummary={onUpdateSummary}
                      onUpdateDescription={onUpdateDescription}
                      onDelete={deleteCard}
                      addedCard={addedCard}
                      filteredCards={filteredIssues}
                      issues={filteredIssues}
                      projectKey={projectKey}
                      updatedCardsAfterDeleteColumn={
                        updatedCardsAfterDeleteColumn
                      }
                    />
                  </ActiveSprintWrapper>
                )}
              </Main>
            }
            scrollheight="67vh"
            scrollwidth="81vw"
          ></Scroll>
        </MainContainer>
      </MainContainerLayout>
    </Layout>
  );
}
export default DynamicContentLoader;
