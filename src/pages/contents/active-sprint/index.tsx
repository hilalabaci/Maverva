import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CardList from "../../../components/actions/card/card-list";
import {
  ColumnContainer,
  TitleWrapper,
  Title,
  Wrapper,
  Container,
  AddColumnContainer,
  AddColumnWrapper,
  AddColumnTitle,
  IconWrapper,
  IconAdd,
  IconClose,
  CloseButton,
} from "./styles";
import { CardType, ColumnType, SprintType } from "../../../types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiHelper from "../../../api/apiHelper";
import NumberOfCards from "../../../components/actions/card/number-cards";
import { ButtomWrapper } from "../../../components/actions/card/cards/styles";
import { NextButton } from "../../../components/actions/board/optional/styles";
import { CancelButton } from "../../../components/actions/addPerson/styles";

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
  const [displayCreateColumn, setDisplayCreateColumn] = useState(false);
  const [title, setTitle] = useState("");
  function handleChange(value: string) {
    setTitle(value);
  }

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

  async function SubmitColumn() {
    if (!boardId) {
      console.log(`boardId not found ${boardId}`);
      return;
    }
    try {
      const columnData = {
        title: title,
        boardId: boardId,
      };
      const { ok, data } = await apiHelper.addColumn(columnData);
      if (ok && data) {
        await loadColumns();
        setTitle("");
      }
    } catch (error) {}
  }
  useEffect(() => {
    if (boardId) {
      loadColumns();
    }
  }, [boardId]);

  return (
    <Container>
      <ColumnContainer>
        {activeSprint ? (
          <DndProvider backend={HTML5Backend}>
            {columns
              .sort((a, b) => a.status - b.status)
              .map((column) => (
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
                    sprintId={activeSprint._id}
                  />
                </Wrapper>
              ))}
          </DndProvider>
        ) : undefined}
      </ColumnContainer>
      <AddColumnContainer>
        {displayCreateColumn ? (
          <AddColumnWrapper
            onSubmit={(e) => {
              e.preventDefault();
              SubmitColumn();
              setInterval(() => {
                setDisplayCreateColumn(false);
              }, 1000);
            }}
          >
            <AddColumnTitle
              value={title}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Add another list"
            />
            <ButtomWrapper>
              <NextButton>Add list</NextButton>
              <CloseButton onClick={() => setDisplayCreateColumn(false)}>
                <IconClose />
              </CloseButton>
            </ButtomWrapper>
          </AddColumnWrapper>
        ) : (
          <IconWrapper onClick={() => setDisplayCreateColumn(true)}>
            <IconAdd />
          </IconWrapper>
        )}
      </AddColumnContainer>
    </Container>
  );
}
export default ActiveSprint;
