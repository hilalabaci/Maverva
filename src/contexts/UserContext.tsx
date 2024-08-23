import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserType } from "../types";

type Props = PropsWithChildren;
type UserContextType = {
  user?: UserType;
  setUser: (user?: UserType) => void;
  isLoading: boolean;
};

const UserContext = createContext<UserContextType>({
  isLoading: true,
  setUser: () => {},
  user: undefined,
});
const storageKey = "process_user";

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserType | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const userJSON = localStorage.getItem(storageKey);
    if (userJSON) setUser(JSON.parse(userJSON));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem(storageKey, JSON.stringify(user));
    else localStorage.removeItem(storageKey);
  }, [user]);

  return (
    <UserContext.Provider
      value={{ user: user, setUser: setUser, isLoading: isLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
