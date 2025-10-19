import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  BoardType,
  IssueType,
  ProjectType,
  SprintType,
} from "../types/user.types";

type ApplicationProviderProps = PropsWithChildren;
type ApplicationContextType = {
  projects: ProjectType[];
  setProjects: Dispatch<SetStateAction<ProjectType[]>>;
  selectedProject: ProjectType | undefined;
  setSelectedProject: Dispatch<SetStateAction<ProjectType | undefined>>;
  selectedBoard: BoardType | undefined;
  setSelectedBoard: Dispatch<SetStateAction<BoardType | undefined>>;
  activeSprint: SprintType | undefined;
  setActiveSprint: Dispatch<SetStateAction<SprintType | undefined>>;
  issues: IssueType[] | undefined;
  setIssues: Dispatch<SetStateAction<IssueType[] | undefined>>;
  selectedIssue: IssueType | undefined;
  setSelectedIssue: Dispatch<SetStateAction<IssueType | undefined>>;
};

const ApplicationContext = createContext<ApplicationContextType>({
  projects: [],
  setProjects: () => {},
  selectedProject: undefined,
  setSelectedProject: () => {},
  selectedBoard: undefined,
  setSelectedBoard: () => {},
  activeSprint: undefined,
  setActiveSprint: () => {},
  selectedIssue: undefined,
  setSelectedIssue: () => {},
  issues: undefined,
  setIssues: () => {},
});
const selectedProjectStorageKey = "selected_project";
const boardStorageKey = "selected_board";
const sprintStorageKey = "selected_sprint";
const issuesStorageKey = "issues";
const selectedIssueStorageKey = "selected_issue";

export const ApplicationProvider = ({ children }: ApplicationProviderProps) => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [selectedProject, setSelectedProject] = useState<
    ProjectType | undefined
  >();
  const [selectedBoard, setSelectedBoard] = useState<BoardType | undefined>();
  const [activeSprint, setActiveSprint] = useState<SprintType | undefined>();
  const [issues, setIssues] = useState<IssueType[] | undefined>();
  const [selectedIssue, setSelectedIssue] = useState<IssueType | undefined>();

  useEffect(() => {}, [projects]);

  useEffect(() => {
    if (selectedProject)
      localStorage.setItem(
        selectedProjectStorageKey,
        JSON.stringify(selectedProject)
      );
    else localStorage.removeItem(selectedProjectStorageKey);
  }, [selectedProject]);

  useEffect(() => {
    if (selectedBoard)
      localStorage.setItem(boardStorageKey, JSON.stringify(selectedBoard));
    else localStorage.removeItem(boardStorageKey);
  }, [selectedBoard]);

  useEffect(() => {
    if (activeSprint)
      localStorage.setItem(sprintStorageKey, JSON.stringify(activeSprint));
    else localStorage.removeItem(sprintStorageKey);
  }, [activeSprint]);

  useEffect(() => {
    if (issues) localStorage.setItem(issuesStorageKey, JSON.stringify(issues));
    else localStorage.removeItem(issuesStorageKey);
  }, [issues]);

  useEffect(() => {
    if (selectedIssue)
      localStorage.setItem(
        selectedIssueStorageKey,
        JSON.stringify(selectedIssue)
      );
    else localStorage.removeItem(selectedIssueStorageKey);
  }, [selectedIssue]);

  return (
    <ApplicationContext.Provider
      value={{
        projects,
        setProjects,
        selectedProject,
        setSelectedProject,
        selectedBoard,
        setSelectedBoard,
        activeSprint,
        setActiveSprint,
        issues,
        setIssues,
        selectedIssue,
        setSelectedIssue,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => useContext(ApplicationContext);
