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
  UserType,
} from "../types/user.types";
import { getUsersByProject } from "../api/project-api";
import { useUserContext } from "./UserContext";

function useSyncToLocalStorage<T>(key: string, value: T | undefined) {
  useEffect(() => {
    if (value) localStorage.setItem(key, JSON.stringify(value));
    else localStorage.removeItem(key);
  }, [key, value]);
}

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
  projectUsers: UserType[];
  setProjectUsers: Dispatch<SetStateAction<UserType[]>>;
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
  projectUsers: [],
  setProjectUsers: () => {},
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
  const [projectUsers, setProjectUsers] = useState<UserType[]>([]);
  const { token } = useUserContext();

  useEffect(() => {
    if (token && selectedProject?.Id) {
      getUsersByProject(selectedProject.Id, token).then((res) => {
        if (res.ok && res.data) setProjectUsers(res.data);
      });
    } else {
      setProjectUsers([]);
    }
  }, [selectedProject?.Id, token]);

  useSyncToLocalStorage(selectedProjectStorageKey, selectedProject);
  useSyncToLocalStorage(boardStorageKey, selectedBoard);
  useSyncToLocalStorage(sprintStorageKey, activeSprint);
  useSyncToLocalStorage(issuesStorageKey, issues);
  useSyncToLocalStorage(selectedIssueStorageKey, selectedIssue);

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
        projectUsers,
        setProjectUsers,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => useContext(ApplicationContext);
