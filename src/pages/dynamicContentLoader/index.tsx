import { useCallback, useContext, useEffect, useState } from "react";
import TopMenu from "../../features/top-menu";
import {
  ProjectType,
  IssueType,
  BoardType,
  SprintType,
  IssueStatus,
} from "../../types";
import Layout from "../templates/layout";
import { useLocation, useParams } from "react-router-dom";
import MainContainerLayout from "../templates/mainContainerLayout";
import {
  ActiveSprintWrapper,
  BacklogWrapper,
  Main,
  MainContainer,
} from "./styles";
import Backlog from "../backlog";
import Scroll from "../../components/common/scroll";
import ActiveSprint from "../active-sprint";
import { useUserContext } from "../../contexts/UserContext";
import { getSelectedProject } from "../../api/projectApi";
import { getActiveSprint } from "../../api/sprintApi";
import { useApplicationContext } from "../../contexts/ApplicationContext";

type URLParams = {
  projectKey: string;
  boardId?: string;
};
function DynamicContentLoader() {
  const location = useLocation();
  const { projectKey, boardId } = useParams<URLParams>();
  const { user } = useUserContext();
  const { selectedBoard, setSelectedBoard } = useApplicationContext();
  const [activeSprint, setActiveSprint] = useState<SprintType>();
  const [issues, setIssues] = useState<IssueType[]>();
  const [filteredIssues, setFilteredIssues] = useState<IssueType[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectType>();
  const [hideMenu, setHideMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  async function loadSelectedProject() {
    try {
      if (!projectKey) return;
      if (!user) return;
      const { ok, data } = await getSelectedProject(projectKey, user?.Id);
      if (ok && data) {
        if (!data) return;
        setSelectedProject(data);
        setSelectedBoard(data.Boards.length > 0 ? data.Boards[0] : undefined);
      }
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  }

  const loadActiveSprint = useCallback(async () => {
    try {
      if (!projectKey) return;
      if (!selectedBoard) return;

      const { ok, data } = await getActiveSprint(projectKey, selectedBoard.Id);
      if (ok && data) {
        setActiveSprint(data);
        setIssues(data.Issues);
      } else {
        console.error("Failed to fetch board. Status:");
      }
    } catch (error) {
      console.error("Error fetching board:", error);
    }
  }, [projectKey, selectedBoard]);

  useEffect(() => {
    loadActiveSprint();
  }, [loadActiveSprint]);

  function deleteCard(id: string) {
    setIssues(issues?.filter((issue) => issue.Id !== id));
  }

  function updateCard(card: IssueType) {
    if (!issues) return;
    const index = issues.findIndex((b) => b.Id === card.Id);
    const newCards = [...issues];
    newCards[index] = card;
    setIssues(newCards);
    /*    setCards([...cards.filter((card) => card.id !== id), card]); */
  }
  function onUpdateContent(card: IssueType) {
    if (!issues) return;
    loadActiveSprint();
  }

  useEffect(() => {
    if (projectKey) {
      loadSelectedProject();
    }
  }, [projectKey]);

  useEffect(() => {
    if (!issues) return;
    setFilteredIssues(
      issues.filter((issue) => issue.Summary.includes(searchInput))
    );
    console.log(issues);
  }, [searchInput, issues]);

  function addedCard(card: IssueType) {
    if (!issues) return;
    setIssues([...issues, card]);
  }
  function updatedCardsAfterDeleteColumn(updateCards: IssueType[]) {
    if (!issues) return;
    const updatedCards = updateCards.map((card) => ({
      ...card,
      status: IssueStatus.ToDo,
    }));

    const updatedCardIds = updatedCards.map((card) => card.Id);
    const remainingCards = issues.filter(
      (issue) => !updatedCardIds.includes(issue.Id)
    );
    setIssues([...updatedCards, ...remainingCards]);
  }

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
                      onUpdate={updateCard}
                      onUpdateContent={onUpdateContent}
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
