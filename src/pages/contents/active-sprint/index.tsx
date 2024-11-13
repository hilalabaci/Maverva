import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CardList from "../../../components/actions/card/card-list";
import { Container, TitleWrapper, Title, Wrapper } from "./styles";
import { CardType, ColumnType, SprintType } from "../../../types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiHelper from "../../../api/apiHelper";
import NumberOfCards from "../../../components/actions/card/number-cards";
import Scroll from "../../../components/tools/scroll";

type URLParams = {
  boardId?: string;
};

type ActiveSprintsProps = {
  activeSprint?: SprintType;
  boardId?: string | undefined;
  filteredCards: CardType[];
  onUpdate: (card: CardType) => void;
  onDelete: (id: string) => void;
  addedCard: (card: CardType) => void;
  cards: CardType[];
  projectKey?: string;
};
function ActiveSprint({
  activeSprint,
  filteredCards,
  onUpdate,
  onDelete,
  addedCard,
  projectKey,
}: ActiveSprintsProps) {
  const { boardId } = useParams<URLParams>();
  const [columns, setColumns] = useState<ColumnType[]>([]);

  async function loadColumns() {
    if (!boardId) {
      console.log(`boardId not found ${boardId}`);
      return;
    }
    try {
      const { ok, data } = await apiHelper.getColumns(boardId);
      if (ok && data) setColumns(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  useEffect(() => {
    if (boardId) {
      loadColumns();
    }
  }, [boardId]);

  return (
    <Container>
      {activeSprint ? (
        <DndProvider backend={HTML5Backend}>
          {columns.map((column) => (
            <Wrapper>
              <TitleWrapper>
                <Title>{column.title}</Title>
                <NumberOfCards
                  numberOfCards={
                    filteredCards.filter(
                      (card) => card.status === column.status
                    ).length
                  }
                  numberOfFilteredCards={
                    filteredCards.filter(
                      (card) => card.status === column.status
                    ).length
                  }
                />
              </TitleWrapper>
              <CardList
                key={column._id}
                onUpdate={onUpdate}
                onDelete={onDelete}
                addedCard={addedCard}
                title={column.title}
                projectKey={projectKey as string}
                cards={filteredCards.filter(
                  (card) => card.status === column.status
                )}
                status={column.status}
                boardId={boardId}
              />
            </Wrapper>
          ))}
        </DndProvider>
      ) : undefined}
    </Container>
  );
}
export default ActiveSprint;
