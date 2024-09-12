import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CardList from "../../components/actions/card/card-list/index";
import TopMenu from "../../components/actions/top-menu";
import { useApplicationContext } from "../../contexts/ApplicationContext";
import { BoardType, CardType } from "../../types";
import Layout from "../templates/layout";
import { Wrapper, Menu, Main, MainContainer } from "./styles";
import { useParams } from "react-router-dom";

function Home() {
  const { projectKey } = useParams<{ projectKey: string }>();
  const { setBoard, board } = useApplicationContext();
  const [cards, setCards] = useState<CardType[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardType[]>([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setFilteredCards(
      cards.filter((card) => card.content.includes(searchInput))
    );
  }, [searchInput, cards]);

  async function loadBoard() {}

  async function loadCards(board: BoardType) {
    setBoard(board);
    const response = await fetch(
      process.env.REACT_APP_API_URL + "card?boardId=" + projectKey,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      setCards(data);
    }
  }

  function deleteCard(id: string) {
    setCards(cards.filter((card) => card._id !== id));
  }

  function updateCard(card: CardType) {
    const index = cards.findIndex((b) => b._id === card._id);
    const newCards = [...cards];
    newCards[index] = card;
    setCards(newCards);
    /*    setCards([...cards.filter((card) => card._id !== id), card]); */
  }

  function addedCard(card: CardType) {
    setCards([...cards, card]);
  }

  return (
    <Layout onBoardCrate={(board) => {}}>
      <Wrapper>
        <MainContainer>
          {board && (
            <TopMenu
              onBoardUpdate={() => {}}
              boardId={board._id}
              topMenuTitle={board.title}
              user={board.userId}
              setSearchInput={setSearchInput}
            />
          )}
          <Main>
            {board ? (
              <DndProvider backend={HTML5Backend}>
                <CardList
                  onUpdate={updateCard}
                  onDelete={deleteCard}
                  addedCard={addedCard}
                  title="TO DO"
                  numberOfFilteredCards={
                    filteredCards.filter((card) => card.status === 1).length
                  }
                  numberOfCards={
                    cards.filter((card) => card.status === 1).length
                  }
                  boardId={board._id}
                  cards={filteredCards.filter((card) => card.status === 1)}
                  status={1}
                />
                <CardList
                  onUpdate={updateCard}
                  onDelete={deleteCard}
                  addedCard={addedCard}
                  title="IN PROGRESS"
                  numberOfFilteredCards={
                    filteredCards.filter((card) => card.status === 2).length
                  }
                  numberOfCards={
                    cards.filter((card) => card.status === 2).length
                  }
                  boardId={board._id}
                  cards={filteredCards.filter((card) => card.status === 2)}
                  status={2}
                />
                <CardList
                  onUpdate={updateCard}
                  onDelete={deleteCard}
                  addedCard={addedCard}
                  title="DONE"
                  numberOfFilteredCards={
                    filteredCards.filter((card) => card.status === 3).length
                  }
                  numberOfCards={
                    cards.filter((card) => card.status === 3).length
                  }
                  boardId={board._id}
                  cards={filteredCards.filter((card) => card.status === 3)}
                  status={3}
                />
              </DndProvider>
            ) : undefined}
          </Main>
        </MainContainer>
      </Wrapper>
    </Layout>
  );
}
export default Home;
