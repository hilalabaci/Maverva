import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({});
const storageKey = "process_user";
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
