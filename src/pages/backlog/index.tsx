import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BacklogCards from "../../features/backlogCards";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { IssueType, SprintType } from "../../types";
import { addSprint, getSprints } from "../../api/sprintApi";
import { useParams } from "react-router-dom";
import Sprint from "../../features/sprint";
import { useUserContext } from "../../contexts/UserContext";

type URLParams = {
  boardId?: string;
};

function Backlog() {
  const { boardId } = useParams<URLParams>();
  const [sprints, setSprints] = useState<SprintType[]>([]);
  const [activeToSprint, setActiveToSprint] = useState(false);
  const { user } = useUserContext();

  async function loadSprints() {
    if (!boardId) {
      return;
    }
    try {
      const { ok, data } = await getSprints(boardId);
      if (ok && data) setSprints(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  useEffect(() => {
    if (boardId) {
      loadSprints();
    }
  }, [boardId, createSprint]);

  function onUpdateCard(card: IssueType | undefined) {
    loadSprints();
  }
  function ActiontoSprint(id: string) {
    return sprints.length > 0 && sprints[0].Id === id;
  }

  useEffect(() => {
    if (sprints.length > 0) {
      setActiveToSprint(
        sprints[0].Id === sprints.find((sprint) => sprint.Id)?.Id
      );
    }
  }, [sprints]);
  async function createSprint() {
    const sprintData = {
      boardId: boardId,
      userId: user?.Id,
    };
    try {
      const { ok, data } = await addSprint(sprintData);
      if (ok && data) {
        setSprints((prevSprints: SprintType[]) => [
          ...prevSprints,
          data as SprintType,
        ]);
      }
    } catch (error) {
      console.error("Error creating sprint:", error);
    }
  }

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
        <BacklogCards createSprint={createSprint} />
      </DndProvider>
    </Container>
  );
}
export default Backlog;
