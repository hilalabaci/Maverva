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
    if (sprints[0].Id === id) {
      setActiveToSprint(true);
      return true;
    }
    return false;
  }
  return (
    <>
      {sprints.map((sprint) => (
        <Sprint
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
