import { useCallback, useEffect, useState, useRef } from "react";
import TopMenu from "../../features/top-menu";
import { ProjectType, IssueType, SprintType, IssueStatus } from "../../types";
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
import { updateIssueContent } from "../../api/issueApi";
type URLParams = {
  projectKey: string;
  boardId?: string;
};
function DynamicContentLoader() {
  const hasFetchedProjects = useRef(false);
  const location = useLocation();
  const { projectKey } = useParams<URLParams>();
  const { user, token } = useUserContext();
  const { selectedBoard, setSelectedBoard } = useApplicationContext();
  const [activeSprint, setActiveSprint] = useState<SprintType>();
  const [issues, setIssues] = useState<IssueType[]>();
  const [filteredIssues, setFilteredIssues] = useState<IssueType[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectType>();
  const [hideMenu, setHideMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const loadSelectedProject = useCallback(async () => {
    try {
      if (!projectKey) return;
      if (!user) return;
      if (!token) return;
      const { ok, data } = await getSelectedProject(
        projectKey,
        user?.Id,
        token
      );
      if (ok && data) {
        setSelectedProject(data);
        const firstBoard = data.Boards.length > 0 ? data.Boards[0] : undefined;
        setSelectedBoard(firstBoard);

        if (firstBoard) {
          const { ok: okSprint, data: sprintData } = await getActiveSprint(
            projectKey,
            firstBoard.Id,
            token
          );
          if (okSprint && sprintData) {
            setActiveSprint(sprintData);
            setIssues(sprintData.Issues);
          }
        }
      }
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  }, [projectKey, user, token, setSelectedBoard]);

  const loadActiveSprint = useCallback(async () => {
    try {
      if (!projectKey || !selectedBoard?.Id || !token) return;
      const { ok, data } = await getActiveSprint(
        projectKey,
        selectedBoard.Id,
        token
      );
      if (ok && data) {
        setActiveSprint(data);
        setIssues(data.Issues);
      } else {
        console.error("Failed to fetch board. Status:");
      }
    } catch (error) {
      console.error("Error fetching board:", error);
    }
  }, [projectKey, selectedBoard?.Id, token]);

  useEffect(() => {
    if (!projectKey || hasFetchedProjects.current) return;
    hasFetchedProjects.current = true;
    loadSelectedProject();
  }, [projectKey, loadSelectedProject]);

  useEffect(() => {
    if (!selectedBoard?.Id || hasFetchedProjects.current) return;
    hasFetchedProjects.current = true;
    loadActiveSprint();
  }, [loadActiveSprint, selectedBoard?.Id]);

  useEffect(() => {
    if (!issues) return;
    setFilteredIssues(
      issues.filter((issue) =>
        issue.Summary.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, issues]);

  function deleteCard(id: string) {
    setIssues(issues?.filter((issue) => issue.Id !== id));
  }

  function updateIssue(issue: IssueType) {
    if (!issues) return;
    const index = issues.findIndex((b) => b.Id === issue.Id);
    const newCards = [...issues];
    newCards[index] = issue;
    setIssues(newCards);
    /*    setCards([...cards.filter((card) => card.id !== id), card]); */
  }
  async function onUpdateSummary(issue: IssueType) {
    if (!issues) return;
    const response = await updateIssueContent(
      issue.Id,
      issue.Summary,
      issue.Description
    );
    if (response.ok && response.data) {
      updateIssue(response.data);
    } else {
      console.error("Failed to update card:", response);
    }
  }

  async function onUpdateDescription(issue: IssueType) {
    if (!issues) return;
    const response = await updateIssueContent(
      issue.Id,
      issue.Summary,
      issue.Description
    );
    if (response.ok && response.data) {
      updateIssue(response.data);
    } else {
      console.error("Failed to update card:", response);
    }
  }

  useEffect(() => {
    if (!issues) return;
    setFilteredIssues(
      issues.filter((issue) => issue.Summary.includes(searchInput))
    );
  }, [searchInput, issues]);

  function addedCard(issue: IssueType) {
    if (!issues) return;
    setIssues([...issues, issue]);
  }
  function updatedCardsAfterDeleteColumn(updateIssues: IssueType[]) {
    if (!issues) return;
    const updatedIssues = updateIssues.map((issue) => ({
      ...issue,
      status: IssueStatus.ToDo,
    }));

    const updatedIssueIds = updatedIssues.map((issue) => issue.Id);
    const remainingIssues = issues.filter(
      (issue) => !updatedIssueIds.includes(issue.Id)
    );
    setIssues([...updatedIssues, ...remainingIssues]);
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
