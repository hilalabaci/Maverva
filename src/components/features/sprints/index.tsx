import { useEffect, useState } from "react";
import { CardType, SprintType } from "../../../types";
import { useParams } from "react-router-dom";
import apiHelper from "../../../api/apiHelper";
import Sprint from "../../features/sprint";

type URLParams = {
  boardId?: string;
};

function Sprints() {
  const { boardId } = useParams<URLParams>();
  const [sprints, setSprints] = useState<SprintType[]>([]);
  const [activeToSprint, setActiveToSprint] = useState(false);

  async function loadSprints() {
    if (!boardId) {
      console.log(`boardId not found ${boardId}`);
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

  function onUpdateCard(card: CardType | undefined) {
    loadSprints();
  }
  function ActiontoSprint(id: string) {
    if (sprints[0]._id === id) {
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
          sprintId={sprint._id}
          sprintName={sprint.name}
          sprintStartDate={sprint.startDate}
          sprintEndDate={sprint.endDate}
          activeToSprint={ActiontoSprint}
          sprintIsActive={sprint.active}
        />
      ))}
    </>
  );
}
export default Sprints;
