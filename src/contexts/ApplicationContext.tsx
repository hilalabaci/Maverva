import { createContext, PropsWithChildren, useContext, useState } from "react";
import { BoardType } from "../types";

type ApplicationProviderProps = PropsWithChildren;
type ApplicationContextType = {
  board?: BoardType;
  setBoard: (board?: BoardType) => void;
};

const ApplicationContext = createContext<ApplicationContextType>({
  board: undefined,
  setBoard: () => {},
});
//const storageKey = "process_user";

export const ApplicationProvider = (props: ApplicationProviderProps) => {
  const [board, setBoard] = useState<BoardType | undefined>();

  return (
    <ApplicationContext.Provider value={{ board: board, setBoard: setBoard }}>
      {props.children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => useContext(ApplicationContext);
