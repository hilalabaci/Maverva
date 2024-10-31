import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CardList from "../../../components/actions/card/card-list";
import { Container } from "./styles";
import { BoardType, CardType } from "../../../types";

type ActiveSprintsProps = {
  selectedBoard?: BoardType;
  onUpdate: (card: CardType) => void;
  onDelete: (id: string) => void;
  addedCard: (card: CardType) => void;
  filteredCards: CardType[];
  cards: CardType[];
  projectKey?: string;
};

function ActiveSprints({
  selectedBoard,
  onUpdate,
  onDelete,
  addedCard,
  filteredCards,
  cards,
  projectKey,
}: ActiveSprintsProps) {
  return (
    <Container>
      {selectedBoard ? (
        <DndProvider backend={HTML5Backend}>
          <CardList
            onUpdate={onUpdate}
            onDelete={onDelete}
            addedCard={addedCard}
            title="TO DO"
            numberOfFilteredCards={
              filteredCards.filter((card) => card.status === 1).length
            }
            numberOfCards={cards.filter((card) => card.status === 1).length}
            projectKey={projectKey as string}
            cards={filteredCards.filter((card) => card.status === 1)}
            status={1}
            boardId={selectedBoard._id}
          />
          <CardList
            onUpdate={onUpdate}
            onDelete={onDelete}
            addedCard={addedCard}
            title="IN PROGRESS"
            numberOfFilteredCards={
              filteredCards.filter((card) => card.status === 2).length
            }
            numberOfCards={cards.filter((card) => card.status === 2).length}
            projectKey={projectKey as string}
            cards={filteredCards.filter((card) => card.status === 2)}
            status={2}
            boardId={selectedBoard._id}
          />
          <CardList
            onUpdate={onUpdate}
            onDelete={onDelete}
            addedCard={addedCard}
            title="DONE"
            numberOfFilteredCards={
              filteredCards.filter((card) => card.status === 3).length
            }
            numberOfCards={cards.filter((card) => card.status === 3).length}
            projectKey={projectKey as string}
            cards={filteredCards.filter((card) => card.status === 3)}
            status={3}
            boardId={selectedBoard._id}
          />
        </DndProvider>
      ) : undefined}
    </Container>
  );
}
export default ActiveSprints;
