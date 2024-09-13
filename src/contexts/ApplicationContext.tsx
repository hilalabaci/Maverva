import { createContext, PropsWithChildren, useContext, useState } from "react";
import { ProjectType } from "../types";

type ApplicationProviderProps = PropsWithChildren;
type ApplicationContextType = {
  project?: ProjectType;
  setProject: (project?: ProjectType) => void;
};

const ApplicationContext = createContext<ApplicationContextType>({
  project: undefined,
  setProject: () => {},
});
//const storageKey = "process_user";

export const ApplicationProvider = (props: ApplicationProviderProps) => {
  const [project, setProject] = useState<ProjectType | undefined>();

  return (
    <ApplicationContext.Provider
      value={{ project: project, setProject: setProject }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => useContext(ApplicationContext);
