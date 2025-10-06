import { DndProvider } from "react-dnd";
import { useRef } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import BacklogCards from "../../features/backlogCards";
import { useCallback, useEffect, useState } from "react";
import { addSprint, getSprints } from "../../api/sprint-api";
import { useParams } from "react-router-dom";
import Sprint from "../../features/sprint";
import { useUserContext } from "../../contexts/UserContext";
import { Container } from "./styles";
import { IssueType, SprintType } from "../../types/user.types";

type URLParams = {
  boardId?: string;
  projectKey?: string;
};

function Backlog() {
  const hasFetchedSprints = useRef(false);
  const { boardId, projectKey } = useParams<URLParams>();
  const [sprints, setSprints] = useState<SprintType[]>([]);
  const [activeToSprint, setActiveToSprint] = useState(false);
  const { user, token } = useUserContext();
  const loadSprints = useCallback(async () => {
    try {
      if (!boardId || !token) return;
      const { ok, data } = await getSprints(
        boardId,
        projectKey as string,
        token
      );
      if (ok && data) setSprints(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }, [boardId, projectKey, token]);

  const createSprint = useCallback(async () => {
    if (!boardId || !user?.Id || !projectKey) {
      console.error("Missing required parameters to create sprint");
      return;
    }
    try {
      const { ok, data } = await addSprint(
        user?.Id,
        boardId,
        projectKey as string,
        token as string
      );
      if (ok && data) {
        setSprints((prevSprints: SprintType[]) => [
          ...prevSprints,
          data as SprintType,
        ]);
      }
    } catch (error) {
      console.error("Error creating sprint:", error);
    }
  }, [boardId, user?.Id, token, projectKey]);

  useEffect(() => {
    if (!boardId || hasFetchedSprints.current) return;
    hasFetchedSprints.current = true;
    loadSprints();
  }, [boardId, loadSprints]);

  function onUpdateCard(card: IssueType | undefined) {
    loadSprints();
  }
  function ActiontoSprint(id: string) {
    return sprints.length > 0 && sprints[0].Id === id;
  }
  function updateDragandDrop() {}

  useEffect(() => {
    if (sprints.length > 0) {
      setActiveToSprint(
        sprints[0].Id === sprints.find((sprint) => sprint.Id)?.Id
      );
    }
  }, [sprints]);

  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        {sprints.map((sprint) => (
          <Sprint
            key={sprint.Id}
            onUpdate={onUpdateCard}
            sprint={sprint}
            sprintId={sprint.Id}
            sprintName={sprint.Name}
            sprintStartDate={sprint.StartDate}
            sprintEndDate={sprint.EndDate}
            activeToSprint={ActiontoSprint}
            sprintIsActive={sprint.IsActive}
            sprintGoal={sprint.SprintGoal}
            loadActiveSprint={loadSprints}
          />
        ))}
        <BacklogCards
          createSprint={createSprint}
          updateDragandDrop={updateDragandDrop}
        />
      </DndProvider>
    </Container>
  );
}
export default Backlog;
