import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardMenu from "../../components/actions/boards/board-menu";
import Navbar from "../../components/tools/navbar";
import CardList from "../../components/actions/card/card-list/index";
import TopMenu from "../../components/actions/top-menu";
import { useApplicationContext } from "../../contexts/ApplicationContext";
import {
  Container,
  NavbarWrapper,
  Wrapper,
  Menu,
  Main,
  GlobalStyle,
  MainContainer,
} from "./styles";
import { BoardType, CardType } from "../../types";

function Home() {
  const { setBoard, board } = useApplicationContext();
  const [cards, setCards] = useState<CardType[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardType[]>([]);
  const [boards, setBoards] = useState<BoardType[]>([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setFilteredCards(
      cards.filter((card) => card.content.includes(searchInput))
    );
  }, [searchInput, cards]);

  async function loadCards(board: BoardType) {
    setBoard(board);
    const response = await fetch(
      process.env.REACT_APP_API_URL + "card?boardId=" + board._id,
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

  function onBoardUpdate(board: BoardType) {
    const index = boards.findIndex((b: BoardType) => b._id === board._id);
    const newBoards = [...boards];
    newBoards[index] = board;
    setBoards(newBoards);
  }

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const addBoard = (board: BoardType) => {
    const index = boards.findIndex((b) => b._id === board._id);
    const newBoards = [...boards];
    if (index !== -1) newBoards[index] = board;
    else newBoards.push(board);
    setBoards(newBoards);
  };

  return (
    <Container>
      <GlobalStyle />
      <NavbarWrapper>
        <Navbar onSearch={onSearch} onCreate={addBoard} />
      </NavbarWrapper>
      <Wrapper>
        <Menu>
          <BoardMenu
            setBoards={setBoards}
            onBoardChange={loadCards}
            boards={boards}
          />
        </Menu>
        <MainContainer>
          {board && (
            <TopMenu
              onBoardUpdate={onBoardUpdate}
              boardId={board._id}
              topMenuTitle={board.title}
              user={board.userId}
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
    </Container>
  );
}
export default Home;
