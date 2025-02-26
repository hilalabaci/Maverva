import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Sprint from "../../features/sprint";
import apiHelper from "../../api/apiHelper";
import { IssueType, SprintType } from "../../types";

type URLParams = {
  boardId?: string;
};

function Sprints() {
  const { boardId } = useParams<URLParams>();
  const [sprints, setSprints] = useState<SprintType[]>([]);
  const [activeToSprint, setActiveToSprint] = useState(false);

  async function loadSprints() {
    if (!boardId) {
      return;
    }
    try {
      const { ok, data } = await apiHelper.getSprints(boardId);
      if (ok && data) setSprints(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  useEffect(() => {
    if (boardId) {
      loadSprints();
    }
  }, [boardId]);

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

  return (
    <>
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
        />
      ))}
    </>
  );
}
export default Sprints;
