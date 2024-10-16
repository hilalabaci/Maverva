import { createContext, PropsWithChildren, useContext, useState } from "react";
import { BoardType, ProjectType } from "../types";

type ApplicationProviderProps = PropsWithChildren;
type ApplicationContextType = {
  project?: ProjectType;
  setProject: (project?: ProjectType) => void;
  board?: BoardType;
  setBoard: (board?: BoardType) => void;
};

const ApplicationContext = createContext<ApplicationContextType>({
  project: undefined,
  setProject: () => {},
  board: undefined,
  setBoard: () => {},
});
//const storageKey = "process_user";

export const ApplicationProvider = (props: ApplicationProviderProps) => {
  const [project, setProject] = useState<ProjectType | undefined>();
  const [board, setBoard] = useState<BoardType | undefined>();

  return (
    <ApplicationContext.Provider
      value={{
        project: project,
        setProject: setProject,
        board: board,
        setBoard: setBoard,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => useContext(ApplicationContext);
