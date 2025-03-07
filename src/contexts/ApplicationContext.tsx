import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { BoardType, ProjectType, SprintType } from "../types";

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
});
const projectStorageKey = "projects";
const selectedProjectStorageKey = "selected_project";
const boardStorageKey = "selected_board";
const sprintStorageKey = "selected_sprint";

export const ApplicationProvider = ({ children }: ApplicationProviderProps) => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [selectedProject, setSelectedProject] = useState<
    ProjectType | undefined
  >();
  const [selectedBoard, setSelectedBoard] = useState<BoardType | undefined>();
  const [activeSprint, setActiveSprint] = useState<SprintType | undefined>();

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
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => useContext(ApplicationContext);
