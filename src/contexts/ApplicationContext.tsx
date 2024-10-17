import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { BoardType, ProjectType } from "../types";

type ApplicationProviderProps = PropsWithChildren;
type ApplicationContextType = {
  projects: ProjectType[];
  setProjects: Dispatch<SetStateAction<ProjectType[]>>;
  boards: BoardType[];
  setBoards: Dispatch<SetStateAction<BoardType[]>>;
  selectedBoard: BoardType | undefined;
  setSelectedBoard: Dispatch<SetStateAction<BoardType | undefined>>;
};

const ApplicationContext = createContext<ApplicationContextType>({
  projects: [],
  setProjects: () => {},
  boards: [],
  setBoards: () => {},
  selectedBoard: undefined,
  setSelectedBoard: () => {},
});
//const storageKey = "process_user";

export const ApplicationProvider = (props: ApplicationProviderProps) => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [boards, setBoards] = useState<BoardType[]>([]);
  const [selectedBoard, setSelectedBoard] = useState<BoardType | undefined>();

  return (
    <ApplicationContext.Provider
      value={{
        projects,
        setProjects,
        boards,
        setBoards,
        selectedBoard,
        setSelectedBoard,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => useContext(ApplicationContext);
