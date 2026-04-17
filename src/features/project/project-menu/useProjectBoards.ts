import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBoards } from "../../../api/board-api";
import { BoardType } from "../../../types/user.types";
import { RouteParams } from "../../../types/auth.types";
import { useUserContext } from "../../../contexts/UserContext";

export function useProjectBoards(projectKey: string) {
  const hasFetchedBoards = useRef(false);
  const navigate = useNavigate();
  const { boardId } = useParams<RouteParams>();
  const { user, token } = useUserContext();

  const [boards, setBoards] = useState<BoardType[]>([]);
  const [recentBoards, setRecentBoards] = useState<BoardType[]>([]);

  const selectedBoard = boards.find((b) => b.Id === boardId);

  const loadBoards = useCallback(async () => {
    if (!user || !projectKey || !token) return;
    const { ok, data } = await getBoards(projectKey, user.Id, token);
    if (ok && data) setBoards(data);
  }, [user, projectKey, token]);

  useEffect(() => {
    if (hasFetchedBoards.current) return;
    hasFetchedBoards.current = true;
    loadBoards();
  }, [loadBoards]);

  useEffect(() => {
    if (boards.length > 0 && !boardId) {
      navigate(`/projects/${projectKey}/boards/${boards[0].Id}/backlog`, {
        replace: true,
      });
    }
  }, [boards, boardId, navigate, projectKey]);

  const addToRecent = (board: BoardType) => {
    setRecentBoards((prev) => {
      const filtered = prev.filter((b) => b.Id !== board.Id);
      return [board, ...filtered].slice(0, 2);
    });
  };

  return { boards, recentBoards, selectedBoard, boardId, addToRecent };
}
