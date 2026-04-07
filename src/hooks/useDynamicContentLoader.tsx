import { useCallback, useEffect, useRef, useState } from "react";
import { getSelectedProject } from "../api/project-api";
import { getActiveSprint } from "../api/sprint-api";
import { updateIssueContent } from "../api/issue-api";
import { useUserContext } from "../contexts/UserContext";
import { useApplicationContext } from "../contexts/ApplicationContext";
import { IssueType, IssueStatus } from "../types/user.types";

export function useDynamicContentLoader(projectKey?: string) {
  const hasFetchedProjects = useRef(false);
  const { user, token } = useUserContext();

  const {
    selectedProject,
    setSelectedProject,
    selectedBoard,
    setSelectedBoard,
    activeSprint,
    setActiveSprint,
    issues,
    setIssues,
    setSelectedIssue,
  } = useApplicationContext();

  const [filteredIssues, setFilteredIssues] = useState<IssueType[]>([]);
  const [searchInput, setSearchInput] = useState("");

  // Load selected project
  const loadSelectedProject = useCallback(async () => {
    if (!projectKey || !user || !token) return;
    try {
      const { ok, data } = await getSelectedProject(projectKey, user.Id, token);
      if (ok && data) {
        setSelectedProject(data);
        // Only set board if none is selected yet
        const boardToUse = selectedBoard || data.Boards?.[0];
        if (!selectedBoard && boardToUse) {
          setSelectedBoard(boardToUse);
        }

        if (boardToUse) {
          const { ok: okSprint, data: sprintData } = await getActiveSprint(
            projectKey,
            boardToUse.Id,
            token,
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
  }, [
    projectKey,
    user,
    token,
    selectedBoard,
    setSelectedProject,
    setSelectedBoard,
    setActiveSprint,
    setIssues,
  ]);

  // Load active sprint
  const loadActiveSprint = useCallback(async (overrideBoardId?: string) => {
    const boardId = overrideBoardId || selectedBoard?.Id;
    if (!projectKey || !boardId || !token) return;
    try {
      const { ok, data } = await getActiveSprint(
        projectKey,
        boardId,
        token,
      );
      if (ok && data) {
        setActiveSprint(data);
        setIssues(data.Issues);
      }
    } catch (error) {
      console.error("Error fetching sprint:", error);
    }
  }, [projectKey, selectedBoard?.Id, token, setActiveSprint, setIssues]);

  // Issue manipulation
  const updateIssue = (issue: IssueType) => {
    if (!issues) return;
    const updated = issues.map((i) => (i.Id === issue.Id ? issue : i));
    setIssues(updated);
  };

  const onUpdateSummary = async (issue: IssueType) => {
    if (!token) return;
    const response = await updateIssueContent(
      token,
      issue.Id,
      issue.Summary,
      issue.Description,
    );
    if (response.ok && response.data) updateIssue(response.data);
  };

  const onUpdateDescription = async (issue: IssueType) => {
    if (!token) return;
    const response = await updateIssueContent(
      token,
      issue.Id,
      issue.Summary,
      issue.Description,
    );
    if (response.ok && response.data) {
      updateIssue(response.data);
      setSelectedIssue((prev) =>
        prev?.Id === issue.Id
          ? { ...prev, Description: response.data?.Description }
          : prev,
      );
    }
  };

  const deleteCard = (id: string) => {
    if (!issues) return;
    setIssues(issues.filter((issue) => issue.Id !== id));
  };

  const addedCard = (issue: IssueType) => {
    if (issues) setIssues([...issues, issue]);
  };

  const updatedCardsAfterDeleteColumn = (updateIssues: IssueType[]) => {
    if (!issues) return;
    const updated = updateIssues.map((issue) => ({
      ...issue,
      status: IssueStatus.ToDo,
    }));
    const remaining = issues.filter(
      (issue) => !updated.some((u) => u.Id === issue.Id),
    );
    setIssues([...updated, ...remaining]);
  };

  // Filtering
  useEffect(() => {
    if (issues) {
      setFilteredIssues(
        issues.filter((issue) =>
          issue.Summary.toLowerCase().includes(searchInput.toLowerCase()),
        ),
      );
    }
  }, [searchInput, issues]);

  // Reload issues when selected board changes
  useEffect(() => {
    if (!selectedBoard?.Id || !hasFetchedProjects.current) return;
    loadActiveSprint(selectedBoard.Id);
  }, [selectedBoard?.Id, loadActiveSprint]);

  // Initial project load
  useEffect(() => {
    if (!projectKey || hasFetchedProjects.current) return;
    hasFetchedProjects.current = true;
    loadSelectedProject();
  }, [projectKey, loadSelectedProject]);

  return {
    selectedProject,
    selectedBoard,
    activeSprint,
    issues,
    filteredIssues,
    searchInput,
    setSearchInput,
    loadActiveSprint,
    deleteCard,
    addedCard,
    updateIssue,
    onUpdateSummary,
    onUpdateDescription,
    updatedCardsAfterDeleteColumn,
  };
}
