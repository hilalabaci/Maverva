import { useState, useEffect, useCallback, useRef } from "react";
import { getSprints } from "../../api/sprint-api";
import { getBacklogCards } from "../../api/backlog-api";
import { IssueType, SprintType } from "../../types/user.types";
import { useUserContext } from "../../contexts/UserContext";

function deduplicateById(issues: IssueType[]): IssueType[] {
  const seen = new Set<string>();
  return issues.filter((issue) => {
    if (seen.has(issue.Id)) return false;
    seen.add(issue.Id);
    return true;
  });
}

export function useListIssues(projectKey: string, boardId: string) {
  const { token } = useUserContext();
  const [issues, setIssues] = useState<IssueType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const hasFetched = useRef(false);

  const load = useCallback(async () => {
    if (!projectKey || !boardId || !token) return;
    setIsLoading(true);
    try {
      const [sprintsRes, backlogRes] = await Promise.all([
        getSprints(boardId, projectKey, token),
        getBacklogCards(projectKey, boardId, token),
      ]);

      const sprintList: SprintType[] = sprintsRes.ok && sprintsRes.data ? sprintsRes.data : [];
      const sprintIssues = sprintList.flatMap((s) =>
        (s.Issues || []).map((issue) => ({ ...issue, Sprint: s }))
      );
      const backlogIssues: IssueType[] = backlogRes.ok && backlogRes.data ? backlogRes.data : [];

      setIssues(deduplicateById([...sprintIssues, ...backlogIssues]));
    } catch (err) {
      console.error("Error loading list:", err);
    } finally {
      setIsLoading(false);
    }
  }, [projectKey, boardId, token]);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    load();
  }, [load]);

  return { issues, isLoading };
}
