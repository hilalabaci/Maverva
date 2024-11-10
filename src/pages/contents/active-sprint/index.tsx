import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CardList from "../../../components/actions/card/card-list";
import { Container } from "./styles";
import { CardType, SprintType } from "../../../types";

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
  boardId,
  filteredCards,
  onUpdate,
  onDelete,
  addedCard,
  projectKey,
}: ActiveSprintsProps) {
  return (
    <Container>
      {activeSprint ? (
        <DndProvider backend={HTML5Backend}>
          <CardList
            onUpdate={onUpdate}
            onDelete={onDelete}
            addedCard={addedCard}
            title="BACKLOG"
            numberOfFilteredCards={
              filteredCards.filter((card) => card.status === 0).length
            }
            numberOfCards={
              filteredCards.filter((card) => card.status === 0).length
            }
            projectKey={projectKey as string}
            cards={filteredCards.filter((card) => card.status === 0)}
            status={0}
            boardId={boardId}
          />
          <CardList
            onUpdate={onUpdate}
            onDelete={onDelete}
            addedCard={addedCard}
            title="TO DO"
            numberOfFilteredCards={
              filteredCards.filter((card) => card.status === 1).length
            }
            numberOfCards={
              filteredCards.filter((card) => card.status === 1).length
            }
            projectKey={projectKey as string}
            cards={filteredCards.filter((card) => card.status === 1)}
            status={1}
            boardId={boardId}
          />
          <CardList
            onUpdate={onUpdate}
            onDelete={onDelete}
            addedCard={addedCard}
            title="IN PROGRESS"
            numberOfFilteredCards={
              filteredCards.filter((card) => card.status === 2).length
            }
            numberOfCards={
              activeSprint.cardIds.filter((card) => card.status === 2).length
            }
            projectKey={projectKey as string}
            cards={filteredCards.filter((card) => card.status === 2)}
            status={2}
            boardId={boardId}
          />
          <CardList
            onUpdate={onUpdate}
            onDelete={onDelete}
            addedCard={addedCard}
            title="DONE"
            numberOfFilteredCards={
              activeSprint.cardIds.filter((card) => card.status === 3).length
            }
            numberOfCards={
              activeSprint.cardIds.filter((card) => card.status === 3).length
            }
            projectKey={projectKey as string}
            cards={filteredCards.filter((card) => card.status === 3)}
            status={3}
            boardId={boardId}
          />
        </DndProvider>
      ) : undefined}
    </Container>
  );
}
export default ActiveSprint;
