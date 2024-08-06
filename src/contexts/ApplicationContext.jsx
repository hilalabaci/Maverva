import { createContext, useContext, useState } from "react";

const ApplicationContext = createContext({});
//const storageKey = "process_user";

export const ApplicationProvider = ({ children }) => {
  const [board, setBoard] = useState();

  return (
    <ApplicationContext.Provider value={{ board: board, setBoard: setBoard }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => useContext(ApplicationContext);
