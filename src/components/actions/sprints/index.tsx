import { useEffect, useState } from "react";
import { CardType, SprintType } from "../../../types";
import { useParams } from "react-router-dom";
import apiHelper from "../../../api/apiHelper";
import Sprint from "../../tools/sprint";

type URLParams = {
  boardId?: string;
};

function Sprints() {
  const { boardId } = useParams<URLParams>();
  const [sprints, setSprints] = useState<SprintType[]>([]);

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
        />
      ))}
    </>
  );
}
export default Sprints;
