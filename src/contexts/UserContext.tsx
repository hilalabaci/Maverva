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
  token?: string;
  setToken: (token?: string) => void;
  isLoading: boolean;
};

const UserContext = createContext<UserContextType>({
  isLoading: true,
  setUser: () => {},
  user: undefined,
  setToken: () => {},
  token: undefined,
});
const userKey = "process_user";
export const tokenKey = "process_token";

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserType | undefined>();
  const [token, setToken] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const userJSON = localStorage.getItem(userKey);
    if (userJSON) setUser(JSON.parse(userJSON));
    const tokenValue = localStorage.getItem(tokenKey);
    if (tokenValue) setToken(tokenValue);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem(userKey, JSON.stringify(user));
    else localStorage.removeItem(userKey);
  }, [user]);

  // //read the token from cookie named token
  // useEffect(() => {
  //   const tokenFromCookie = document.cookie
  //     .split("; ")
  //     .find((row) => row.startsWith("token="))
  //     ?.split("=")[1];
  //   if (tokenFromCookie) setToken(tokenFromCookie);
  // }, []);

  useEffect(() => {
    if (token) localStorage.setItem(tokenKey, token);
    else localStorage.removeItem(tokenKey);
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
        isLoading: isLoading,
        token: token,
        setToken: setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
