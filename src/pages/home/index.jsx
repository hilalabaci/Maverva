import React, { useState } from "react";
import BoardMenu from "../../components/boards/board-menu";
import Navbar from "../../components/navbar";
import CardList from "../../components/card/card-list";
import {
  Container,
  NavbarWrapper,
  Wrapper,
  Menu,
  Main,
  GlobalStyle,
  MainContainer,
} from "./styles";
import TopMenu from "../../components/top-menu";

function Home(props) {
  const [cards, setCards] = useState([]);
  const [boards, setBoards] = useState([]);
  const [boardId, setBoardId] = useState("");
  const [boardTitle, setBoardTitle] = useState("");
  async function loadCards(boardId, boardTitle) {
    setBoardId(boardId);
    setBoardTitle(boardTitle);
    const response = await fetch(
      "http://127.0.0.1:3001/card?boardId=" + boardId,
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
  function deleteCard(id) {
    setCards(cards.filter((card) => card._id !== id));
  }
  function updateCard(id, card) {
    setCards([...cards.filter((card) => card._id !== id), card]);
  }
  function addedCard(card) {
    setCards([...cards, card]);
  }
  function onBoardUpdate(board) {
    const index = boards.findIndex((b) => b._id === board._id);
    const newBoards = [...boards]
    newBoards[index] = board;
    setBoards(newBoards);
  }

  return (
    <Container>
      <GlobalStyle />
      <NavbarWrapper>
        <Navbar />
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
          {boardId ? (
            <TopMenu
              onBoardUpdate={onBoardUpdate}
              boardId={boardId}
              topMenuTitle={boardTitle}
            />
          ) : undefined}

          <Main>
            {boardId ? (
              <>
                <CardList
                  onUpdate={updateCard}
                  onDelete={deleteCard}
                  addedCard={addedCard}
                  title="TO DO"
                  NumberofCards={
                    cards.filter((card) => card.status === 1).length
                  }
                  boardId={boardId}
                  cards={cards.filter((card) => card.status === 1)}
                />
                <CardList
                  onUpdate={updateCard}
                  onDelete={deleteCard}
                  addedCard={addedCard}
                  title="IN PROGRESS"
                  NumberofCards={
                    cards.filter((card) => card.status === 2).length
                  }
                  boardId={boardId}
                  cards={cards.filter((card) => card.status === 2)}
                />
                <CardList
                  onUpdate={updateCard}
                  onDelete={deleteCard}
                  addedCard={addedCard}
                  title="DONE"
                  NumberofCards={
                    cards.filter((card) => card.status === 3).length
                  }
                  boardId={boardId}
                  cards={cards.filter((card) => card.status === 3)}
                />
              </>
            ) : undefined}
          </Main>
        </MainContainer>
      </Wrapper>
    </Container>
  );
}
export default Home;
