import { useEffect, useRef, useState } from "react";
import { getUserstoBoard } from "../../api/board-api";
import { useUserContext } from "../../contexts/UserContext";
import { UserType } from "../../types/user.types";

export function useLoadBoardUsers(
  projectKey: string,
  boardId: string | undefined
) {
  const { user, token } = useUserContext();
  const hasFetched = useRef(false);
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    if (!projectKey || !boardId || !user?.Id || !token || hasFetched.current)
      return;

    hasFetched.current = true;

    getUserstoBoard(projectKey, boardId, user.Id, token)
      .then((response) => {
        if (response.ok) {
          const data = response.data as { users: UserType[] };
          setUsers(data.users);
        }
      })
      .catch((error) => console.error("Failed to load board users", error));
  }, [projectKey, boardId, user?.Id, token]);

  return users;
}
